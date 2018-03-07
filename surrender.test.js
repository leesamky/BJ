var expect=require('chai').expect
const _=require('lodash')
var surrender=require('./Surrender')

let dealerCard=10
let playerCards=[6,10]
let handCount=1

console.log(surrender(...TwoDecksEarlySurrender10([5,9],10)))

function Points(cards){
    const info={total:0,soft:false,blackjack:false}
    let hasAce=false

    for(let i=0;i<cards.length;i++){
        info.total+=cards[i]

        //If Ace
        if(cards[i]===1){
            hasAce=true
        }
    }

    if(info.total<=11&&hasAce){
        info.total+=10;
        info.soft=true
    }

    if(info.total===21&&cards.length===2){
        info.blackjack=true
    }

    return info
}

function GameOptions(options){
    const playerOptions={
        hitSoft17: true,
        surrender: "late",
        doubleRange:[0,21],
        doubleAfterSplit: true,
        resplitAces: false,
        offerInsurance: true,
        numberOfDecks: 6,
        maxSplitHands: 4,
        count: {system: null, trueCount: null},
        strategyComplexity: "simple",
        hitSplitedAce:false,
        EuropeanNoHoldCard:false,
        CSM:false,
        fiveDragon:false,//no yet
        charlie:false

    }

    if (options)
    {
        if (options.hasOwnProperty("charlie"))
        {
            playerOptions.charlie = options.charlie;
        }

        if (options.hasOwnProperty("hitSoft17"))
        {
            playerOptions.hitSoft17 = options.hitSoft17;
        }
        if (options.hasOwnProperty("surrender"))
        {
            playerOptions.surrender = options.surrender;
        }
        if (options.hasOwnProperty("doubleAfterSplit"))
        {
            playerOptions.doubleAfterSplit = options.doubleAfterSplit;
        }
        if (options.hasOwnProperty("resplitAces"))
        {
            playerOptions.resplitAces = options.resplitAces;
        }
        if (options.hasOwnProperty("offerInsurance"))
        {
            playerOptions.offerInsurance = options.offerInsurance;
        }
        if (options.hasOwnProperty("numberOfDecks"))
        {
            playerOptions.numberOfDecks = options.numberOfDecks;
        }
        if (options.hasOwnProperty("maxSplitHands"))
        {
            playerOptions.maxSplitHands = options.maxSplitHands;
        }
        if (options.hasOwnProperty("count"))
        {
            playerOptions.count = options.count;
        }
        if (options.hasOwnProperty("strategyComplexity"))
        {
            playerOptions.strategyComplexity = options.strategyComplexity;
        }

        // Double rules - make sure doubleRange is set as that is all we use here
        if (options.hasOwnProperty("doubleRange"))
        {
            playerOptions.doubleRange = options.doubleRange;
        }
        else if (options.hasOwnProperty("double"))
        {
            // Translate to doubleRange
            if (options.double == "none")
            {
                playerOptions.doubleRange[0] = 0;
                playerOptions.doubleRange[1] = 0;
            }
            else if (options.double === "10or11")
            {
                playerOptions.doubleRange[0] = 10;
                playerOptions.doubleRange[1] = 11;
            }
            else if (options.double === "9or10or11")
            {
                playerOptions.doubleRange[0] = 9;
                playerOptions.doubleRange[1] = 11;
            }
        }
        if (options.hasOwnProperty("hitSplitedAce"))
        {
            playerOptions.hitSplitedAce = options.hitSplitedAce;
        }
        if (options.hasOwnProperty("EuropeanNoHoldCard"))
        {
            playerOptions.EuropeanNoHoldCard = options.EuropeanNoHoldCard;
        }
        if (options.hasOwnProperty("CSM"))
        {
            playerOptions.CSM = options.CSM;
        }
        if (options.hasOwnProperty("fiveDragon"))
        {
            playerOptions.fiveDragon = options.fiveDragon;
        }

        return playerOptions
    }
}

