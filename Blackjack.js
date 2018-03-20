const strategy=require('./Suggestions')
const shuffle=require('knuth-shuffle').knuthShuffle
const fs=require('fs')
const _=require('lodash')
const GameOptions=require('./GameOptions')
var gameOptions=GameOptions({
    numberOfDecks:6,
    hitSoft17:false,
    doubleAfterSplit:true,
    doubleRange:[0,21],
    maxSplitHands:4,
    resplitAces:false,
    hitSplitedAce:false,
    surrender:false,
    CSM:true
})
console.log(gameOptions)
var deck=[]
var hiLoCount=0
InitializeDeck(gameOptions.numberOfDecks)

var CSMDeck=_.clone(deck)

function Shuffle(){
    hiLoCount=0
    deck=_.shuffle(CSMDeck)
}
var initialBet=100
var  verboseLog=false





function Log(text){
    if(verboseLog){
        console.log(text+'\n')
    }
}

const HandTotal=require('./Points')


function DealCard(){
    let card=deck.pop()

    if((card>=2)&&(card<=6)){
        hiLoCount++
    }else if((card===1)||(card===10)){
        hiLoCount--
    }
    return card
}

function PrintHand(cards){
    let text=""
    for (let i=0;i<cards.length-1;i++){
        text+=`${cards[i]}, `
    }
    text+=`${cards[cards.length-1]}`

    return text
}

function InitializeDeck(numberOfDecks){
    deck=[]
    const cards=[1,2,3,4,5,6,7,8,9,10,10,10,10]
    for(let i=0;i<numberOfDecks;i++){
        for(let j=0;j<4;j++){
            deck.push(...cards)
        }
    }
    shuffle(deck)
    hiLoCount=0

}

function PlayDealerHand(dealerCards,options){
    let dealerTotal=HandTotal(dealerCards)

    while((dealerTotal.total<17)||((dealerTotal.total===17)&& (dealerTotal.soft) &&(options.hitSoft17))){
        dealerCards.push(DealCard())
        dealerTotal=HandTotal(dealerCards)
    }
    return dealerTotal
}

function PlayPlayerHand(playerCards,dealerCard,handCount,dealerCheckedBlackJack,dealerHasBlackJack,options){//function (playerCards,dealerCard,handCount,dealerCheckedBlackJack,dealerHasBlackJack,options)

    let suggestion=''
    while(true){
        suggestion=strategy(playerCards,dealerCard,handCount,dealerCheckedBlackJack,dealerHasBlackJack,options)

        switch(suggestion){
            case 'split':
                return 'split'
                break;

            case 'stand':
                return 'stand'
                break;

            case 'surrender':
                return 'surrender'
                break;

            case 'double':
                playerCards.push(DealCard())
                return 'double'
                break

            case 'hit':
                playerCards.push(DealCard())
                Log('hit the hand. The player hands now is '+playerCards+ ' player total:'+HandTotal(playerCards).total)
                if(HandTotal(playerCards).total>21){
                    return 'bust'
                }

                break;
            default:
                throw Error('unknown stretegy')
                break;
        }
    }
}

