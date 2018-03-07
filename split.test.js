var expect=require('chai').expect
const _=require('lodash')
const Split=require('./Split')

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
        resplitAces: true,
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


function OneDeckS17NoCharlieDAS(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:1,
        charlie:false,
        doubleAfterSplit:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}


let splitCombine=[
    [ [ 1, 1 ], 1 ],
    [ [ 1, 1 ], 2 ],
    [ [ 1, 1 ], 3 ],
    [ [ 1, 1 ], 4 ],
    [ [ 1, 1 ], 5 ],
    [ [ 1, 1 ], 6 ],
    [ [ 1, 1 ], 7 ],
    [ [ 1, 1 ], 8 ],
    [ [ 1, 1 ], 9 ],
    [ [ 1, 1 ], 10 ],
    [ [ 2, 2 ], 1 ],
    [ [ 2, 2 ], 2 ],
    [ [ 2, 2 ], 3 ],
    [ [ 2, 2 ], 4 ],
    [ [ 2, 2 ], 5 ],
    [ [ 2, 2 ], 6 ],
    [ [ 2, 2 ], 7 ],
    [ [ 2, 2 ], 8 ],
    [ [ 2, 2 ], 9 ],
    [ [ 2, 2 ], 10 ],
    [ [ 3, 3 ], 1 ],
    [ [ 3, 3 ], 2 ],
    [ [ 3, 3 ], 3 ],
    [ [ 3, 3 ], 4 ],
    [ [ 3, 3 ], 5 ],
    [ [ 3, 3 ], 6 ],
    [ [ 3, 3 ], 7 ],
    [ [ 3, 3 ], 8 ],
    [ [ 3, 3 ], 9 ],
    [ [ 3, 3 ], 10 ],
    [ [ 4, 4 ], 1 ],
    [ [ 4, 4 ], 2 ],
    [ [ 4, 4 ], 3 ],
    [ [ 4, 4 ], 4 ],
    [ [ 4, 4 ], 5 ],
    [ [ 4, 4 ], 6 ],
    [ [ 4, 4 ], 7 ],
    [ [ 4, 4 ], 8 ],
    [ [ 4, 4 ], 9 ],
    [ [ 4, 4 ], 10 ],
    [ [ 5, 5 ], 1 ],
    [ [ 5, 5 ], 2 ],
    [ [ 5, 5 ], 3 ],
    [ [ 5, 5 ], 4 ],
    [ [ 5, 5 ], 5 ],
    [ [ 5, 5 ], 6 ],
    [ [ 5, 5 ], 7 ],
    [ [ 5, 5 ], 8 ],
    [ [ 5, 5 ], 9 ],
    [ [ 5, 5 ], 10 ],
    [ [ 6, 6 ], 1 ],
    [ [ 6, 6 ], 2 ],
    [ [ 6, 6 ], 3 ],
    [ [ 6, 6 ], 4 ],
    [ [ 6, 6 ], 5 ],
    [ [ 6, 6 ], 6 ],
    [ [ 6, 6 ], 7 ],
    [ [ 6, 6 ], 8 ],
    [ [ 6, 6 ], 9 ],
    [ [ 6, 6 ], 10 ],
    [ [ 7, 7 ], 1 ],
    [ [ 7, 7 ], 2 ],
    [ [ 7, 7 ], 3 ],
    [ [ 7, 7 ], 4 ],
    [ [ 7, 7 ], 5 ],
    [ [ 7, 7 ], 6 ],
    [ [ 7, 7 ], 7 ],
    [ [ 7, 7 ], 8 ],
    [ [ 7, 7 ], 9 ],
    [ [ 7, 7 ], 10 ],
    [ [ 8, 8 ], 1 ],
    [ [ 8, 8 ], 2 ],
    [ [ 8, 8 ], 3 ],
    [ [ 8, 8 ], 4 ],
    [ [ 8, 8 ], 5 ],
    [ [ 8, 8 ], 6 ],
    [ [ 8, 8 ], 7 ],
    [ [ 8, 8 ], 8 ],
    [ [ 8, 8 ], 9 ],
    [ [ 8, 8 ], 10 ],
    [ [ 9, 9 ], 1 ],
    [ [ 9, 9 ], 2 ],
    [ [ 9, 9 ], 3 ],
    [ [ 9, 9 ], 4 ],
    [ [ 9, 9 ], 5 ],
    [ [ 9, 9 ], 6 ],
    [ [ 9, 9 ], 7 ],
    [ [ 9, 9 ], 8 ],
    [ [ 9, 9 ], 9 ],
    [ [ 9, 9 ], 10 ],
    [ [ 10, 10 ], 1 ],
    [ [ 10, 10 ], 2 ],
    [ [ 10, 10 ], 3 ],
    [ [ 10, 10 ], 4 ],
    [ [ 10, 10 ], 5 ],
    [ [ 10, 10 ], 6 ],
    [ [ 10, 10 ], 7 ],
    [ [ 10, 10 ], 8 ],
    [ [ 10, 10 ], 9 ],
    [ [ 10, 10 ], 10 ]
]