function oneDeckLateH17LateSurrender(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        surrender:'late',
        numberOfDecks:1,

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

function oneDeckLateS17LateSurrender(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        surrender:'late',
        numberOfDecks:1,

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

function twoDeckLateH17LateSurrender(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        surrender:'late',
        numberOfDecks:2,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

function twoDeckLateS17LateSurrender(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        surrender:'late',
        numberOfDecks:2,

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

function fourToSixDecksH17LateSurrender(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        surrender:'late',
        numberOfDecks:4,

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

function fourToSixDecksS17LateSurrender(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        surrender:'late',
        numberOfDecks:4,

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

function eightDecksH17LateSurrender(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        surrender:'late',
        numberOfDecks:8,

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}



function eightDecksS17LateSurrender(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        surrender:'late',
        numberOfDecks:8,

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}




let combine=[
    //p14 d9
    [[4,10],9],
    [[5,9],9],
    [[6,8],9],
    [[7,7],9],
    [[1,3],9],
    //p15 d9
    [[5,10],9],
    [[6,9],9],
    [[7,8],9],
    [[1,4],9],
    //p16 d9
    [[6,10],9],
    [[7,9],9],
    [[8,8],9],
    [[1,5],9],
    //p17 d9
    [[7,10],9],
    [[8,9],9],
    [[9,8],9],
    [[1,6],9],
    //p14 d10
    [[4,10],10],
    [[5,9],10],
    [[6,8],10],
    [[7,7],10],
    [[1,3],10],
    //p15 d10
    [[5,10],10],
    [[6,9],10],
    [[7,8],10],
    [[1,4],10],
    //p16,d10
    [[6,10],10],
    [[7,9],10],
    [[8,8],10],
    [[1,5],10],
    //p17,d10
    [[7,10],10],
    [[8,9],10],
    [[6,1],10],
    //p14 dA
    [[4,10],1],
    [[5,9],1],
    [[6,8],1],
    [[7,7],1],
    [[1,3],1],
    //p15 dA
    [[5,10],1],
    [[6,9],1],
    [[7,8],1],
    [[1,4],1],
    //p16 dA
    [[6,10],1],
    [[7,9],1],
    [[8,8],1],
    [[1,5],1],
    //p17 dA
    [[7,10],1],
    [[8,9],1],
    [[1,6],1],
]

let oneDeckH17Truty=[
    //p14 d10
    [[7,7],10],

    //p15 d10
    [[5,10],10],
    [[6,9],10],

    //p16,d10
    [[6,10],10],
    [[7,9],10],
    [[8,8],10],

    //p14 dA
    [[7,7],1],

    //p15 dA
    [[6,9],1],
    [[5,10],1],

    //p16 dA
    [[6,10],1],
    [[7,9],1],

    //p17,dA
    [[7,10],1]
]

let oneDeckH17Falsy=_.differenceWith(combine,oneDeckH17Truty,_.isEqual)

let oneDeckS17Truty=[

    //p14 d10
    [[7,7],10],

    //p15 d10
    [[5,10],10],
    [[6,9],10],

    //p16,d10
    [[6,10],10],
    [[7,9],10],
    [[8,8],10],

    //p16 dA
    [[6,10],1],

]

let oneDeckS17Falsy=_.differenceWith(combine,oneDeckS17Truty,_.isEqual)

let twoDecksH17Trusy=[


    //p15 d10
    [[5,10],10],
    [[6,9],10],

    //p16,d10
    [[6,10],10],
    [[7,9],10],


    //p15 dA
    [[5,10],1],
    [[6,9],1],

    //p16 dA
    [[6,10],1],
    [[7,9],1],
    [[8,8],1],

    //p17 dA
    [[7,10],1],
    [[8,9],1],
    [[9,8],1],
]

let twoDecksH17Falsy=_.differenceWith(combine,twoDecksH17Trusy,_.isEqual)

let twoDecksS17Trusy=[

    //p15 d10
    [[5,10],10],
    [[6,9],10],

    //p16,d10
    [[6,10],10],
    [[7,9],10],


    //p16 dA
    [[6,10],1],
    [[7,9],1],



]

let twoDecksS17Falsy=_.differenceWith(combine,twoDecksS17Trusy,_.isEqual)

let fourDecksH17Trusy=[

    //p16 d9
    [[6,10],9],
    [[7,9],9],




    //p15 d10
    [[5,10],10],
    [[6,9],10],

    //p16,d10
    [[6,10],10],
    [[7,9],10],




    //p15 dA
    [[5,10],1],
    [[6,9],1],
    [[7,8],1],

    //p16 dA
    [[6,10],1],
    [[7,9],1],
    [[8,8],1],

    //p17 dA
    [[7,10],1],
    [[8,9],1],
    [[9,8],1],

]

let fourDecksH17Falsy=_.differenceWith(combine,fourDecksH17Trusy,_.isEqual)

let fourDecksS17Trusy=[


    //p16 d9
    [[6,10],9],
    [[7,9],9],



    //p15 d10
    [[5,10],10],
    [[6,9],10],

    //p16,d10
    [[6,10],10],
    [[7,9],10],



    //p16 dA
    [[6,10],1],
    [[7,9],1],


]

let fourDecksS17Falsy=_.differenceWith(combine,fourDecksS17Trusy,_.isEqual)

let  eightDecksH17Trusy=[

    //p16 d9
    [[6,10],9],
    [[7,9],9],


    //p15 d10
    [[5,10],10],
    [[6,9],10],
    [[7,8],10],

    //p16,d10
    [[6,10],10],
    [[7,9],10],



    //p15 dA
    [[5,10],1],
    [[6,9],1],
    [[7,8],1],

    //p16 dA
    [[6,10],1],
    [[7,9],1],
    [[8,8],1],

    //p17 dA
    [[7,10],1],
    [[8,9],1],
    [[9,8],1],

]

let eightDecksH17Falsy=_.differenceWith(combine,eightDecksH17Trusy,_.isEqual)

let eightDecksS17Trusy=[

    //p16 d9
    [[6,10],9],
    [[7,9],9],



    //p15 d10
    [[5,10],10],
    [[6,9],10],
    [[7,8],10],

    //p16,d10
    [[6,10],10],
    [[7,9],10],




    //p16 dA
    [[6,10],1],
    [[7,9],1],


]

let eightDecksS17Falsy=_.differenceWith(combine,eightDecksS17Trusy,_.isEqual)


describe('One Deck H17 Late Surrender',function(){
    describe('surrender',function(){
        oneDeckH17Truty.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...oneDeckLateH17LateSurrender(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        oneDeckH17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...oneDeckLateH17LateSurrender(...value))).to.not.be.ok
            })
        })
    })
})

describe('One Deck S17 Late Surrender',function(){
    describe('surrender',function(){
        oneDeckS17Truty.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...oneDeckLateS17LateSurrender(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        oneDeckS17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...oneDeckLateS17LateSurrender(...value))).to.not.be.ok
            })
        })
    })
})

