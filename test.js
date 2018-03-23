// const gameOptions={
//     numberOfDecks:6,
//     hitSoft17:false,
//     doubleAfterSplit:true,
//     doubleRange:[0,21],
//     maxSplitHands:4,
//     resplitAces:true,
//     hitSplitedAce:false,
//     surrender:'late',
//     CSM:false,
//     backBet:false,
//     EuropeanNoHoldCard:true,
//     rolling:0
// }
const _=require('lodash')



const decks=[1,2,4,6,8]
const hitS17s=[true,false]
const DASs=[true,false]
const doubleRanges=[[0,21],[9,11],[10,11]]
const maxSplitHands=[2,3,4]
const resplitAces=[true,false]
const hitSplitedAces=[true,false]
const surrenders=['late','early10','earlyA',false]
const CSMs=[true,false]
const EuropeanNoHoldCards=[true,false]

const gameOptions=[]
_.forEach(decks,deck=>{
    _.forEach(hitS17s,hitS17=>{
        _.forEach(DASs,DAS=>{
            _.forEach(doubleRanges,doubleRange=>{
                _.forEach(maxSplitHands,maxSplitHand=>{
                    _.forEach(resplitAces,resplitAce=>{
                        _.forEach(hitSplitedAces,hitSplitedAce=>{
                            _.forEach(surrenders,surrender=>{
                                _.forEach(CSMs,CSM=>{
                                    _.forEach(EuropeanNoHoldCards,EuropeanNoHoldCard=>{
                                        gameOptions.push({
                                            numberOfDecks:deck,
                                            hitSoft17:hitS17,
                                            doubleAfterSplit:DAS,
                                            doubleRange:doubleRange,
                                            maxSplitHands:maxSplitHand,
                                            resplitAces:resplitAce,
                                            hitSplitedAce:hitSplitedAce,
                                            surrender:surrender,
                                            CSM:CSM,
                                            EuropeanNoHoldCard:EuropeanNoHoldCard
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

console.log(gameOptions.length)