let oneDeckS17NoCharlieDASTrusy=[
    [ [ 1, 1 ], 1 ],
    [ [ 1, 1 ], 2 ],
    [ [ 1, 1 ], 3 ],
    [ [ 1, 1 ], 4 ],
    [ [ 1, 1 ], 5 ],
    [ [ 1, 1 ], 6 ],
    [ [ 1, 1 ], 7 ],
    [ [ 1, 1 ], 8 ],
    [ [ 1, 1 ], 9 ],
    [ [ 1, 1 ], 10 ],
    //das
    [ [ 2, 2 ], 2 ],
    [ [ 2, 2 ], 3 ],
    [ [ 2, 2 ], 4 ],
    [ [ 2, 2 ], 5 ],
    [ [ 2, 2 ], 6 ],
    [ [ 2, 2 ], 7 ],

    //das
    [ [ 3, 3 ], 2 ],
    [ [ 3, 3 ], 3 ],

    [ [ 3, 3 ], 4 ],
    [ [ 3, 3 ], 5 ],
    [ [ 3, 3 ], 6 ],
    [ [ 3, 3 ], 7 ],
    //das
    [ [ 3, 3 ], 8 ],

    //das
    [ [ 4, 4 ], 4 ],
    [ [ 4, 4 ], 5 ],
    [ [ 4, 4 ], 6 ],



    [ [ 6, 6 ], 2 ],
    [ [ 6, 6 ], 3 ],
    [ [ 6, 6 ], 4 ],
    [ [ 6, 6 ], 5 ],
    [ [ 6, 6 ], 6 ],
    [ [ 6, 6 ], 7 ],


    [ [ 7, 7 ], 2 ],
    [ [ 7, 7 ], 3 ],
    [ [ 7, 7 ], 4 ],
    [ [ 7, 7 ], 5 ],
    [ [ 7, 7 ], 6 ],
    [ [ 7, 7 ], 7 ],
    [ [ 7, 7 ], 8 ],

    [ [ 8, 8 ], 1 ],
    [ [ 8, 8 ], 2 ],
    [ [ 8, 8 ], 3 ],
    [ [ 8, 8 ], 4 ],
    [ [ 8, 8 ], 5 ],
    [ [ 8, 8 ], 6 ],
    [ [ 8, 8 ], 7 ],
    [ [ 8, 8 ], 8 ],
    [ [ 8, 8 ], 9 ],
    [ [ 8, 8 ], 10 ],


    [ [ 9, 9 ], 2 ],
    [ [ 9, 9 ], 3 ],
    [ [ 9, 9 ], 4 ],
    [ [ 9, 9 ], 5 ],
    [ [ 9, 9 ], 6 ],

    [ [ 9, 9 ], 8 ],
    [ [ 9, 9 ], 9 ],


]

let oneDeckS17NoCharlieDASFalsy=_.differenceWith(splitCombine,oneDeckS17NoCharlieDASTrusy,_.isEqual)