describe('Two Decks H17 Late Surrender',function(){
    describe('surrender',function(){
        twoDecksH17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...twoDeckLateH17LateSurrender(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        twoDecksH17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...twoDeckLateH17LateSurrender(...value))).to.not.be.ok
            })
        })
    })
})

describe('Two Decks S17 Late Surrender',function(){
    describe('surrender',function(){
        twoDecksS17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...twoDeckLateS17LateSurrender(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        twoDecksS17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...twoDeckLateS17LateSurrender(...value))).to.not.be.ok
            })
        })
    })
})


describe('Four/Six Decks H17 Late Surrender',function(){
    describe('surrender',function(){
        fourDecksH17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...fourToSixDecksH17LateSurrender(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        fourDecksH17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...fourToSixDecksH17LateSurrender(...value))).to.not.be.ok
            })
        })
    })
})


describe('Four/Six Decks S17 Late Surrender',function(){
    describe('surrender',function(){
        fourDecksS17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...fourToSixDecksS17LateSurrender(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        fourDecksS17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...fourToSixDecksS17LateSurrender(...value))).to.not.be.ok
            })
        })
    })
})

describe('Eight Decks H17 Late Surrender',function(){
    describe('surrender',function(){
        eightDecksH17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...eightDecksH17LateSurrender(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        eightDecksH17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...eightDecksH17LateSurrender(...value))).to.not.be.ok
            })
        })
    })
})

