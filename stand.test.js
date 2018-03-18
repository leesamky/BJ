var expect=require('chai').expect
const _=require('lodash')
const Stand=require('./Stand')


let combineH=[
    [ 5, 1, false ],
    [ 5, 2, false ],
    [ 5, 3, false ],
    [ 5, 4, false ],
    [ 5, 5, false ],
    [ 5, 6, false ],
    [ 5, 7, false ],
    [ 5, 8, false ],
    [ 5, 9, false ],
    [ 5, 10, false ],
    [ 6, 1, false ],
    [ 6, 2, false ],
    [ 6, 3, false ],
    [ 6, 4, false ],
    [ 6, 5, false ],
    [ 6, 6, false ],
    [ 6, 7, false ],
    [ 6, 8, false ],
    [ 6, 9, false ],
    [ 6, 10, false ],
    [ 7, 1, false ],
    [ 7, 2, false ],
    [ 7, 3, false ],
    [ 7, 4, false ],
    [ 7, 5, false ],
    [ 7, 6, false ],
    [ 7, 7, false ],
    [ 7, 8, false ],
    [ 7, 9, false ],
    [ 7, 10, false ],
    [ 8, 1, false ],
    [ 8, 2, false ],
    [ 8, 3, false ],
    [ 8, 4, false ],
    [ 8, 5, false ],
    [ 8, 6, false ],
    [ 8, 7, false ],
    [ 8, 8, false ],
    [ 8, 9, false ],
    [ 8, 10, false ],
    [ 9, 1, false ],
    [ 9, 2, false ],
    [ 9, 3, false ],
    [ 9, 4, false ],
    [ 9, 5, false ],
    [ 9, 6, false ],
    [ 9, 7, false ],
    [ 9, 8, false ],
    [ 9, 9, false ],
    [ 9, 10, false ],
    [ 10, 1, false ],
    [ 10, 2, false ],
    [ 10, 3, false ],
    [ 10, 4, false ],
    [ 10, 5, false ],
    [ 10, 6, false ],
    [ 10, 7, false ],
    [ 10, 8, false ],
    [ 10, 9, false ],
    [ 10, 10, false ],
    [ 11, 1, false ],
    [ 11, 2, false ],
    [ 11, 3, false ],
    [ 11, 4, false ],
    [ 11, 5, false ],
    [ 11, 6, false ],
    [ 11, 7, false ],
    [ 11, 8, false ],
    [ 11, 9, false ],
    [ 11, 10, false ],
    [ 12, 1, false ],
    [ 12, 2, false ],
    [ 12, 3, false ],
    [ 12, 4, false ],
    [ 12, 5, false ],
    [ 12, 6, false ],
    [ 12, 7, false ],
    [ 12, 8, false ],
    [ 12, 9, false ],
    [ 12, 10, false ],
    [ 13, 1, false ],
    [ 13, 2, false ],
    [ 13, 3, false ],
    [ 13, 4, false ],
    [ 13, 5, false ],
    [ 13, 6, false ],
    [ 13, 7, false ],
    [ 13, 8, false ],
    [ 13, 9, false ],
    [ 13, 10, false ],
    [ 14, 1, false ],
    [ 14, 2, false ],
    [ 14, 3, false ],
    [ 14, 4, false ],
    [ 14, 5, false ],
    [ 14, 6, false ],
    [ 14, 7, false ],
    [ 14, 8, false ],
    [ 14, 9, false ],
    [ 14, 10, false ],
    [ 15, 1, false ],
    [ 15, 2, false ],
    [ 15, 3, false ],
    [ 15, 4, false ],
    [ 15, 5, false ],
    [ 15, 6, false ],
    [ 15, 7, false ],
    [ 15, 8, false ],
    [ 15, 9, false ],
    [ 15, 10, false ],
    [ 16, 1, false ],
    [ 16, 2, false ],
    [ 16, 3, false ],
    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],
    [ 16, 7, false ],
    [ 16, 8, false ],
    [ 16, 9, false ],
    [ 16, 10, false ],
    [ 17, 1, false ],
    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],
    [ 17, 9, false ],
    [ 17, 10, false ],
    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
]
let combineS=[
    [ 5, 1, true ],
    [ 5, 2, true ],
    [ 5, 3, true ],
    [ 5, 4, true ],
    [ 5, 5, true ],
    [ 5, 6, true ],
    [ 5, 7, true ],
    [ 5, 8, true ],
    [ 5, 9, true ],
    [ 5, 10, true ],
    [ 6, 1, true ],
    [ 6, 2, true ],
    [ 6, 3, true ],
    [ 6, 4, true ],
    [ 6, 5, true ],
    [ 6, 6, true ],
    [ 6, 7, true ],
    [ 6, 8, true ],
    [ 6, 9, true ],
    [ 6, 10, true ],
    [ 7, 1, true ],
    [ 7, 2, true ],
    [ 7, 3, true ],
    [ 7, 4, true ],
    [ 7, 5, true ],
    [ 7, 6, true ],
    [ 7, 7, true ],
    [ 7, 8, true ],
    [ 7, 9, true ],
    [ 7, 10, true ],
    [ 8, 1, true ],
    [ 8, 2, true ],
    [ 8, 3, true ],
    [ 8, 4, true ],
    [ 8, 5, true ],
    [ 8, 6, true ],
    [ 8, 7, true ],
    [ 8, 8, true ],
    [ 8, 9, true ],
    [ 8, 10, true ],
    [ 9, 1, true ],
    [ 9, 2, true ],
    [ 9, 3, true ],
    [ 9, 4, true ],
    [ 9, 5, true ],
    [ 9, 6, true ],
    [ 9, 7, true ],
    [ 9, 8, true ],
    [ 9, 9, true ],
    [ 9, 10, true ],
    [ 10, 1, true ],
    [ 10, 2, true ],
    [ 10, 3, true ],
    [ 10, 4, true ],
    [ 10, 5, true ],
    [ 10, 6, true ],
    [ 10, 7, true ],
    [ 10, 8, true ],
    [ 10, 9, true ],
    [ 10, 10, true ],
    [ 11, 1, true ],
    [ 11, 2, true ],
    [ 11, 3, true ],
    [ 11, 4, true ],
    [ 11, 5, true ],
    [ 11, 6, true ],
    [ 11, 7, true ],
    [ 11, 8, true ],
    [ 11, 9, true ],
    [ 11, 10, true ],
    [ 12, 1, true ],
    [ 12, 2, true ],
    [ 12, 3, true ],
    [ 12, 4, true ],
    [ 12, 5, true ],
    [ 12, 6, true ],
    [ 12, 7, true ],
    [ 12, 8, true ],
    [ 12, 9, true ],
    [ 12, 10, true ],
    [ 13, 1, true ],
    [ 13, 2, true ],
    [ 13, 3, true ],
    [ 13, 4, true ],
    [ 13, 5, true ],
    [ 13, 6, true ],
    [ 13, 7, true ],
    [ 13, 8, true ],
    [ 13, 9, true ],
    [ 13, 10, true ],
    [ 14, 1, true ],
    [ 14, 2, true ],
    [ 14, 3, true ],
    [ 14, 4, true ],
    [ 14, 5, true ],
    [ 14, 6, true ],
    [ 14, 7, true ],
    [ 14, 8, true ],
    [ 14, 9, true ],
    [ 14, 10, true ],
    [ 15, 1, true ],
    [ 15, 2, true ],
    [ 15, 3, true ],
    [ 15, 4, true ],
    [ 15, 5, true ],
    [ 15, 6, true ],
    [ 15, 7, true ],
    [ 15, 8, true ],
    [ 15, 9, true ],
    [ 15, 10, true ],
    [ 16, 1, true ],
    [ 16, 2, true ],
    [ 16, 3, true ],
    [ 16, 4, true ],
    [ 16, 5, true ],
    [ 16, 6, true ],
    [ 16, 7, true ],
    [ 16, 8, true ],
    [ 16, 9, true ],
    [ 16, 10, true ],
    [ 17, 1, true ],
    [ 17, 2, true ],
    [ 17, 3, true ],
    [ 17, 4, true ],
    [ 17, 5, true ],
    [ 17, 6, true ],
    [ 17, 7, true ],
    [ 17, 8, true ],
    [ 17, 9, true ],
    [ 17, 10, true ],
    [ 18, 1, true ],
    [ 18, 2, true ],
    [ 18, 3, true ],
    [ 18, 4, true ],
    [ 18, 5, true ],
    [ 18, 6, true ],
    [ 18, 7, true ],
    [ 18, 8, true ],
    [ 18, 9, true ],
    [ 18, 10, true ],
    [ 19, 1, true ],
    [ 19, 2, true ],
    [ 19, 3, true ],
    [ 19, 4, true ],
    [ 19, 5, true ],
    [ 19, 6, true ],
    [ 19, 7, true ],
    [ 19, 8, true ],
    [ 19, 9, true ],
    [ 19, 10, true ],
    [ 20, 1, true ],
    [ 20, 2, true ],
    [ 20, 3, true ],
    [ 20, 4, true ],
    [ 20, 5, true ],
    [ 20, 6, true ],
    [ 20, 7, true ],
    [ 20, 8, true ],
    [ 20, 9, true ],
    [ 20, 10, true ],
]
let combineSplit=[
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
function makeTwoCardsCombine(arr){
    let cardsCombine=[]
    _.forEach(arr,function(elem){
        let combines=twoCards[[elem[0],elem[2]]]
        _.forEach(combines,function(combine){
            cardsCombine.push([combine,elem[1]])
        })
    })
    return cardsCombine
}
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


    }

    return playerOptions
}
let twoCardsCombineH=makeTwoCardsCombine(combineH)