describe('One Deck S17 No Charlie DAS',function(){
    describe('split',function(){
        oneDeckS17NoCharlieDASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Split(...OneDeckS17NoCharlieDAS(...value))).to.be.ok
            })
        })
    })
    describe('Not split',function(){
        oneDeckS17NoCharlieDASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Split(...OneDeckS17NoCharlieDAS(...value))).to.not.be.ok
            })
        })
    })
})

function OneDeckS17NoCharlieNoDAS(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:1,
        charlie:false,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}


let oneDeckS17NoCharlieNoDASTrusy=[
    [ [ 1, 1 ], 1 ],
    [ [ 1, 1 ], 2 ],
    [ [ 1, 1 ], 3 ],
    [ [ 1, 1 ], 4 ],
    [ [ 1, 1 ], 5 ],
    [ [ 1, 1 ], 6 ],
    [ [ 1, 1 ], 7 ],
    [ [ 1, 1 ], 8 ],
    [ [ 1, 1 ], 9 ],
    [ [ 1, 1 ], 10 ],

    [ [ 2, 2 ], 3 ],
    [ [ 2, 2 ], 4 ],
    [ [ 2, 2 ], 5 ],
    [ [ 2, 2 ], 6 ],
    [ [ 2, 2 ], 7 ],



    [ [ 3, 3 ], 4 ],
    [ [ 3, 3 ], 5 ],
    [ [ 3, 3 ], 6 ],
    [ [ 3, 3 ], 7 ],






    [ [ 6, 6 ], 2 ],
    [ [ 6, 6 ], 3 ],
    [ [ 6, 6 ], 4 ],
    [ [ 6, 6 ], 5 ],
    [ [ 6, 6 ], 6 ],



    [ [ 7, 7 ], 2 ],
    [ [ 7, 7 ], 3 ],
    [ [ 7, 7 ], 4 ],
    [ [ 7, 7 ], 5 ],
    [ [ 7, 7 ], 6 ],
    [ [ 7, 7 ], 7 ],


    [ [ 8, 8 ], 1 ],
    [ [ 8, 8 ], 2 ],
    [ [ 8, 8 ], 3 ],
    [ [ 8, 8 ], 4 ],
    [ [ 8, 8 ], 5 ],
    [ [ 8, 8 ], 6 ],
    [ [ 8, 8 ], 7 ],
    [ [ 8, 8 ], 8 ],
    [ [ 8, 8 ], 9 ],
    [ [ 8, 8 ], 10 ],


    [ [ 9, 9 ], 2 ],
    [ [ 9, 9 ], 3 ],
    [ [ 9, 9 ], 4 ],
    [ [ 9, 9 ], 5 ],
    [ [ 9, 9 ], 6 ],

    [ [ 9, 9 ], 8 ],
    [ [ 9, 9 ], 9 ],
]
let oneDeckS17NoCharlieNoDASFalsy=_.differenceWith(splitCombine,oneDeckS17NoCharlieNoDASTrusy,_.isEqual)

describe('One Deck S17 No Charlie No DAS',function(){
    describe('split',function(){
        oneDeckS17NoCharlieNoDASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Split(...OneDeckS17NoCharlieNoDAS(...value))).to.be.ok
            })
        })
    })
    describe('Not split',function(){
        oneDeckS17NoCharlieDASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Split(...OneDeckS17NoCharlieNoDAS(...value))).to.not.be.ok
            })
        })
    })
})