describe('Eight Decks S17 Late Surrender',function(){
    describe('surrender',function(){
        eightDecksS17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...eightDecksS17LateSurrender(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        eightDecksS17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...eightDecksS17LateSurrender(...value))).to.not.be.ok
            })
        })
    })
})


//early surrender
function OneDeckEarlySurrender10(playerCards,dealerCard){
    const options=GameOptions({

        surrender:'early10',
        numberOfDecks:1,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

function OneDeckEarlySurrenderA(playerCards,dealerCard){
    const options=GameOptions({

        surrender:'earlyA',
        numberOfDecks:1,
        doubleAfterSplit:false,
        hitSoft17:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}




let earlyCombine10=[
    //p14,d10
    [[4,10],10],
    [[5,9],10],
    [[6,8],10],
    [[7,7],10],
    //p15,d10
    [[5,10],10],
    [[6,9],10],
    [[7,8],10],
    //p16,d10
    [[6,10],10],
    [[7,9],10],
    [[8,8],10],
]
let earlyCombineA=[
    //p14,d10
    [[4,10],10],
    [[5,9],10],
    [[6,8],10],
    [[7,7],10],
    //p15,d10
    [[5,10],10],
    [[6,9],10],
    [[7,8],10],
    //p16,d10
    [[6,10],10],
    [[7,9],10],
    [[8,8],10],
    //p5,dA
    [[2,3],1],
    //p6,dA
    [[2,4],1],
    [[3,3],1],
    //p7,dA
    [[2,5],1],
    [[3,4],1],
    //p12,dA
    [[2,10],1],
    [[3,9],1],
    [[4,8],1],
    [[5,7],1],
    [[6,6],1],
    //p13 dA
    [[3,10],1],
    [[4,9],1],
    [[5,8],1],
    [[6,7],1],
    //p14,dA
    [[4,10],1],
    [[5,9],1],
    [[6,8],1],
    [[7,7],1],
    //p15,d1A
    [[5,10],1],
    [[6,9],1],
    [[7,8],1],
    //p16,dA
    [[6,10],1],
    [[7,9],1],
    [[8,8],1],
    //p17,dA
    [[7,10],1],
    [[8,9],1]

]
let oneDeckEarly10DASTrusy=[
    //p14,d10

    [[6,8],10],
    [[7,7],10],
    //p15,d10
    [[5,10],10],
    [[6,9],10],
    [[7,8],10],
    //p16,d10
    [[6,10],10],
    [[7,9],10],

]
let oneDeckEarlyA_DAS_Trusy=[
    //p22 dA h17
    [[2,2],1],

    //p14,d10

    [[6,8],10],
    [[7,7],10],
    //p15,d10
    [[5,10],10],
    [[6,9],10],
    [[7,8],10],
    //p16,d10
    [[6,10],10],
    [[7,9],10],
    //p5,dA
    [[2,3],1],
    //p6,dA
    [[2,4],1],
    [[3,3],1],
    //p7,dA
    [[2,5],1],
    [[3,4],1],
    //p12,dA
    [[2,10],1],
    [[3,9],1],
    [[4,8],1],
    [[5,7],1],
    [[6,6],1],
    //p13 dA
    [[3,10],1],
    [[4,9],1],
    [[5,8],1],
    [[6,7],1],
    //p14,dA
    [[4,10],1],
    [[5,9],1],
    [[6,8],1],
    [[7,7],1],
    //p15,d1A
    [[5,10],1],
    [[6,9],1],
    [[7,8],1],
    //p16,dA
    [[6,10],1],
    [[7,9],1],
    [[8,8],1],
    //p17,dA
    [[7,10],1],
    [[8,9],1]
]

let totalOneDeckEarly10DASTrusy=[...oneDeckH17Truty,...oneDeckEarly10DASTrusy]
let totalOneDeckEarly10DASFalsy=_.differenceWith([...combine,...earlyCombine10],totalOneDeckEarly10DASTrusy,_.isEqual)
let totalOneDeckEarlyA_DAS_Trusy=[...oneDeckEarlyA_DAS_Trusy,...oneDeckH17Truty]
let totalOneDeckEarlyA_DAS_Falsy=_.differenceWith([...combine,...earlyCombineA],totalOneDeckEarlyA_DAS_Trusy,_.isEqual)

describe('One Deck early10 Surrender',function(){
    describe('surrender',function(){
        totalOneDeckEarly10DASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...OneDeckEarlySurrender10(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        totalOneDeckEarly10DASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...OneDeckEarlySurrender10(...value))).to.not.be.ok
            })
        })
    })
})