let oneDeckS17HardTrusy=[

    [ 12, 4, false ],
    [ 12, 5, false ],
    [ 12, 6, false ],

    [ 13, 2, false ],
    [ 13, 3, false ],
    [ 13, 4, false ],
    [ 13, 5, false ],
    [ 13, 6, false ],

    [ 14, 2, false ],
    [ 14, 3, false ],
    [ 14, 4, false ],
    [ 14, 5, false ],
    [ 14, 6, false ],

    [ 15, 2, false ],
    [ 15, 3, false ],
    [ 15, 4, false ],
    [ 15, 5, false ],
    [ 15, 6, false ],

    [ 16, 2, false ],
    [ 16, 3, false ],
    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],

    [ 17, 1, false ],
    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],
    [ 17, 9, false ],
    [ 17, 10, false ],
    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
    [ 20, 1, false ],
    [ 20, 2, false ],
    [ 20, 3, false ],
    [ 20, 4, false ],
    [ 20, 5, false ],
    [ 20, 6, false ],
    [ 20, 7, false ],
    [ 20, 8, false ],
    [ 20, 9, false ],
    [ 20, 10, false ],
    [ 21, 1, false ],
    [ 21, 2, false ],
    [ 21, 3, false ],
    [ 21, 4, false ],
    [ 21, 5, false ],
    [ 21, 6, false ],
    [ 21, 7, false ],
    [ 21, 8, false ],
    [ 21, 9, false ],
    [ 21, 10, false ],
]
let oneDeckS17HardFalsy=_.differenceWith(combineH,oneDeckS17HardTrusy,_.isEqual)