function PlayThePlayer(playerHand,dealerCard,options){

    let status

    for(let handCount=0;handCount<playerHand.length;handCount++){
        if(playerHand[handCount].splitAce){
            if(!options.hitSplitedAce){//splited ace only allow two cards
                if(!options.resplitAces||(playerHand[handCount].cards[0]!==playerHand[handCount].cards[1])){
                    Log('One card drawn to a split ace')
                    continue
                }
                if(playerHand.length===options.maxSplitHands){
                    Log('You reached the max number of hands with those aces')
                    continue
                }
            }else{

                if(playerHand.length===options.maxSplitHands){
                    Log('You reached the max number of hands with those aces, hit on [A,A]')
                    playerHand[handCount].cards.push(DealCard())
                }
            }



        }

        status=PlayPlayerHand(playerHand[handCount].cards,dealerCard,playerHand.length,true,false,options)
        if(status==='split'){
            Log(`Player cards: ${PrintHand(playerHand[handCount].cards)} - dealer card: ${dealerCard} - ${status}`)

            const hand={bet:initialBet,cards:[]}

            if(playerHand[handCount].cards[0]===1){
                playerHand[handCount].splitAce=true
                hand.splitAce=true
            }

            hand.cards.push(playerHand[handCount].cards.pop())
            hand.cards.push(DealCard())
            playerHand[handCount].cards.push(DealCard())
            playerHand.push(hand)

            //redo this hand in case continue to hit
            handCount--
            continue
        }
        else if(status==='double'){
            playerHand[handCount].bet=playerHand[handCount].bet*2
        }
        else if(status==='surrender'){
            playerHand[handCount].surrender=true
        }

        //Log the status, for debugging
        Log(`Player cards: ${PrintHand(playerHand[handCount].cards)} - dealer card: ${dealerCard} - ${status}`)
    }
}

function EvaluateHand(playerHand, dealerCards, options){
    let hand
    let win=0
    let playerBlackjack=(playerHand.length===1)&&(playerHand[0].cards.length===2)&&(HandTotal(playerHand[0].cards).total===21)
    let dealerBlackjack=(dealerCards.length===2)&&(HandTotal(dealerCards).total===21)

    Log(`Dealer hand: ${PrintHand(dealerCards)}`)


    for(hand=0;hand<playerHand.length;hand++){
        if(playerHand[hand].surrender){
            win-=(playerHand[hand].bet/2)
            Log('surrender')
        }else{
            let playerTotal=HandTotal(playerHand[hand].cards).total
            let dealerTotal=HandTotal(dealerCards).total
            Log(`playerTotal: ${playerTotal}, dealerTotal: ${dealerTotal}, dealerCards:${dealerCards}`)

            // if(playerBlackjack){
            //     if(dealerBlackjack){
            //         Log('Player and Dealer have black - push')
            //     }
            //     else{
            //         Log('Player won by BlackJack')
            //
            //         win+=(playerHand[hand].bet*options.blackjackPayout)
            //     }
            // }
            if(dealerBlackjack){//assume dealer bj take split and double
                Log('Dealer has blackjack - you lost all the bet including split and double')
                win-=playerHand[hand].bet
            }
            else if(playerTotal>21){//player bust
                Log('player bust')
                win-=playerHand[hand].bet
            }
            else if(dealerTotal>21){
                Log('dealer bust')
                win+=playerHand[hand].bet
            }
            else if(dealerTotal>playerTotal){
                Log('dealer point higher than player - player lost')
                win-=playerHand[hand].bet
            }
            else if(dealerTotal<playerTotal){
                Log('player points higher than dealer - player win')
                win+=playerHand[hand].bet
            }
            else if(dealerTotal===playerTotal){
                Log('Game push')
            }
        }

    }
    Log('Total outcome $'+win)
    return win
}