describe('One Deck earlyA Surrender',function(){
    describe('surrender',function(){
        totalOneDeckEarlyA_DAS_Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...OneDeckEarlySurrenderA(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        totalOneDeckEarlyA_DAS_Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...OneDeckEarlySurrenderA(...value))).to.not.be.ok
            })
        })
    })
})


function TwoDecksEarlySurrender10(playerCards,dealerCard){
    const options=GameOptions({

        surrender:'early10',
        numberOfDecks:2,
        doubleAfterSplit:false,
        hitSoft17:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}


function TwoDecksEarlySurrenderA(playerCards,dealerCard){
    const options=GameOptions({

        surrender:'earlyA',
        numberOfDecks:2,
        doubleAfterSplit:false,
        hitSoft17:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

let twoDecksEarly10DASTrusy=[
    //p14,d10

    [[5,9],10],
    [[6,8],10],
    [[7,7],10],
    //p15,d10
    [[5,10],10],
    [[6,9],10],
    [[7,8],10],
    //p16,d10
    [[6,10],10],
    [[7,9],10],
    [[8,8],10],
]
let totalTwoDecksEarly10DASTrusy=[...twoDecksH17Trusy,...twoDecksEarly10DASTrusy]
let totalTwoDecksEarly10DASFalsy=_.differenceWith([...combine,...earlyCombine10],totalTwoDecksEarly10DASTrusy,_.isEqual)

let twoDecksEarlyA_DAS_Trusy=[
    //p22 dA h17
    [[2,2],1],

    //p14,d10
    [[5,9],10],
    [[6,8],10],
    [[7,7],10],
    //p15,d10
    [[5,10],10],
    [[6,9],10],
    [[7,8],10],
    //p16,d10
    [[6,10],10],
    [[7,9],10],
    [[8,8],10],
    //p5,dA
    [[2,3],1],
    //p6,dA
    [[2,4],1],
    [[3,3],1],
    //p7,dA
    [[2,5],1],
    [[3,4],1],
    //p12,dA
    [[2,10],1],
    [[3,9],1],
    [[4,8],1],
    [[5,7],1],
    [[6,6],1],
    //p13 dA
    [[3,10],1],
    [[4,9],1],
    [[5,8],1],
    [[6,7],1],
    //p14,dA
    [[4,10],1],
    [[5,9],1],
    [[6,8],1],
    [[7,7],1],
    //p15,d1A
    [[5,10],1],
    [[6,9],1],
    [[7,8],1],
    //p16,dA
    [[6,10],1],
    [[7,9],1],
    [[8,8],1],
    //p17,dA
    [[7,10],1],
    [[8,9],1]
]

let totalTwoDecksEarlyA_DAS_Trusy=[...twoDecksEarlyA_DAS_Trusy,...twoDecksH17Trusy]
let totalTwoDecksEarlyA_DAS_Falsy=_.differenceWith([...combine,...earlyCombineA],totalTwoDecksEarlyA_DAS_Trusy,_.isEqual)

describe('Two Decks early10 Surrender',function(){
    describe('surrender',function(){
        totalTwoDecksEarly10DASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...TwoDecksEarlySurrender10(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        totalTwoDecksEarly10DASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...TwoDecksEarlySurrender10(...value))).to.not.be.ok
            })
        })
    })
})