function OneDeckS17Hard(playerPoint,dealerCard,soft){
    let options=GameOptions({
        numberOfDecks:1,
        charlie:false,
        hitSoft17:false,

    })

    const handValue=playerPoint
    const handCount=1
    return [[1,2],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}
describe('One Deck S17 Hard hands',function(){
    describe('stand',function(){
        oneDeckS17HardTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...OneDeckS17Hard(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        oneDeckS17HardFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...OneDeckS17Hard(...value))).to.not.be.ok
            })
        })
    })
})

let oneDeckS17SoftTrusy=[

    [ 18, 1, true ],
    [ 18, 2, true ],
    [ 18, 3, true ],
    [ 18, 4, true ],
    [ 18, 5, true ],
    [ 18, 6, true ],
    [ 18, 7, true ],
    [ 18, 8, true ],

    [ 19, 1, true ],
    [ 19, 2, true ],
    [ 19, 3, true ],
    [ 19, 4, true ],
    [ 19, 5, true ],
    [ 19, 6, true ],
    [ 19, 7, true ],
    [ 19, 8, true ],
    [ 19, 9, true ],
    [ 19, 10, true ],
    [ 20, 1, true ],
    [ 20, 2, true ],
    [ 20, 3, true ],
    [ 20, 4, true ],
    [ 20, 5, true ],
    [ 20, 6, true ],
    [ 20, 7, true ],
    [ 20, 8, true ],
    [ 20, 9, true ],
    [ 20, 10, true ],

]
let oneDeckS17SoftFalsy=_.differenceWith(combineS,oneDeckS17SoftTrusy,_.isEqual)

function OneDeckS17Soft(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:1,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}

describe('One Deck S17 Soft hands',function(){
    describe('stand',function(){
        oneDeckS17SoftTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...OneDeckS17Soft(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        oneDeckS17SoftFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...OneDeckS17Soft(...value))).to.not.be.ok
            })
        })
    })
})

let oneDeckSplitsTrusy=[
   [[7,7],10],
    [[9,9],7],
    [[9,9],10],
    [[9,9],1]
]

let oneDeckSplitsFalsy=_.differenceWith(combineSplit,oneDeckSplitsTrusy,_.isEqual)

function OneDeckSplits(playerCards,dealerCard){
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

describe('One Deck S17 Split hands No DAS',function(){
    describe('double',function(){
        oneDeckSplitsTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...OneDeckSplits(...value))).to.be.ok
            })
        })
    })
    describe('Not double',function(){
        oneDeckSplitsFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...OneDeckSplits(...value))).to.not.be.ok
            })
        })
    })
})
let oneDeckH17HardTrusy=[
    [ 12, 4, false ],
    [ 12, 5, false ],
    [ 12, 6, false ],

    [ 13, 2, false ],
    [ 13, 3, false ],
    [ 13, 4, false ],
    [ 13, 5, false ],
    [ 13, 6, false ],

    [ 14, 2, false ],
    [ 14, 3, false ],
    [ 14, 4, false ],
    [ 14, 5, false ],
    [ 14, 6, false ],

    [ 15, 2, false ],
    [ 15, 3, false ],
    [ 15, 4, false ],
    [ 15, 5, false ],
    [ 15, 6, false ],

    [ 16, 2, false ],
    [ 16, 3, false ],
    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],

    [ 17, 1, false ],
    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],
    [ 17, 9, false ],
    [ 17, 10, false ],
    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
]
let oneDeckH17HardFalsy=_.differenceWith(combineH,oneDeckH17HardTrusy,_.isEqual)
function OneDeckH17Hard(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:1,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:false},handCount,options]
}