let oneDeckH17NoCharlieDASTrusy=[
    [ [ 1, 1 ], 1 ],
    [ [ 1, 1 ], 2 ],
    [ [ 1, 1 ], 3 ],
    [ [ 1, 1 ], 4 ],
    [ [ 1, 1 ], 5 ],
    [ [ 1, 1 ], 6 ],
    [ [ 1, 1 ], 7 ],
    [ [ 1, 1 ], 8 ],
    [ [ 1, 1 ], 9 ],
    [ [ 1, 1 ], 10 ],
    //das
    [ [ 2, 2 ], 2 ],
    [ [ 2, 2 ], 3 ],
    [ [ 2, 2 ], 4 ],
    [ [ 2, 2 ], 5 ],
    [ [ 2, 2 ], 6 ],
    [ [ 2, 2 ], 7 ],

    //das
    [ [ 3, 3 ], 2 ],
    [ [ 3, 3 ], 3 ],

    [ [ 3, 3 ], 4 ],
    [ [ 3, 3 ], 5 ],
    [ [ 3, 3 ], 6 ],
    [ [ 3, 3 ], 7 ],
    //das
    [ [ 3, 3 ], 8 ],

    //das
    [ [ 4, 4 ], 4 ],
    [ [ 4, 4 ], 5 ],
    [ [ 4, 4 ], 6 ],



    [ [ 6, 6 ], 2 ],
    [ [ 6, 6 ], 3 ],
    [ [ 6, 6 ], 4 ],
    [ [ 6, 6 ], 5 ],
    [ [ 6, 6 ], 6 ],
    [ [ 6, 6 ], 7 ],


    [ [ 7, 7 ], 2 ],
    [ [ 7, 7 ], 3 ],
    [ [ 7, 7 ], 4 ],
    [ [ 7, 7 ], 5 ],
    [ [ 7, 7 ], 6 ],
    [ [ 7, 7 ], 7 ],
    [ [ 7, 7 ], 8 ],

    [ [ 8, 8 ], 1 ],
    [ [ 8, 8 ], 2 ],
    [ [ 8, 8 ], 3 ],
    [ [ 8, 8 ], 4 ],
    [ [ 8, 8 ], 5 ],
    [ [ 8, 8 ], 6 ],
    [ [ 8, 8 ], 7 ],
    [ [ 8, 8 ], 8 ],
    [ [ 8, 8 ], 9 ],
    [ [ 8, 8 ], 10 ],

    [[ 9,9],1],
    [ [ 9, 9 ], 2 ],
    [ [ 9, 9 ], 3 ],
    [ [ 9, 9 ], 4 ],
    [ [ 9, 9 ], 5 ],
    [ [ 9, 9 ], 6 ],

    [ [ 9, 9 ], 8 ],
    [ [ 9, 9 ], 9 ],
]
let oneDeckH17NoCharlieDASFalsy=_.differenceWith(splitCombine,oneDeckH17NoCharlieDASTrusy,_.isEqual)
function OneDeckH17NoCharlieDAS(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:1,
        charlie:false,
        doubleAfterSplit:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

describe('One Deck H17 No Charlie DAS',function(){
    describe('split',function(){
        oneDeckH17NoCharlieDASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Split(...OneDeckH17NoCharlieDAS(...value))).to.be.ok
            })
        })
    })
    describe('Not split',function(){
        oneDeckH17NoCharlieDASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Split(...OneDeckH17NoCharlieDAS(...value))).to.not.be.ok
            })
        })
    })
})