describe('Two Decks earlyA Surrender',function(){
    describe('surrender',function(){
        twoDecksEarlyA_DAS_Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...TwoDecksEarlySurrenderA(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        totalTwoDecksEarlyA_DAS_Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...TwoDecksEarlySurrenderA(...value))).to.not.be.ok
            })
        })
    })
})








function FourDecksEarlySurrender10(playerCards,dealerCard){
    const options=GameOptions({

        surrender:'early10',
        numberOfDecks:4,
        doubleAfterSplit:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

function FourDecksEarlySurrenderA(playerCards,dealerCard){
    const options=GameOptions({

        surrender:'earlyA',
        numberOfDecks:4,
        doubleAfterSplit:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}


let fourDecksEarly10DASTrusy=earlyCombine10
let totalFourDecksEarly10DASTrusy=[...fourDecksEarly10DASTrusy,...fourDecksH17Trusy]
let totalFourDecksEarly10DASFalsy=_.differenceWith([...combine,...earlyCombine10],totalFourDecksEarly10DASTrusy,_.isEqual)
let fourDecksEarlyA_DAS_Trusy=earlyCombineA
let totalFourDecksEarly_DAS_Trusy=[...fourDecksEarlyA_DAS_Trusy,...fourDecksH17Trusy]
let totalFourDecksEarly_DAS_Falsy=_.differenceWith([...combine,...earlyCombineA],totalFourDecksEarly_DAS_Trusy,_.isEqual)
describe('Four Decks early10 Surrender',function(){
    describe('surrender',function(){
        totalFourDecksEarly10DASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...FourDecksEarlySurrender10(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        totalFourDecksEarly10DASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...FourDecksEarlySurrender10(...value))).to.not.be.ok
            })
        })
    })
})

describe('Four Decks earlyA Surrender',function(){
    describe('surrender',function(){
        totalFourDecksEarly_DAS_Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...FourDecksEarlySurrenderA(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        totalFourDecksEarly_DAS_Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...FourDecksEarlySurrenderA(...value))).to.not.be.ok
            })
        })
    })
})






function EightDecksEarlySurrender10(playerCards,dealerCard){
    const options=GameOptions({

        surrender:'early10',
        numberOfDecks:8,
        doubleAfterSplit:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

function EightDecksEarlySurrenderA(playerCards,dealerCard){
    const options=GameOptions({

        surrender:'earlyA',
        numberOfDecks:8,
        doubleAfterSplit:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}


let eightDecksEarly10DASTrusy=earlyCombine10
let totalEightDecksEarly10DASTrusy=[...eightDecksEarly10DASTrusy,...eightDecksH17Trusy]
let totalEightDecksEarly10DASFalsy=_.differenceWith([...combine,...earlyCombine10],totalEightDecksEarly10DASTrusy,_.isEqual)
let eightDecksEarlyA_DAS_Trusy=earlyCombineA
let totalEightDecksEarly_DAS_Trusy=[...eightDecksEarlyA_DAS_Trusy,...eightDecksH17Trusy]
let totalEightDecksEarly_DAS_Falsy=_.differenceWith([...combine,...earlyCombineA],totalEightDecksEarly_DAS_Trusy,_.isEqual)

describe('Eight Decks early10 Surrender',function(){
    describe('surrender',function(){
        totalEightDecksEarly10DASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...EightDecksEarlySurrender10(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        totalEightDecksEarly10DASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...EightDecksEarlySurrender10(...value))).to.not.be.ok
            })
        })
    })
})

describe('Eight Decks earlyA Surrender',function(){
    describe('surrender',function(){
        totalEightDecksEarly_DAS_Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(surrender(...EightDecksEarlySurrenderA(...value))).to.be.ok
            })
        })
    })
    describe('Not Surrencer',function(){
        totalEightDecksEarly_DAS_Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(surrender(...EightDecksEarlySurrenderA(...value))).to.not.be.ok
            })
        })
    })
})