function RunAGame(options){
    let betAmount=initialBet
    let trueCount=0
    

    //check if we need to reshuffle

    if(options.CSM){
        Shuffle()
        Log('Shuffle')
        Log('first ten cards in the deck:',deck.slice(0,10),deck.length)
    }else{
        if(deck.length<Math.max(26,3*options.numberOfDecks)){//was 13
            Log('Shuffle')
            Shuffle()
        }
    }


    //If using counting system, set up here
    // if(options.count&&(options.count.system==='HiLo')){
    //     trueCount=hiLoCount/(deck.length/52)
    //     options.count.trueCount=trueCount
    //
    //
    //     //betting system set here
    //     if(trueCount>=4){
    //         betAmount*=4
    //     }else if(trueCount>=2){
    //         betAmount*=2
    //     }else if(trueCount<=3){
    //         betAmount/=2
    //     }
    // }

    //the order needs to be observed
    const dealerCards=[]
    dealerCards.push(DealCard())
    dealerCards.push(DealCard())

    const playerHand=[]
    const hand={actingBet:betAmount,cards:[]}
    hand.cards.push(DealCard())
    hand.cards.push(DealCard())
    playerHand.push(hand)


    Log(`inital two cards:   -player ${playerHand[0].cards}, -dealer ${dealerCards} `)
    //start
    let playerBlackjack=(HandTotal(playerHand[0].cards).total===21)
    let dealerBlackjack=(HandTotal(dealerCards).total===21)
    if(playerBlackjack){
        if(dealerBlackjack){
            Log('Player and Dealer have black - push')
            return 0
        }
        else{
            Log('Player won by BlackJack')
            Log('Total outcome $'+betAmount*options.blackjackPayout)
            return betAmount*options.blackjackPayout
        }
    }
    if(dealerCards[0]===1){
        let action=strategy(playerHand[0].cards,dealerCards[0],playerHand.length,true,false,options)
        if((action==='surrender')){
            let win
            if(dealerBlackjack){
                win=-betAmount
                Log('Dealer has BlackJack, Player not allow to surrender')
                Log('Total outcome $'+win)
                return win
            }else{
                win=-betAmount/2
                Log('Dealer does not have BlackJack, Player surrender and lost half bet')
                Log('Total outcome $'+win)
                return win
            }

        }
    }

    PlayThePlayer(playerHand,dealerCards[0],options)
    let bust=true
    for(let hand=0;hand<playerHand.length;hand++){

        if(HandTotal(playerHand[hand].cards).total<=21){
            bust=false
        }
    }
    if(bust){
        Log('All player hands bust, dealer does not continue')
        return EvaluateHand(playerHand,dealerCards,options)
    }




    //check if player has bj,surrender or bust, then dealer does not continue
    PlayDealerHand(dealerCards,options)




    return EvaluateHand(playerHand,dealerCards,options)




}


function standardDeviation(values){
    var avg = average(values);

    var squareDiffs = values.map(function(value){
        var diff = value - avg;
        var sqrDiff = diff * diff;
        return sqrDiff;
    });

    var avgSquareDiff = average(squareDiffs);

    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}

function average(data){
    var sum = data.reduce(function(sum, value){
        return sum + value;
    }, 0);

    var avg = sum / data.length;
    return avg;
}


function HouseEdge(numTrials,handsPerTrial,gameOptions){
    // Holds the aggregate result from each run of X hands
    var simulationResults = [];

// output file - if not defined we don't output
    var outputFile = process.argv.slice(2)[0];

// Snap the time
    console.time('PlayBlackJack');

    for (var trial = 0; trial < numTrials; trial++)
    {
        var runningTotal = 0;

        for (var i = 0; i < handsPerTrial; i++)
        {
            // Here's where you control and can evaluation different options
            runningTotal += RunAGame(gameOptions);
            Log("Running total " + runningTotal);
            Log("");
        }

        simulationResults.push((((100 * runningTotal) / handsPerTrial) / initialBet));
    }
// console.log(simulationResults)
// Calculate stddev and average
    console.timeEnd('PlayBlackJack');
    console.log("Average:" + average(simulationResults) + "%");
    console.log("StdDev:" + standardDeviation(simulationResults) + "%");


// Write out all the results to a file if specified
    if (outputFile)
    {
        fs.appendFileSync(outputFile, "Average:" + average(simulationResults) + "\n");
        fs.appendFileSync(outputFile, "StdDev:" + standardDeviation(simulationResults) + "\n");
        for (var i = 0; i < simulationResults.length; i++)
        {
            fs.appendFileSync(outputFile, simulationResults[i] + "%\n");
        }
    }
}

const backBetRatio=10
const numTrials=20000
const handsPerTrial=5000
console.log(numTrials*handsPerTrial)
HouseEdge(numTrials,handsPerTrial,gameOptions)