let oneDeckH17NoCharlieNoDASTrusy=[
    [ [ 1, 1 ], 1 ],
    [ [ 1, 1 ], 2 ],
    [ [ 1, 1 ], 3 ],
    [ [ 1, 1 ], 4 ],
    [ [ 1, 1 ], 5 ],
    [ [ 1, 1 ], 6 ],
    [ [ 1, 1 ], 7 ],
    [ [ 1, 1 ], 8 ],
    [ [ 1, 1 ], 9 ],
    [ [ 1, 1 ], 10 ],

    [ [ 2, 2 ], 3 ],
    [ [ 2, 2 ], 4 ],
    [ [ 2, 2 ], 5 ],
    [ [ 2, 2 ], 6 ],
    [ [ 2, 2 ], 7 ],



    [ [ 3, 3 ], 4 ],
    [ [ 3, 3 ], 5 ],
    [ [ 3, 3 ], 6 ],
    [ [ 3, 3 ], 7 ],






    [ [ 6, 6 ], 2 ],
    [ [ 6, 6 ], 3 ],
    [ [ 6, 6 ], 4 ],
    [ [ 6, 6 ], 5 ],
    [ [ 6, 6 ], 6 ],



    [ [ 7, 7 ], 2 ],
    [ [ 7, 7 ], 3 ],
    [ [ 7, 7 ], 4 ],
    [ [ 7, 7 ], 5 ],
    [ [ 7, 7 ], 6 ],
    [ [ 7, 7 ], 7 ],


    [ [ 8, 8 ], 1 ],
    [ [ 8, 8 ], 2 ],
    [ [ 8, 8 ], 3 ],
    [ [ 8, 8 ], 4 ],
    [ [ 8, 8 ], 5 ],
    [ [ 8, 8 ], 6 ],
    [ [ 8, 8 ], 7 ],
    [ [ 8, 8 ], 8 ],
    [ [ 8, 8 ], 9 ],
    [ [ 8, 8 ], 10 ],


    [ [ 9, 9 ], 2 ],
    [ [ 9, 9 ], 3 ],
    [ [ 9, 9 ], 4 ],
    [ [ 9, 9 ], 5 ],
    [ [ 9, 9 ], 6 ],

    [ [ 9, 9 ], 8 ],
    [ [ 9, 9 ], 9 ],
]
let oneDeckH17NoCharlieNoDASFalsy=_.differenceWith(splitCombine,oneDeckH17NoCharlieNoDASTrusy,_.isEqual)
function OneDeckH17NoCharlieNODAS(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:1,
        charlie:false,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

describe('One Deck H17 No Charlie No DAS',function(){
    describe('split',function(){
        oneDeckH17NoCharlieNoDASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Split(...OneDeckH17NoCharlieNODAS(...value))).to.be.ok
            })
        })
    })
    describe('Not split',function(){
        oneDeckH17NoCharlieNoDASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Split(...OneDeckH17NoCharlieNODAS(...value))).to.not.be.ok
            })
        })
    })
})

let charlie5DASTrusy=[

    [ [ 1, 1 ], 2 ],
    [ [ 1, 1 ], 3 ],
    [ [ 1, 1 ], 4 ],
    [ [ 1, 1 ], 5 ],
    [ [ 1, 1 ], 6 ],
    [ [ 1, 1 ], 7 ],
    [ [ 1, 1 ], 8 ],
    [ [ 1, 1 ], 9 ],
    [ [ 1, 1 ], 10 ],

    [ [ 2, 2 ], 5 ],
    [ [ 2, 2 ], 6 ],


    [ [ 3, 3 ], 4 ],
    [ [ 3, 3 ], 5 ],
    [ [ 3, 3 ], 6 ],


    [ [ 4, 4 ], 6 ],



    [ [ 6, 6 ], 2 ],
    [ [ 6, 6 ], 3 ],
    [ [ 6, 6 ], 4 ],
    [ [ 6, 6 ], 5 ],
    [ [ 6, 6 ], 6 ],


    [ [ 7, 7 ], 2 ],
    [ [ 7, 7 ], 3 ],
    [ [ 7, 7 ], 4 ],
    [ [ 7, 7 ], 5 ],
    [ [ 7, 7 ], 6 ],
    [ [ 7, 7 ], 7 ],

    [ [ 8, 8 ], 1 ],
    [ [ 8, 8 ], 2 ],
    [ [ 8, 8 ], 3 ],
    [ [ 8, 8 ], 4 ],
    [ [ 8, 8 ], 5 ],
    [ [ 8, 8 ], 6 ],
    [ [ 8, 8 ], 7 ],
    [ [ 8, 8 ], 8 ],
    [ [ 8, 8 ], 9 ],
    [ [ 8, 8 ], 10 ],

    [ [ 9, 9 ], 2 ],
    [ [ 9, 9 ], 3 ],
    [ [ 9, 9 ], 4 ],
    [ [ 9, 9 ], 5 ],
    [ [ 9, 9 ], 6 ],

    [ [ 9, 9 ], 8 ],
    [ [ 9, 9 ], 9 ],


]
let charlie5DASFalsy=_.differenceWith(splitCombine,charlie5DASTrusy,_.isEqual)
function Charlie5DAS(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:8,
        charlie:5,
        doubleAfterSplit:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

describe('Charlie 5 DAS',function(){
    describe('split',function(){
        charlie5DASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Split(...Charlie5DAS(...value))).to.be.ok
            })
        })
    })
    describe('Not split',function(){
        charlie5DASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Split(...Charlie5DAS(...value))).to.not.be.ok
            })
        })
    })
})