describe('One Deck H17 Hard hands',function(){
    describe('Stand',function(){
        oneDeckH17HardTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...OneDeckH17Hard(...value))).to.be.ok
            })
        })
    })
    describe('Not Stand',function(){
        oneDeckH17HardFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...OneDeckH17Hard(...value))).to.not.be.ok
            })
        })
    })
})

let oneDeckH17SoftTrusy=[

    [ 18, 2, true ],
    [ 18, 3, true ],
    [ 18, 4, true ],
    [ 18, 5, true ],
    [ 18, 6, true ],
    [ 18, 7, true ],
    [ 18, 8, true ],

    [ 19, 1, true ],
    [ 19, 2, true ],
    [ 19, 3, true ],
    [ 19, 4, true ],
    [ 19, 5, true ],
    [ 19, 6, true ],
    [ 19, 7, true ],
    [ 19, 8, true ],
    [ 19, 9, true ],
    [ 19, 10, true ],
    [ 20, 1, true ],
    [ 20, 2, true ],
    [ 20, 3, true ],
    [ 20, 4, true ],
    [ 20, 5, true ],
    [ 20, 6, true ],
    [ 20, 7, true ],
    [ 20, 8, true ],
    [ 20, 9, true ],
    [ 20, 10, true ],
]
let oneDeckH17SoftFalsy=_.differenceWith(combineS,oneDeckH17SoftTrusy,_.isEqual)
function OneDeckH17Soft(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:1,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}

describe('One Deck H17 Soft hands',function(){
    describe('Stand',function(){
        oneDeckH17SoftTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...OneDeckH17Soft(...value))).to.be.ok
            })
        })
    })
    describe('Not Stand',function(){
        oneDeckH17SoftFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...OneDeckH17Soft(...value))).to.not.be.ok
            })
        })
    })
})

let oneDeckSplitsH17Trusy=[
    [[7,7],10],
    [[9,9],7],
    [[9,9],10],
    [[9,9],1]
]

let oneDeckSplitsH17Falsy=_.differenceWith(combineSplit,oneDeckSplitsH17Trusy,_.isEqual)

function OneDeckSplitsH17(playerCards,dealerCard){
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

describe('One Deck S17 Split hands No DAS',function(){
    describe('stand',function(){
        oneDeckSplitsTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...OneDeckSplitsH17(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        oneDeckSplitsFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...OneDeckSplitsH17(...value))).to.not.be.ok
            })
        })
    })
})

//DOUBLE DECKS
let twoDecksS17HardTrusy=[


    [ 12, 4, false ],
    [ 12, 5, false ],
    [ 12, 6, false ],

    [ 13, 2, false ],
    [ 13, 3, false ],
    [ 13, 4, false ],
    [ 13, 5, false ],
    [ 13, 6, false ],

    [ 14, 2, false ],
    [ 14, 3, false ],
    [ 14, 4, false ],
    [ 14, 5, false ],
    [ 14, 6, false ],

    [ 15, 2, false ],
    [ 15, 3, false ],
    [ 15, 4, false ],
    [ 15, 5, false ],
    [ 15, 6, false ],

    [ 16, 2, false ],
    [ 16, 3, false ],
    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],

    [ 17, 1, false ],
    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],
    [ 17, 9, false ],
    [ 17, 10, false ],
    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
    [ 20, 1, false ],
    [ 20, 2, false ],
    [ 20, 3, false ],
    [ 20, 4, false ],
    [ 20, 5, false ],
    [ 20, 6, false ],
    [ 20, 7, false ],
    [ 20, 8, false ],
    [ 20, 9, false ],
    [ 20, 10, false ],
]
let twoDecksS17HardFalsy=_.differenceWith(combineH,twoDecksS17HardTrusy,_.isEqual)
function TwoDecksS17Hard(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:2,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}

describe('Two Decks S17 Hard hands',function(){
    describe('stand',function(){
        twoDecksS17HardTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...TwoDecksS17Hard(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        twoDecksS17HardFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...TwoDecksS17Hard(...value))).to.not.be.ok
            })
        })
    })
})

