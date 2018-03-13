// function Points(cards){
//     const info={total:0,soft:false}
//     let hasAce=false
//
//     for(let i=0;i<cards.length;i++){
//         info.total+=cards[i]
//
//         //If Ace
//         if(cards[i]===1){
//             hasAce=true
//         }
//     }
//
//     if(info.total<=11&&hasAce){
//         info.total+=10;
//         info.soft=true
//     }
//
//
//     return info
// }
// const cards=[1,2,3,4,5,6,7,8,9,10]
// const _=require('lodash')
// let combines={}
// _.forEach(cards,function(card1){
//     _.forEach(cards,function(card2){
//         _.forEach(cards,function(card3){
//             let result=Points([card1,card2,card3])
//             if(result.total<=21){
//
//                 if(combines[[result.total,result.soft]]===undefined){
//                     combines[[result.total,result.soft]]=[[card1,card2,card3]]
//                 }else{
//                     combines[[result.total,result.soft]]=[...combines[[result.total,result.soft]],[card1,card2,card3]]
//                 }
//             }
//         })
//
//
//
//         // combines[[card1,card2]]=Points([card1,card2])
//     })
// })

// let splits={}
//
// _.forEach(cards,function(card1){
//     _.forEach(cards,function(card2){
//         if(card1===card2){
//             let result=Points([card1,card2])
//             if(splits[[result.total,result.soft]]===undefined){
//                 splits[[result.total,result.soft]]=[[card1,card2]]
//             }else{
//                 splits[[result.total,result.soft]]=[...splits[[result.total,result.soft]],[card1,card2]]
//             }
//         }
//
//
//         // splits[[card1,card2]]=Points([card1,card2])
//     })
// })

// console.log(splits)

// console.log((combines))




// function makeCombine(times){
//     const combinesBackup=_.clone(combines)
//     for(let i=0;i<times-2;i++){
//         _.forEach(cards,function(card){
//             _.forEach(combines,function(combine,key){
//                 let oldCards=JSON.parse("[" + key + "]")
//                 let newCards=[...oldCards,card]
//                 let result=Points(newCards)
//                 if(result.total<=21){
//                     combinesBackup[newCards]=result
//                 }
//             })
//         })
//         combines=_.clone(combinesBackup)
//     }
//     console.log(combinesBackup,_.size(combinesBackup))
// }
// makeCombine(7)
//
// let cards={ '13,true': [ [ 1, 2 ], [ 2, 1 ] ],
//     '14,true': [ [ 1, 3 ], [ 3, 1 ] ],
//     '15,true': [ [ 1, 4 ], [ 4, 1 ] ],
//     '16,true': [ [ 1, 5 ], [ 5, 1 ] ],
//     '17,true': [ [ 1, 6 ], [ 6, 1 ] ],
//     '18,true': [ [ 1, 7 ], [ 7, 1 ] ],
//     '19,true': [ [ 1, 8 ], [ 8, 1 ] ],
//     '20,true': [ [ 1, 9 ], [ 9, 1 ] ],
//     '21,true': [ [ 1, 10 ], [ 10, 1 ] ],
//     '5,false': [ [ 2, 3 ], [ 3, 2 ] ],
//     '6,false': [ [ 2, 4 ], [ 4, 2 ] ],
//     '7,false': [ [ 2, 5 ], [ 3, 4 ], [ 4, 3 ], [ 5, 2 ] ],
//     '8,false': [ [ 2, 6 ], [ 3, 5 ], [ 5, 3 ], [ 6, 2 ] ],
//     '9,false': [ [ 2, 7 ], [ 3, 6 ], [ 4, 5 ], [ 5, 4 ], [ 6, 3 ], [ 7, 2 ] ],
//     '10,false': [ [ 2, 8 ], [ 3, 7 ], [ 4, 6 ], [ 6, 4 ], [ 7, 3 ], [ 8, 2 ] ],
//     '11,false':
//         [ [ 2, 9 ],
//             [ 3, 8 ],
//             [ 4, 7 ],
//             [ 5, 6 ],
//             [ 6, 5 ],
//             [ 7, 4 ],
//             [ 8, 3 ],
//             [ 9, 2 ] ],
//     '12,false':
//         [ [ 2, 10 ],
//             [ 3, 9 ],
//             [ 4, 8 ],
//             [ 5, 7 ],
//             [ 7, 5 ],
//             [ 8, 4 ],
//             [ 9, 3 ],
//             [ 10, 2 ] ],
//     '13,false':
//         [ [ 3, 10 ],
//             [ 4, 9 ],
//             [ 5, 8 ],
//             [ 6, 7 ],
//             [ 7, 6 ],
//             [ 8, 5 ],
//             [ 9, 4 ],
//             [ 10, 3 ] ],
//     '14,false': [ [ 4, 10 ], [ 5, 9 ], [ 6, 8 ], [ 8, 6 ], [ 9, 5 ], [ 10, 4 ] ],
//     '15,false': [ [ 5, 10 ], [ 6, 9 ], [ 7, 8 ], [ 8, 7 ], [ 9, 6 ], [ 10, 5 ] ],
//     '16,false': [ [ 6, 10 ], [ 7, 9 ], [ 9, 7 ], [ 10, 6 ] ],
//     '17,false': [ [ 7, 10 ], [ 8, 9 ], [ 9, 8 ], [ 10, 7 ] ],
//     '18,false': [ [ 8, 10 ], [ 10, 8 ] ],
//     '19,false': [ [ 9, 10 ], [ 10, 9 ] ] }