let charlie5NoDASTrusy=[

    [ [ 1, 1 ], 2 ],
    [ [ 1, 1 ], 3 ],
    [ [ 1, 1 ], 4 ],
    [ [ 1, 1 ], 5 ],
    [ [ 1, 1 ], 6 ],
    [ [ 1, 1 ], 7 ],
    [ [ 1, 1 ], 8 ],
    [ [ 1, 1 ], 9 ],
    [ [ 1, 1 ], 10 ],


    [ [ 3, 3 ], 6 ],



    [ [ 6, 6 ], 3 ],
    [ [ 6, 6 ], 4 ],
    [ [ 6, 6 ], 5 ],
    [ [ 6, 6 ], 6 ],


    [ [ 7, 7 ], 2 ],
    [ [ 7, 7 ], 3 ],
    [ [ 7, 7 ], 4 ],
    [ [ 7, 7 ], 5 ],
    [ [ 7, 7 ], 6 ],
    [ [ 7, 7 ], 7 ],

    [ [ 8, 8 ], 1 ],
    [ [ 8, 8 ], 2 ],
    [ [ 8, 8 ], 3 ],
    [ [ 8, 8 ], 4 ],
    [ [ 8, 8 ], 5 ],
    [ [ 8, 8 ], 6 ],
    [ [ 8, 8 ], 7 ],
    [ [ 8, 8 ], 8 ],
    [ [ 8, 8 ], 9 ],
    [ [ 8, 8 ], 10 ],

    [ [ 9, 9 ], 2 ],
    [ [ 9, 9 ], 3 ],
    [ [ 9, 9 ], 4 ],
    [ [ 9, 9 ], 5 ],
    [ [ 9, 9 ], 6 ],

    [ [ 9, 9 ], 8 ],
    [ [ 9, 9 ], 9 ],


]
let charlie5NoDASFalsy=_.differenceWith(splitCombine,charlie5NoDASTrusy,_.isEqual)
function Charlie5NoDAS(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:8,
        charlie:5,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}
describe('Charlie 5 DAS',function(){
    describe('split',function(){
        charlie5NoDASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Split(...Charlie5NoDAS(...value))).to.be.ok
            })
        })
    })
    describe('Not split',function(){
        charlie5NoDASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Split(...Charlie5NoDAS(...value))).to.not.be.ok
            })
        })
    })
})

let charlie6DASTrusy=[
    [ [ 1, 1 ], 1 ],
    [ [ 1, 1 ], 2 ],
    [ [ 1, 1 ], 3 ],
    [ [ 1, 1 ], 4 ],
    [ [ 1, 1 ], 5 ],
    [ [ 1, 1 ], 6 ],
    [ [ 1, 1 ], 7 ],
    [ [ 1, 1 ], 8 ],
    [ [ 1, 1 ], 9 ],
    [ [ 1, 1 ], 10 ],

    [ [ 2, 2 ], 2 ],
    [ [ 2, 2 ], 3 ],
    [ [ 2, 2 ], 4 ],
    [ [ 2, 2 ], 5 ],
    [ [ 2, 2 ], 6 ],
    [ [ 2, 2 ], 7 ],


    [ [ 3, 3 ], 3 ],
    [ [ 3, 3 ], 4 ],
    [ [ 3, 3 ], 5 ],
    [ [ 3, 3 ], 6 ],
    [ [ 3, 3 ], 7 ],


    [ [ 4, 4 ], 5 ],
    [ [ 4, 4 ], 6 ],



    [ [ 6, 6 ], 2 ],
    [ [ 6, 6 ], 3 ],
    [ [ 6, 6 ], 4 ],
    [ [ 6, 6 ], 5 ],
    [ [ 6, 6 ], 6 ],


    [ [ 7, 7 ], 2 ],
    [ [ 7, 7 ], 3 ],
    [ [ 7, 7 ], 4 ],
    [ [ 7, 7 ], 5 ],
    [ [ 7, 7 ], 6 ],
    [ [ 7, 7 ], 7 ],

    [ [ 8, 8 ], 1 ],
    [ [ 8, 8 ], 2 ],
    [ [ 8, 8 ], 3 ],
    [ [ 8, 8 ], 4 ],
    [ [ 8, 8 ], 5 ],
    [ [ 8, 8 ], 6 ],
    [ [ 8, 8 ], 7 ],
    [ [ 8, 8 ], 8 ],
    [ [ 8, 8 ], 9 ],
    [ [ 8, 8 ], 10 ],

    [ [ 9, 9 ], 2 ],
    [ [ 9, 9 ], 3 ],
    [ [ 9, 9 ], 4 ],
    [ [ 9, 9 ], 5 ],
    [ [ 9, 9 ], 6 ],

    [ [ 9, 9 ], 8 ],
    [ [ 9, 9 ], 9 ],


]
let charlie6DASFalsy=_.differenceWith(splitCombine,charlie6DASTrusy,_.isEqual)
function Charlie6DAS(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:8,
        charlie:6,
        doubleAfterSplit:true

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}
describe('Charlie 6 DAS',function(){
    describe('split',function(){
        charlie6DASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Split(...Charlie6DAS(...value))).to.be.ok
            })
        })
    })
    describe('Not split',function(){
        charlie6DASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Split(...Charlie6DAS(...value))).to.not.be.ok
            })
        })
    })
})