let twoDecksS17SoftTrusy=[


    [ 18, 2, true ],
    [ 18, 3, true ],
    [ 18, 4, true ],
    [ 18, 5, true ],
    [ 18, 6, true ],
    [ 18, 7, true ],
    [ 18, 8, true ],

    [ 19, 1, true ],
    [ 19, 2, true ],
    [ 19, 3, true ],
    [ 19, 4, true ],
    [ 19, 5, true ],
    [ 19, 6, true ],
    [ 19, 7, true ],
    [ 19, 8, true ],
    [ 19, 9, true ],
    [ 19, 10, true ],
    [ 20, 1, true ],
    [ 20, 2, true ],
    [ 20, 3, true ],
    [ 20, 4, true ],
    [ 20, 5, true ],
    [ 20, 6, true ],
    [ 20, 7, true ],
    [ 20, 8, true ],
    [ 20, 9, true ],
    [ 20, 10, true ],

]
let twoDecksS17SoftFalsy=_.differenceWith(combineS,twoDecksS17SoftTrusy,_.isEqual)
function TwoDecksS17Soft(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:2,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}

describe('Two Decks S17 Soft hands',function(){
    describe('stand',function(){
        twoDecksS17SoftTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...TwoDecksS17Soft(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        twoDecksS17SoftFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...TwoDecksS17Soft(...value))).to.not.be.ok
            })
        })
    })
})


let twoDeckSplitsS17Trusy=[

    [[9,9],7],
    [[9,9],10],
    [[9,9],1]
]

let twoDeckSplitsS17Falsy=_.differenceWith(combineSplit,twoDeckSplitsS17Trusy,_.isEqual)

function TwoDeckSplitsS17(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:2,
        charlie:false,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

describe('Two Deck S17 Split hands',function(){
    describe('stand',function(){
        twoDeckSplitsS17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...TwoDeckSplitsS17(...value))).to.be.ok
            })
        })
    })
    describe('Not double',function(){
        twoDeckSplitsS17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...TwoDeckSplitsS17(...value))).to.not.be.ok
            })
        })
    })
})

let twoDecksH17HardTrusy=[
    [ 12, 4, false ],
    [ 12, 5, false ],
    [ 12, 6, false ],

    [ 13, 2, false ],
    [ 13, 3, false ],
    [ 13, 4, false ],
    [ 13, 5, false ],
    [ 13, 6, false ],

    [ 14, 2, false ],
    [ 14, 3, false ],
    [ 14, 4, false ],
    [ 14, 5, false ],
    [ 14, 6, false ],

    [ 15, 2, false ],
    [ 15, 3, false ],
    [ 15, 4, false ],
    [ 15, 5, false ],
    [ 15, 6, false ],

    [ 16, 2, false ],
    [ 16, 3, false ],
    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],

    [ 17, 1, false ],
    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],
    [ 17, 9, false ],
    [ 17, 10, false ],
    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
]
let twoDecksH17HardFalsy=_.differenceWith(combineH,twoDecksH17HardTrusy,_.isEqual)
function TwoDecksH17Hard(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:2,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}

describe('Two Decks H17 Hard hands',function(){
    describe('stand',function(){
        twoDecksH17HardTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...TwoDecksH17Hard(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        twoDecksH17HardFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...TwoDecksH17Hard(...value))).to.not.be.ok
            })
        })
    })
})

let twoDecksH17SoftTrusy=[

    [ 18, 2, true ],
    [ 18, 3, true ],
    [ 18, 4, true ],
    [ 18, 5, true ],
    [ 18, 6, true ],
    [ 18, 7, true ],
    [ 18, 8, true ],

    [ 19, 1, true ],
    [ 19, 2, true ],
    [ 19, 3, true ],
    [ 19, 4, true ],
    [ 19, 5, true ],
    [ 19, 6, true ],
    [ 19, 7, true ],
    [ 19, 8, true ],
    [ 19, 9, true ],
    [ 19, 10, true ],
    [ 20, 1, true ],
    [ 20, 2, true ],
    [ 20, 3, true ],
    [ 20, 4, true ],
    [ 20, 5, true ],
    [ 20, 6, true ],
    [ 20, 7, true ],
    [ 20, 8, true ],
    [ 20, 9, true ],
    [ 20, 10, true ],

]
let twoDecksH17SoftFalsy=_.differenceWith(combineS,twoDecksH17SoftTrusy,_.isEqual)
function TwoDecksH17Soft(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:2,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}
describe('Two Decks H17 Soft hands',function(){
    describe('stand',function(){
        twoDecksH17SoftTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...TwoDecksH17Soft(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        twoDecksH17SoftFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...TwoDecksH17Soft(...value))).to.not.be.ok
            })
        })
    })
})

let twoDeckSplitsH17Trusy=[
    [[9,9],7],
    [[9,9],10],
    [[9,9],1]
]

let twoDeckSplitsH17Falsy=_.differenceWith(combineSplit,twoDeckSplitsH17Trusy,_.isEqual)