let charlie6NoDASTrusy=[
    [ [ 1, 1 ], 1 ],
    [ [ 1, 1 ], 2 ],
    [ [ 1, 1 ], 3 ],
    [ [ 1, 1 ], 4 ],
    [ [ 1, 1 ], 5 ],
    [ [ 1, 1 ], 6 ],
    [ [ 1, 1 ], 7 ],
    [ [ 1, 1 ], 8 ],
    [ [ 1, 1 ], 9 ],
    [ [ 1, 1 ], 10 ],

    [ [ 2, 2 ], 5 ],
    [ [ 2, 2 ], 6 ],
    [ [ 2, 2 ], 7 ],


    [ [ 3, 3 ], 5 ],
    [ [ 3, 3 ], 6 ],
    [ [ 3, 3 ], 7 ],



    [ [ 6, 6 ], 3 ],
    [ [ 6, 6 ], 4 ],
    [ [ 6, 6 ], 5 ],
    [ [ 6, 6 ], 6 ],


    [ [ 7, 7 ], 2 ],
    [ [ 7, 7 ], 3 ],
    [ [ 7, 7 ], 4 ],
    [ [ 7, 7 ], 5 ],
    [ [ 7, 7 ], 6 ],
    [ [ 7, 7 ], 7 ],

    [ [ 8, 8 ], 1 ],
    [ [ 8, 8 ], 2 ],
    [ [ 8, 8 ], 3 ],
    [ [ 8, 8 ], 4 ],
    [ [ 8, 8 ], 5 ],
    [ [ 8, 8 ], 6 ],
    [ [ 8, 8 ], 7 ],
    [ [ 8, 8 ], 8 ],
    [ [ 8, 8 ], 9 ],
    [ [ 8, 8 ], 10 ],

    [ [ 9, 9 ], 2 ],
    [ [ 9, 9 ], 3 ],
    [ [ 9, 9 ], 4 ],
    [ [ 9, 9 ], 5 ],
    [ [ 9, 9 ], 6 ],

    [ [ 9, 9 ], 8 ],
    [ [ 9, 9 ], 9 ],
]
let charlie6NoDASFalsy=_.differenceWith(splitCombine,charlie6NoDASTrusy,_.isEqual)
function Charlie6NoDAS(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:8,
        charlie:6,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}
describe('Charlie 6 No DAS',function(){
    describe('split',function(){
        charlie6NoDASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Split(...Charlie6NoDAS(...value))).to.be.ok
            })
        })
    })
    describe('Not split',function(){
        charlie6NoDASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Split(...Charlie6NoDAS(...value))).to.not.be.ok
            })
        })
    })
})