function TwoDeckSplitsH17(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:2,
        charlie:false,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

describe('One Deck S17 Split hands ',function(){
    describe('stand',function(){
        twoDeckSplitsH17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...TwoDeckSplitsH17(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        twoDeckSplitsH17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...TwoDeckSplitsH17(...value))).to.not.be.ok
            })
        })
    })
})

//4 decks
let fourDecksS17HardTrusy=[

    [ 12, 4, false ],
    [ 12, 5, false ],
    [ 12, 6, false ],

    [ 13, 2, false ],
    [ 13, 3, false ],
    [ 13, 4, false ],
    [ 13, 5, false ],
    [ 13, 6, false ],

    [ 14, 2, false ],
    [ 14, 3, false ],
    [ 14, 4, false ],
    [ 14, 5, false ],
    [ 14, 6, false ],

    [ 15, 2, false ],
    [ 15, 3, false ],
    [ 15, 4, false ],
    [ 15, 5, false ],
    [ 15, 6, false ],

    [ 16, 2, false ],
    [ 16, 3, false ],
    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],

    [ 17, 1, false ],
    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],
    [ 17, 9, false ],
    [ 17, 10, false ],
    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
]
let fourDecksS17HardFalsy=_.differenceWith(combineH,fourDecksS17HardTrusy,_.isEqual)
function FourDecksS17Hard(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:4,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}
describe('Four Decks S17 Hard hands',function(){
    describe('stand',function(){
        fourDecksS17HardTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...FourDecksS17Hard(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        fourDecksS17HardFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...FourDecksS17Hard(...value))).to.not.be.ok
            })
        })
    })
})

let fourDecksS17SoftTrusy=[

    [ 18, 2, true ],
    [ 18, 3, true ],
    [ 18, 4, true ],
    [ 18, 5, true ],
    [ 18, 6, true ],
    [ 18, 7, true ],
    [ 18, 8, true ],

    [ 19, 1, true ],
    [ 19, 2, true ],
    [ 19, 3, true ],
    [ 19, 4, true ],
    [ 19, 5, true ],
    [ 19, 6, true ],
    [ 19, 7, true ],
    [ 19, 8, true ],
    [ 19, 9, true ],
    [ 19, 10, true ],
    [ 20, 1, true ],
    [ 20, 2, true ],
    [ 20, 3, true ],
    [ 20, 4, true ],
    [ 20, 5, true ],
    [ 20, 6, true ],
    [ 20, 7, true ],
    [ 20, 8, true ],
    [ 20, 9, true ],
    [ 20, 10, true ],

]
let fourDecksS17SoftFalsy=_.differenceWith(combineS,fourDecksS17SoftTrusy,_.isEqual)
function FourDecksS17Soft(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:4,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}

describe('Four Decks S17 Soft hands',function(){
    describe('stand',function(){
        fourDecksS17SoftTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...FourDecksS17Soft(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        fourDecksS17SoftFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...FourDecksS17Soft(...value))).to.not.be.ok
            })
        })
    })
})

let fourDeckSplitsS17Trusy=[

    [[9,9],7],
    [[9,9],10],
    [[9,9],1]
]

let fourDeckSplitsS17Falsy=_.differenceWith(combineSplit,fourDeckSplitsS17Trusy,_.isEqual)

function FourDeckSplitsS17(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:4,
        charlie:false,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

describe('Two Deck S17 Split hands',function(){
    describe('stand',function(){
        twoDeckSplitsS17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...TwoDeckSplitsS17(...value))).to.be.ok
            })
        })
    })
    describe('Not double',function(){
        twoDeckSplitsS17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...TwoDeckSplitsS17(...value))).to.not.be.ok
            })
        })
    })
})

let fourDecksH17HardTrusy=[
    [ 12, 4, false ],
    [ 12, 5, false ],
    [ 12, 6, false ],

    [ 13, 2, false ],
    [ 13, 3, false ],
    [ 13, 4, false ],
    [ 13, 5, false ],
    [ 13, 6, false ],

    [ 14, 2, false ],
    [ 14, 3, false ],
    [ 14, 4, false ],
    [ 14, 5, false ],
    [ 14, 6, false ],

    [ 15, 2, false ],
    [ 15, 3, false ],
    [ 15, 4, false ],
    [ 15, 5, false ],
    [ 15, 6, false ],

    [ 16, 2, false ],
    [ 16, 3, false ],
    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],

    [ 17, 1, false ],
    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],
    [ 17, 9, false ],
    [ 17, 10, false ],
    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
]
let fourDecksH17HardFalsy=_.differenceWith(combineH,fourDecksH17HardTrusy,_.isEqual)
function FourDecksH17Hard(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:4,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}

describe('Two Decks H17 Hard hands',function(){
    describe('stand',function(){
        fourDecksH17HardTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...FourDecksH17Hard(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        fourDecksH17HardFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...FourDecksH17Hard(...value))).to.not.be.ok
            })
        })
    })
})

let fourDecksH17SoftTrusy=[

    [ 18, 2, true ],
    [ 18, 3, true ],
    [ 18, 4, true ],
    [ 18, 5, true ],
    [ 18, 6, true ],
    [ 18, 7, true ],
    [ 18, 8, true ],

    [ 19, 1, true ],
    [ 19, 2, true ],
    [ 19, 3, true ],
    [ 19, 4, true ],
    [ 19, 5, true ],
    [ 19, 6, true ],
    [ 19, 7, true ],
    [ 19, 8, true ],
    [ 19, 9, true ],
    [ 19, 10, true ],
    [ 20, 1, true ],
    [ 20, 2, true ],
    [ 20, 3, true ],
    [ 20, 4, true ],
    [ 20, 5, true ],
    [ 20, 6, true ],
    [ 20, 7, true ],
    [ 20, 8, true ],
    [ 20, 9, true ],
    [ 20, 10, true ],

]
let fourDecksH17SoftFalsy=_.differenceWith(combineS,fourDecksH17SoftTrusy,_.isEqual)
function FourDecksH17Soft(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:2,
        charlie:false,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}
describe('Four Decks H17 Soft hands',function(){
    describe('stand',function(){
        fourDecksH17SoftTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...FourDecksH17Soft(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        fourDecksH17SoftFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...FourDecksH17Soft(...value))).to.not.be.ok
            })
        })
    })
})

let fourDeckSplitsH17Trusy=[
    [[9,9],7],
    [[9,9],10],
    [[9,9],1]
]

let fourDeckSplitsH17Falsy=_.differenceWith(combineSplit,fourDeckSplitsH17Trusy,_.isEqual)

function FourDeckSplitsH17(playerCards,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:2,
        charlie:false,
        doubleAfterSplit:false

    })
    const handValue=Points(playerCards)
    const handCount=1
    return [playerCards,dealerCard,handValue,handCount,options]
}

describe('Four Deck H17 Split hands ',function(){
    describe('stand',function(){
        twoDeckSplitsH17Trusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...FourDeckSplitsH17(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        twoDeckSplitsH17Falsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...FourDeckSplitsH17(...value))).to.not.be.ok
            })
        })
    })
})

let charlieOneAwaySoftFalsy=combineS
function CharlieOneAwaySoft(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:8,
        charlie:5,
        charlie:true

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,2,3,4],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}
describe('One card away Charlie',function(){

    describe('Not double',function(){
        charlieOneAwaySoftFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...CharlieOneAwaySoft(...value))).to.not.be.ok
            })
        })
    })
})

let charlieTwoAwaySoftTrusy=[

    [ 19, 1, true ],
    [ 19, 2, true ],
    [ 19, 3, true ],
    [ 19, 4, true ],
    [ 19, 5, true ],
    [ 19, 6, true ],
    [ 19, 7, true ],
    [ 19, 8, true ],
    [ 19, 9, true ],

    [ 20, 1, true ],
    [ 20, 2, true ],
    [ 20, 3, true ],
    [ 20, 4, true ],
    [ 20, 5, true ],
    [ 20, 6, true ],
    [ 20, 7, true ],
    [ 20, 8, true ],
    [ 20, 9, true ],
    [ 20, 10, true ],
]
let charlieTwoAwaySoftFalsy=_.differenceWith(combineS,charlieTwoAwaySoftTrusy,_.isEqual)

function CharlieTwoAwaySoft(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:8,
        charlie:5,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,2,3],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}
describe('Two cards away Charlie',function(){
    describe('stand',function(){
        charlieTwoAwaySoftTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...CharlieTwoAwaySoft(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        charlieTwoAwaySoftFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...CharlieTwoAwaySoft(...value))).to.not.be.ok
            })
        })
    })
})

let charlieThreeAwaySoftTrusy=[
    [ 18, 1, true ],
    [ 18, 2, true ],

    [ 18, 7, true ],
    [ 18, 8, true ],
    [ 18, 9, true ],
    [ 18, 10, true ],
    [ 19, 1, true ],
    [ 19, 2, true ],
    [ 19, 3, true ],
    [ 19, 4, true ],
    [ 19, 5, true ],
    [ 19, 6, true ],
    [ 19, 7, true ],
    [ 19, 8, true ],
    [ 19, 9, true ],
    [ 19, 10, true ],
    [ 20, 1, true ],
    [ 20, 2, true ],
    [ 20, 3, true ],
    [ 20, 4, true ],
    [ 20, 5, true ],
    [ 20, 6, true ],
    [ 20, 7, true ],
    [ 20, 8, true ],
    [ 20, 9, true ],
    [ 20, 10, true ],
]
let charlieThreeAwaySoftFalsy=_.differenceWith(combineS,charlieThreeAwaySoftTrusy,_.isEqual)
function CharlieThreeAwaySoft(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:8,
        charlie:5,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,2],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}
describe('Three cards away Charlie',function(){
    describe('stand',function(){
        charlieThreeAwaySoftTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...CharlieThreeAwaySoft(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        charlieThreeAwaySoftFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...CharlieThreeAwaySoft(...value))).to.not.be.ok
            })
        })
    })
})

let charlieOneAwayHardTrusy=[

    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],


    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],

    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
]
let charlieOneAwayHardFalsy=_.differenceWith(combineH,charlieOneAwayHardTrusy,_.isEqual)
function CharlieOneAwayHard(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:8,
        charlie:5,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,2,3,4],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}

describe('One card away Charlie',function(){
    describe('stand',function(){
        charlieOneAwayHardTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...CharlieOneAwayHard(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        charlieOneAwayHardFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...CharlieOneAwayHard(...value))).to.not.be.ok
            })
        })
    })
})

let charlieTwoAwayHardTrusy=[

    [ 13, 4, false ],
    [ 13, 5, false ],
    [ 13, 6, false ],

    [ 14, 2, false ],
    [ 14, 3, false ],
    [ 14, 4, false ],
    [ 14, 5, false ],
    [ 14, 6, false ],

    [ 15, 2, false ],
    [ 15, 3, false ],
    [ 15, 4, false ],
    [ 15, 5, false ],
    [ 15, 6, false ],


    [ 16, 2, false ],
    [ 16, 3, false ],
    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],

    [ 17, 1, false ],
    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],
    [ 17, 9, false ],
    [ 17, 10, false ],
    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
]
let charlieTwoAwayHardFalsy=_.differenceWith(combineH,charlieTwoAwayHardTrusy,_.isEqual)
function CharlieTwoAwayHard(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:8,
        charlie:5,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,2,3],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}
describe('Two cards away Charlie',function(){
    describe('stand',function(){
        charlieTwoAwayHardTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...CharlieTwoAwayHard(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        charlieTwoAwayHardFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...CharlieTwoAwayHard(...value))).to.not.be.ok
            })
        })
    })
})

let charlieThreeAwayHardTrusy=[
    [ 12, 4, false ],
    [ 12, 5, false ],
    [ 12, 6, false ],

    [ 13, 2, false ],
    [ 13, 3, false ],
    [ 13, 4, false ],
    [ 13, 5, false ],
    [ 13, 6, false ],

    [ 14, 2, false ],
    [ 14, 3, false ],
    [ 14, 4, false ],
    [ 14, 5, false ],
    [ 14, 6, false ],

    [ 15, 2, false ],
    [ 15, 3, false ],
    [ 15, 4, false ],
    [ 15, 5, false ],
    [ 15, 6, false ],


    [ 16, 2, false ],
    [ 16, 3, false ],
    [ 16, 4, false ],
    [ 16, 5, false ],
    [ 16, 6, false ],

    [ 17, 1, false ],
    [ 17, 2, false ],
    [ 17, 3, false ],
    [ 17, 4, false ],
    [ 17, 5, false ],
    [ 17, 6, false ],
    [ 17, 7, false ],
    [ 17, 8, false ],
    [ 17, 9, false ],
    [ 17, 10, false ],
    [ 18, 1, false ],
    [ 18, 2, false ],
    [ 18, 3, false ],
    [ 18, 4, false ],
    [ 18, 5, false ],
    [ 18, 6, false ],
    [ 18, 7, false ],
    [ 18, 8, false ],
    [ 18, 9, false ],
    [ 18, 10, false ],
    [ 19, 1, false ],
    [ 19, 2, false ],
    [ 19, 3, false ],
    [ 19, 4, false ],
    [ 19, 5, false ],
    [ 19, 6, false ],
    [ 19, 7, false ],
    [ 19, 8, false ],
    [ 19, 9, false ],
    [ 19, 10, false ],
]
let charlieThreeAwayHardFalsy=_.differenceWith(combineH,charlieThreeAwayHardTrusy,_.isEqual)
function CharlieThreeAwayHard(playerPoint,dealerCard,soft){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:8,
        charlie:5,

    })
    const handValue=playerPoint
    const handCount=1
    return [[1,2],dealerCard,{total:playerPoint,soft:soft},handCount,options]
}
describe('Three cards away Charlie',function(){
    describe('stand',function(){
        charlieThreeAwayHardTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Stand(...CharlieThreeAwayHard(...value))).to.be.ok
            })
        })
    })
    describe('Not stand',function(){
        charlieThreeAwayHardFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Stand(...CharlieThreeAwayHard(...value))).to.not.be.ok
            })
        })
    })
})
