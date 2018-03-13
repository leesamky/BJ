const Double=require('./Double')
const _=require('lodash')
var expect=require('chai').expect
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

function makeThreeCardsCombine(arr){
    let cardsCombine=[]
    _.forEach(arr,function(elem){
        let combines=threeCards[[elem[0],elem[2]]]
        _.forEach(combines,function(combine){
            cardsCombine.push([combine,elem[1]])
        })
    })
    return cardsCombine
}
// console.log(Double(...OneDeckS17Hard(8,5,false)))
let twoCards={ '13,true': [ [ 1, 2 ], [ 2, 1 ] ],
    '14,true': [ [ 1, 3 ], [ 3, 1 ] ],
    '15,true': [ [ 1, 4 ], [ 4, 1 ] ],
    '16,true': [ [ 1, 5 ], [ 5, 1 ] ],
    '17,true': [ [ 1, 6 ], [ 6, 1 ] ],
    '18,true': [ [ 1, 7 ], [ 7, 1 ] ],
    '19,true': [ [ 1, 8 ], [ 8, 1 ] ],
    '20,true': [ [ 1, 9 ], [ 9, 1 ] ],
    '21,true': [ [ 1, 10 ], [ 10, 1 ] ],
    '5,false': [ [ 2, 3 ], [ 3, 2 ] ],
    '6,false': [ [ 2, 4 ], [ 4, 2 ] ],
    '7,false': [ [ 2, 5 ], [ 3, 4 ], [ 4, 3 ], [ 5, 2 ] ],
    '8,false': [ [ 2, 6 ], [ 3, 5 ], [ 5, 3 ], [ 6, 2 ] ],
    '9,false': [ [ 2, 7 ], [ 3, 6 ], [ 4, 5 ], [ 5, 4 ], [ 6, 3 ], [ 7, 2 ] ],
    '10,false': [ [ 2, 8 ], [ 3, 7 ], [ 4, 6 ], [ 6, 4 ], [ 7, 3 ], [ 8, 2 ] ],
    '11,false':
        [ [ 2, 9 ],
            [ 3, 8 ],
            [ 4, 7 ],
            [ 5, 6 ],
            [ 6, 5 ],
            [ 7, 4 ],
            [ 8, 3 ],
            [ 9, 2 ] ],
    '12,false':
        [ [ 2, 10 ],
            [ 3, 9 ],
            [ 4, 8 ],
            [ 5, 7 ],
            [ 7, 5 ],
            [ 8, 4 ],
            [ 9, 3 ],
            [ 10, 2 ] ],
    '13,false':
        [ [ 3, 10 ],
            [ 4, 9 ],
            [ 5, 8 ],
            [ 6, 7 ],
            [ 7, 6 ],
            [ 8, 5 ],
            [ 9, 4 ],
            [ 10, 3 ] ],
    '14,false': [ [ 4, 10 ], [ 5, 9 ], [ 6, 8 ], [ 8, 6 ], [ 9, 5 ], [ 10, 4 ] ],
    '15,false': [ [ 5, 10 ], [ 6, 9 ], [ 7, 8 ], [ 8, 7 ], [ 9, 6 ], [ 10, 5 ] ],
    '16,false': [ [ 6, 10 ], [ 7, 9 ], [ 9, 7 ], [ 10, 6 ] ],
    '17,false': [ [ 7, 10 ], [ 8, 9 ], [ 9, 8 ], [ 10, 7 ] ],
    '18,false': [ [ 8, 10 ], [ 10, 8 ] ],
    '19,false': [ [ 9, 10 ], [ 10, 9 ] ] }
let splits={ '12,true': [ [ 1, 1 ] ],
    '4,false': [ [ 2, 2 ] ],
    '6,false': [ [ 3, 3 ] ],
    '8,false': [ [ 4, 4 ] ],
    '10,false': [ [ 5, 5 ] ],
    '12,false': [ [ 6, 6 ] ],
    '14,false': [ [ 7, 7 ] ],
    '16,false': [ [ 8, 8 ] ],
    '18,false': [ [ 9, 9 ] ],
    '20,false': [ [ 10, 10 ] ] }
let threeCards={ '13,true': [ [ 1, 1, 1 ] ],
    '14,true': [ [ 1, 1, 2 ], [ 1, 2, 1 ], [ 2, 1, 1 ] ],
    '15,true':
        [ [ 1, 1, 3 ],
            [ 1, 2, 2 ],
            [ 1, 3, 1 ],
            [ 2, 1, 2 ],
            [ 2, 2, 1 ],
            [ 3, 1, 1 ] ],
    '16,true':
        [ [ 1, 1, 4 ],
            [ 1, 2, 3 ],
            [ 1, 3, 2 ],
            [ 1, 4, 1 ],
            [ 2, 1, 3 ],
            [ 2, 3, 1 ],
            [ 3, 1, 2 ],
            [ 3, 2, 1 ],
            [ 4, 1, 1 ] ],
    '17,true':
        [ [ 1, 1, 5 ],
            [ 1, 2, 4 ],
            [ 1, 3, 3 ],
            [ 1, 4, 2 ],
            [ 1, 5, 1 ],
            [ 2, 1, 4 ],
            [ 2, 4, 1 ],
            [ 3, 1, 3 ],
            [ 3, 3, 1 ],
            [ 4, 1, 2 ],
            [ 4, 2, 1 ],
            [ 5, 1, 1 ] ],
    '18,true':
        [ [ 1, 1, 6 ],
            [ 1, 2, 5 ],
            [ 1, 3, 4 ],
            [ 1, 4, 3 ],
            [ 1, 5, 2 ],
            [ 1, 6, 1 ],
            [ 2, 1, 5 ],
            [ 2, 5, 1 ],
            [ 3, 1, 4 ],
            [ 3, 4, 1 ],
            [ 4, 1, 3 ],
            [ 4, 3, 1 ],
            [ 5, 1, 2 ],
            [ 5, 2, 1 ],
            [ 6, 1, 1 ] ],
    '19,true':
        [ [ 1, 1, 7 ],
            [ 1, 2, 6 ],
            [ 1, 3, 5 ],
            [ 1, 4, 4 ],
            [ 1, 5, 3 ],
            [ 1, 6, 2 ],
            [ 1, 7, 1 ],
            [ 2, 1, 6 ],
            [ 2, 6, 1 ],
            [ 3, 1, 5 ],
            [ 3, 5, 1 ],
            [ 4, 1, 4 ],
            [ 4, 4, 1 ],
            [ 5, 1, 3 ],
            [ 5, 3, 1 ],
            [ 6, 1, 2 ],
            [ 6, 2, 1 ],
            [ 7, 1, 1 ] ],
    '20,true':
        [ [ 1, 1, 8 ],
            [ 1, 2, 7 ],
            [ 1, 3, 6 ],
            [ 1, 4, 5 ],
            [ 1, 5, 4 ],
            [ 1, 6, 3 ],
            [ 1, 7, 2 ],
            [ 1, 8, 1 ],
            [ 2, 1, 7 ],
            [ 2, 7, 1 ],
            [ 3, 1, 6 ],
            [ 3, 6, 1 ],
            [ 4, 1, 5 ],
            [ 4, 5, 1 ],
            [ 5, 1, 4 ],
            [ 5, 4, 1 ],
            [ 6, 1, 3 ],
            [ 6, 3, 1 ],
            [ 7, 1, 2 ],
            [ 7, 2, 1 ],
            [ 8, 1, 1 ] ],
    '21,true':
        [ [ 1, 1, 9 ],
            [ 1, 2, 8 ],
            [ 1, 3, 7 ],
            [ 1, 4, 6 ],
            [ 1, 5, 5 ],
            [ 1, 6, 4 ],
            [ 1, 7, 3 ],
            [ 1, 8, 2 ],
            [ 1, 9, 1 ],
            [ 2, 1, 8 ],
            [ 2, 8, 1 ],
            [ 3, 1, 7 ],
            [ 3, 7, 1 ],
            [ 4, 1, 6 ],
            [ 4, 6, 1 ],
            [ 5, 1, 5 ],
            [ 5, 5, 1 ],
            [ 6, 1, 4 ],
            [ 6, 4, 1 ],
            [ 7, 1, 3 ],
            [ 7, 3, 1 ],
            [ 8, 1, 2 ],
            [ 8, 2, 1 ],
            [ 9, 1, 1 ] ],
    '12,false':
        [ [ 1, 1, 10 ],
            [ 1, 2, 9 ],
            [ 1, 3, 8 ],
            [ 1, 4, 7 ],
            [ 1, 5, 6 ],
            [ 1, 6, 5 ],
            [ 1, 7, 4 ],
            [ 1, 8, 3 ],
            [ 1, 9, 2 ],
            [ 1, 10, 1 ],
            [ 2, 1, 9 ],
            [ 2, 2, 8 ],
            [ 2, 3, 7 ],
            [ 2, 4, 6 ],
            [ 2, 5, 5 ],
            [ 2, 6, 4 ],
            [ 2, 7, 3 ],
            [ 2, 8, 2 ],
            [ 2, 9, 1 ],
            [ 3, 1, 8 ],
            [ 3, 2, 7 ],
            [ 3, 3, 6 ],
            [ 3, 4, 5 ],
            [ 3, 5, 4 ],
            [ 3, 6, 3 ],
            [ 3, 7, 2 ],
            [ 3, 8, 1 ],
            [ 4, 1, 7 ],
            [ 4, 2, 6 ],
            [ 4, 3, 5 ],
            [ 4, 4, 4 ],
            [ 4, 5, 3 ],
            [ 4, 6, 2 ],
            [ 4, 7, 1 ],
            [ 5, 1, 6 ],
            [ 5, 2, 5 ],
            [ 5, 3, 4 ],
            [ 5, 4, 3 ],
            [ 5, 5, 2 ],
            [ 5, 6, 1 ],
            [ 6, 1, 5 ],
            [ 6, 2, 4 ],
            [ 6, 3, 3 ],
            [ 6, 4, 2 ],
            [ 6, 5, 1 ],
            [ 7, 1, 4 ],
            [ 7, 2, 3 ],
            [ 7, 3, 2 ],
            [ 7, 4, 1 ],
            [ 8, 1, 3 ],
            [ 8, 2, 2 ],
            [ 8, 3, 1 ],
            [ 9, 1, 2 ],
            [ 9, 2, 1 ],
            [ 10, 1, 1 ] ],
    '13,false':
        [ [ 1, 2, 10 ],
            [ 1, 3, 9 ],
            [ 1, 4, 8 ],
            [ 1, 5, 7 ],
            [ 1, 6, 6 ],
            [ 1, 7, 5 ],
            [ 1, 8, 4 ],
            [ 1, 9, 3 ],
            [ 1, 10, 2 ],
            [ 2, 1, 10 ],
            [ 2, 2, 9 ],
            [ 2, 3, 8 ],
            [ 2, 4, 7 ],
            [ 2, 5, 6 ],
            [ 2, 6, 5 ],
            [ 2, 7, 4 ],
            [ 2, 8, 3 ],
            [ 2, 9, 2 ],
            [ 2, 10, 1 ],
            [ 3, 1, 9 ],
            [ 3, 2, 8 ],
            [ 3, 3, 7 ],
            [ 3, 4, 6 ],
            [ 3, 5, 5 ],
            [ 3, 6, 4 ],
            [ 3, 7, 3 ],
            [ 3, 8, 2 ],
            [ 3, 9, 1 ],
            [ 4, 1, 8 ],
            [ 4, 2, 7 ],
            [ 4, 3, 6 ],
            [ 4, 4, 5 ],
            [ 4, 5, 4 ],
            [ 4, 6, 3 ],
            [ 4, 7, 2 ],
            [ 4, 8, 1 ],
            [ 5, 1, 7 ],
            [ 5, 2, 6 ],
            [ 5, 3, 5 ],
            [ 5, 4, 4 ],
            [ 5, 5, 3 ],
            [ 5, 6, 2 ],
            [ 5, 7, 1 ],
            [ 6, 1, 6 ],
            [ 6, 2, 5 ],
            [ 6, 3, 4 ],
            [ 6, 4, 3 ],
            [ 6, 5, 2 ],
            [ 6, 6, 1 ],
            [ 7, 1, 5 ],
            [ 7, 2, 4 ],
            [ 7, 3, 3 ],
            [ 7, 4, 2 ],
            [ 7, 5, 1 ],
            [ 8, 1, 4 ],
            [ 8, 2, 3 ],
            [ 8, 3, 2 ],
            [ 8, 4, 1 ],
            [ 9, 1, 3 ],
            [ 9, 2, 2 ],
            [ 9, 3, 1 ],
            [ 10, 1, 2 ],
            [ 10, 2, 1 ] ],
    '14,false':
        [ [ 1, 3, 10 ],
            [ 1, 4, 9 ],
            [ 1, 5, 8 ],
            [ 1, 6, 7 ],
            [ 1, 7, 6 ],
            [ 1, 8, 5 ],
            [ 1, 9, 4 ],
            [ 1, 10, 3 ],
            [ 2, 2, 10 ],
            [ 2, 3, 9 ],
            [ 2, 4, 8 ],
            [ 2, 5, 7 ],
            [ 2, 6, 6 ],
            [ 2, 7, 5 ],
            [ 2, 8, 4 ],
            [ 2, 9, 3 ],
            [ 2, 10, 2 ],
            [ 3, 1, 10 ],
            [ 3, 2, 9 ],
            [ 3, 3, 8 ],
            [ 3, 4, 7 ],
            [ 3, 5, 6 ],
            [ 3, 6, 5 ],
            [ 3, 7, 4 ],
            [ 3, 8, 3 ],
            [ 3, 9, 2 ],
            [ 3, 10, 1 ],
            [ 4, 1, 9 ],
            [ 4, 2, 8 ],
            [ 4, 3, 7 ],
            [ 4, 4, 6 ],
            [ 4, 5, 5 ],
            [ 4, 6, 4 ],
            [ 4, 7, 3 ],
            [ 4, 8, 2 ],
            [ 4, 9, 1 ],
            [ 5, 1, 8 ],
            [ 5, 2, 7 ],
            [ 5, 3, 6 ],
            [ 5, 4, 5 ],
            [ 5, 5, 4 ],
            [ 5, 6, 3 ],
            [ 5, 7, 2 ],
            [ 5, 8, 1 ],
            [ 6, 1, 7 ],
            [ 6, 2, 6 ],
            [ 6, 3, 5 ],
            [ 6, 4, 4 ],
            [ 6, 5, 3 ],
            [ 6, 6, 2 ],
            [ 6, 7, 1 ],
            [ 7, 1, 6 ],
            [ 7, 2, 5 ],
            [ 7, 3, 4 ],
            [ 7, 4, 3 ],
            [ 7, 5, 2 ],
            [ 7, 6, 1 ],
            [ 8, 1, 5 ],
            [ 8, 2, 4 ],
            [ 8, 3, 3 ],
            [ 8, 4, 2 ],
            [ 8, 5, 1 ],
            [ 9, 1, 4 ],
            [ 9, 2, 3 ],
            [ 9, 3, 2 ],
            [ 9, 4, 1 ],
            [ 10, 1, 3 ],
            [ 10, 2, 2 ],
            [ 10, 3, 1 ] ],
    '15,false':
        [ [ 1, 4, 10 ],
            [ 1, 5, 9 ],
            [ 1, 6, 8 ],
            [ 1, 7, 7 ],
            [ 1, 8, 6 ],
            [ 1, 9, 5 ],
            [ 1, 10, 4 ],
            [ 2, 3, 10 ],
            [ 2, 4, 9 ],
            [ 2, 5, 8 ],
            [ 2, 6, 7 ],
            [ 2, 7, 6 ],
            [ 2, 8, 5 ],
            [ 2, 9, 4 ],
            [ 2, 10, 3 ],
            [ 3, 2, 10 ],
            [ 3, 3, 9 ],
            [ 3, 4, 8 ],
            [ 3, 5, 7 ],
            [ 3, 6, 6 ],
            [ 3, 7, 5 ],
            [ 3, 8, 4 ],
            [ 3, 9, 3 ],
            [ 3, 10, 2 ],
            [ 4, 1, 10 ],
            [ 4, 2, 9 ],
            [ 4, 3, 8 ],
            [ 4, 4, 7 ],
            [ 4, 5, 6 ],
            [ 4, 6, 5 ],
            [ 4, 7, 4 ],
            [ 4, 8, 3 ],
            [ 4, 9, 2 ],
            [ 4, 10, 1 ],
            [ 5, 1, 9 ],
            [ 5, 2, 8 ],
            [ 5, 3, 7 ],
            [ 5, 4, 6 ],
            [ 5, 5, 5 ],
            [ 5, 6, 4 ],
            [ 5, 7, 3 ],
            [ 5, 8, 2 ],
            [ 5, 9, 1 ],
            [ 6, 1, 8 ],
            [ 6, 2, 7 ],
            [ 6, 3, 6 ],
            [ 6, 4, 5 ],
            [ 6, 5, 4 ],
            [ 6, 6, 3 ],
            [ 6, 7, 2 ],
            [ 6, 8, 1 ],
            [ 7, 1, 7 ],
            [ 7, 2, 6 ],
            [ 7, 3, 5 ],
            [ 7, 4, 4 ],
            [ 7, 5, 3 ],
            [ 7, 6, 2 ],
            [ 7, 7, 1 ],
            [ 8, 1, 6 ],
            [ 8, 2, 5 ],
            [ 8, 3, 4 ],
            [ 8, 4, 3 ],
            [ 8, 5, 2 ],
            [ 8, 6, 1 ],
            [ 9, 1, 5 ],
            [ 9, 2, 4 ],
            [ 9, 3, 3 ],
            [ 9, 4, 2 ],
            [ 9, 5, 1 ],
            [ 10, 1, 4 ],
            [ 10, 2, 3 ],
            [ 10, 3, 2 ],
            [ 10, 4, 1 ] ],
    '16,false':
        [ [ 1, 5, 10 ],
            [ 1, 6, 9 ],
            [ 1, 7, 8 ],
            [ 1, 8, 7 ],
            [ 1, 9, 6 ],
            [ 1, 10, 5 ],
            [ 2, 4, 10 ],
            [ 2, 5, 9 ],
            [ 2, 6, 8 ],
            [ 2, 7, 7 ],
            [ 2, 8, 6 ],
            [ 2, 9, 5 ],
            [ 2, 10, 4 ],
            [ 3, 3, 10 ],
            [ 3, 4, 9 ],
            [ 3, 5, 8 ],
            [ 3, 6, 7 ],
            [ 3, 7, 6 ],
            [ 3, 8, 5 ],
            [ 3, 9, 4 ],
            [ 3, 10, 3 ],
            [ 4, 2, 10 ],
            [ 4, 3, 9 ],
            [ 4, 4, 8 ],
            [ 4, 5, 7 ],
            [ 4, 6, 6 ],
            [ 4, 7, 5 ],
            [ 4, 8, 4 ],
            [ 4, 9, 3 ],
            [ 4, 10, 2 ],
            [ 5, 1, 10 ],
            [ 5, 2, 9 ],
            [ 5, 3, 8 ],
            [ 5, 4, 7 ],
            [ 5, 5, 6 ],
            [ 5, 6, 5 ],
            [ 5, 7, 4 ],
            [ 5, 8, 3 ],
            [ 5, 9, 2 ],
            [ 5, 10, 1 ],
            [ 6, 1, 9 ],
            [ 6, 2, 8 ],
            [ 6, 3, 7 ],
            [ 6, 4, 6 ],
            [ 6, 5, 5 ],
            [ 6, 6, 4 ],
            [ 6, 7, 3 ],
            [ 6, 8, 2 ],
            [ 6, 9, 1 ],
            [ 7, 1, 8 ],
            [ 7, 2, 7 ],
            [ 7, 3, 6 ],
            [ 7, 4, 5 ],
            [ 7, 5, 4 ],
            [ 7, 6, 3 ],
            [ 7, 7, 2 ],
            [ 7, 8, 1 ],
            [ 8, 1, 7 ],
            [ 8, 2, 6 ],
            [ 8, 3, 5 ],
            [ 8, 4, 4 ],
            [ 8, 5, 3 ],
            [ 8, 6, 2 ],
            [ 8, 7, 1 ],
            [ 9, 1, 6 ],
            [ 9, 2, 5 ],
            [ 9, 3, 4 ],
            [ 9, 4, 3 ],
            [ 9, 5, 2 ],
            [ 9, 6, 1 ],
            [ 10, 1, 5 ],
            [ 10, 2, 4 ],
            [ 10, 3, 3 ],
            [ 10, 4, 2 ],
            [ 10, 5, 1 ] ],
    '17,false':
        [ [ 1, 6, 10 ],
            [ 1, 7, 9 ],
            [ 1, 8, 8 ],
            [ 1, 9, 7 ],
            [ 1, 10, 6 ],
            [ 2, 5, 10 ],
            [ 2, 6, 9 ],
            [ 2, 7, 8 ],
            [ 2, 8, 7 ],
            [ 2, 9, 6 ],
            [ 2, 10, 5 ],
            [ 3, 4, 10 ],
            [ 3, 5, 9 ],
            [ 3, 6, 8 ],
            [ 3, 7, 7 ],
            [ 3, 8, 6 ],
            [ 3, 9, 5 ],
            [ 3, 10, 4 ],
            [ 4, 3, 10 ],
            [ 4, 4, 9 ],
            [ 4, 5, 8 ],
            [ 4, 6, 7 ],
            [ 4, 7, 6 ],
            [ 4, 8, 5 ],
            [ 4, 9, 4 ],
            [ 4, 10, 3 ],
            [ 5, 2, 10 ],
            [ 5, 3, 9 ],
            [ 5, 4, 8 ],
            [ 5, 5, 7 ],
            [ 5, 6, 6 ],
            [ 5, 7, 5 ],
            [ 5, 8, 4 ],
            [ 5, 9, 3 ],
            [ 5, 10, 2 ],
            [ 6, 1, 10 ],
            [ 6, 2, 9 ],
            [ 6, 3, 8 ],
            [ 6, 4, 7 ],
            [ 6, 5, 6 ],
            [ 6, 6, 5 ],
            [ 6, 7, 4 ],
            [ 6, 8, 3 ],
            [ 6, 9, 2 ],
            [ 6, 10, 1 ],
            [ 7, 1, 9 ],
            [ 7, 2, 8 ],
            [ 7, 3, 7 ],
            [ 7, 4, 6 ],
            [ 7, 5, 5 ],
            [ 7, 6, 4 ],
            [ 7, 7, 3 ],
            [ 7, 8, 2 ],
            [ 7, 9, 1 ],
            [ 8, 1, 8 ],
            [ 8, 2, 7 ],
            [ 8, 3, 6 ],
            [ 8, 4, 5 ],
            [ 8, 5, 4 ],
            [ 8, 6, 3 ],
            [ 8, 7, 2 ],
            [ 8, 8, 1 ],
            [ 9, 1, 7 ],
            [ 9, 2, 6 ],
            [ 9, 3, 5 ],
            [ 9, 4, 4 ],
            [ 9, 5, 3 ],
            [ 9, 6, 2 ],
            [ 9, 7, 1 ],
            [ 10, 1, 6 ],
            [ 10, 2, 5 ],
            [ 10, 3, 4 ],
            [ 10, 4, 3 ],
            [ 10, 5, 2 ],
            [ 10, 6, 1 ] ],
    '18,false':
        [ [ 1, 7, 10 ],
            [ 1, 8, 9 ],
            [ 1, 9, 8 ],
            [ 1, 10, 7 ],
            [ 2, 6, 10 ],
            [ 2, 7, 9 ],
            [ 2, 8, 8 ],
            [ 2, 9, 7 ],
            [ 2, 10, 6 ],
            [ 3, 5, 10 ],
            [ 3, 6, 9 ],
            [ 3, 7, 8 ],
            [ 3, 8, 7 ],
            [ 3, 9, 6 ],
            [ 3, 10, 5 ],
            [ 4, 4, 10 ],
            [ 4, 5, 9 ],
            [ 4, 6, 8 ],
            [ 4, 7, 7 ],
            [ 4, 8, 6 ],
            [ 4, 9, 5 ],
            [ 4, 10, 4 ],
            [ 5, 3, 10 ],
            [ 5, 4, 9 ],
            [ 5, 5, 8 ],
            [ 5, 6, 7 ],
            [ 5, 7, 6 ],
            [ 5, 8, 5 ],
            [ 5, 9, 4 ],
            [ 5, 10, 3 ],
            [ 6, 2, 10 ],
            [ 6, 3, 9 ],
            [ 6, 4, 8 ],
            [ 6, 5, 7 ],
            [ 6, 6, 6 ],
            [ 6, 7, 5 ],
            [ 6, 8, 4 ],
            [ 6, 9, 3 ],
            [ 6, 10, 2 ],
            [ 7, 1, 10 ],
            [ 7, 2, 9 ],
            [ 7, 3, 8 ],
            [ 7, 4, 7 ],
            [ 7, 5, 6 ],
            [ 7, 6, 5 ],
            [ 7, 7, 4 ],
            [ 7, 8, 3 ],
            [ 7, 9, 2 ],
            [ 7, 10, 1 ],
            [ 8, 1, 9 ],
            [ 8, 2, 8 ],
            [ 8, 3, 7 ],
            [ 8, 4, 6 ],
            [ 8, 5, 5 ],
            [ 8, 6, 4 ],
            [ 8, 7, 3 ],
            [ 8, 8, 2 ],
            [ 8, 9, 1 ],
            [ 9, 1, 8 ],
            [ 9, 2, 7 ],
            [ 9, 3, 6 ],
            [ 9, 4, 5 ],
            [ 9, 5, 4 ],
            [ 9, 6, 3 ],
            [ 9, 7, 2 ],
            [ 9, 8, 1 ],
            [ 10, 1, 7 ],
            [ 10, 2, 6 ],
            [ 10, 3, 5 ],
            [ 10, 4, 4 ],
            [ 10, 5, 3 ],
            [ 10, 6, 2 ],
            [ 10, 7, 1 ] ],
    '19,false':
        [ [ 1, 8, 10 ],
            [ 1, 9, 9 ],
            [ 1, 10, 8 ],
            [ 2, 7, 10 ],
            [ 2, 8, 9 ],
            [ 2, 9, 8 ],
            [ 2, 10, 7 ],
            [ 3, 6, 10 ],
            [ 3, 7, 9 ],
            [ 3, 8, 8 ],
            [ 3, 9, 7 ],
            [ 3, 10, 6 ],
            [ 4, 5, 10 ],
            [ 4, 6, 9 ],
            [ 4, 7, 8 ],
            [ 4, 8, 7 ],
            [ 4, 9, 6 ],
            [ 4, 10, 5 ],
            [ 5, 4, 10 ],
            [ 5, 5, 9 ],
            [ 5, 6, 8 ],
            [ 5, 7, 7 ],
            [ 5, 8, 6 ],
            [ 5, 9, 5 ],
            [ 5, 10, 4 ],
            [ 6, 3, 10 ],
            [ 6, 4, 9 ],
            [ 6, 5, 8 ],
            [ 6, 6, 7 ],
            [ 6, 7, 6 ],
            [ 6, 8, 5 ],
            [ 6, 9, 4 ],
            [ 6, 10, 3 ],
            [ 7, 2, 10 ],
            [ 7, 3, 9 ],
            [ 7, 4, 8 ],
            [ 7, 5, 7 ],
            [ 7, 6, 6 ],
            [ 7, 7, 5 ],
            [ 7, 8, 4 ],
            [ 7, 9, 3 ],
            [ 7, 10, 2 ],
            [ 8, 1, 10 ],
            [ 8, 2, 9 ],
            [ 8, 3, 8 ],
            [ 8, 4, 7 ],
            [ 8, 5, 6 ],
            [ 8, 6, 5 ],
            [ 8, 7, 4 ],
            [ 8, 8, 3 ],
            [ 8, 9, 2 ],
            [ 8, 10, 1 ],
            [ 9, 1, 9 ],
            [ 9, 2, 8 ],
            [ 9, 3, 7 ],
            [ 9, 4, 6 ],
            [ 9, 5, 5 ],
            [ 9, 6, 4 ],
            [ 9, 7, 3 ],
            [ 9, 8, 2 ],
            [ 9, 9, 1 ],
            [ 10, 1, 8 ],
            [ 10, 2, 7 ],
            [ 10, 3, 6 ],
            [ 10, 4, 5 ],
            [ 10, 5, 4 ],
            [ 10, 6, 3 ],
            [ 10, 7, 2 ],
            [ 10, 8, 1 ] ],
    '20,false':
        [ [ 1, 9, 10 ],
            [ 1, 10, 9 ],
            [ 2, 8, 10 ],
            [ 2, 9, 9 ],
            [ 2, 10, 8 ],
            [ 3, 7, 10 ],
            [ 3, 8, 9 ],
            [ 3, 9, 8 ],
            [ 3, 10, 7 ],
            [ 4, 6, 10 ],
            [ 4, 7, 9 ],
            [ 4, 8, 8 ],
            [ 4, 9, 7 ],
            [ 4, 10, 6 ],
            [ 5, 5, 10 ],
            [ 5, 6, 9 ],
            [ 5, 7, 8 ],
            [ 5, 8, 7 ],
            [ 5, 9, 6 ],
            [ 5, 10, 5 ],
            [ 6, 4, 10 ],
            [ 6, 5, 9 ],
            [ 6, 6, 8 ],
            [ 6, 7, 7 ],
            [ 6, 8, 6 ],
            [ 6, 9, 5 ],
            [ 6, 10, 4 ],
            [ 7, 3, 10 ],
            [ 7, 4, 9 ],
            [ 7, 5, 8 ],
            [ 7, 6, 7 ],
            [ 7, 7, 6 ],
            [ 7, 8, 5 ],
            [ 7, 9, 4 ],
            [ 7, 10, 3 ],
            [ 8, 2, 10 ],
            [ 8, 3, 9 ],
            [ 8, 4, 8 ],
            [ 8, 5, 7 ],
            [ 8, 6, 6 ],
            [ 8, 7, 5 ],
            [ 8, 8, 4 ],
            [ 8, 9, 3 ],
            [ 8, 10, 2 ],
            [ 9, 1, 10 ],
            [ 9, 2, 9 ],
            [ 9, 3, 8 ],
            [ 9, 4, 7 ],
            [ 9, 5, 6 ],
            [ 9, 6, 5 ],
            [ 9, 7, 4 ],
            [ 9, 8, 3 ],
            [ 9, 9, 2 ],
            [ 9, 10, 1 ],
            [ 10, 1, 9 ],
            [ 10, 2, 8 ],
            [ 10, 3, 7 ],
            [ 10, 4, 6 ],
            [ 10, 5, 5 ],
            [ 10, 6, 4 ],
            [ 10, 7, 3 ],
            [ 10, 8, 2 ],
            [ 10, 9, 1 ] ],
    '21,false':
        [ [ 1, 10, 10 ],
            [ 2, 9, 10 ],
            [ 2, 10, 9 ],
            [ 3, 8, 10 ],
            [ 3, 9, 9 ],
            [ 3, 10, 8 ],
            [ 4, 7, 10 ],
            [ 4, 8, 9 ],
            [ 4, 9, 8 ],
            [ 4, 10, 7 ],
            [ 5, 6, 10 ],
            [ 5, 7, 9 ],
            [ 5, 8, 8 ],
            [ 5, 9, 7 ],
            [ 5, 10, 6 ],
            [ 6, 5, 10 ],
            [ 6, 6, 9 ],
            [ 6, 7, 8 ],
            [ 6, 8, 7 ],
            [ 6, 9, 6 ],
            [ 6, 10, 5 ],
            [ 7, 4, 10 ],
            [ 7, 5, 9 ],
            [ 7, 6, 8 ],
            [ 7, 7, 7 ],
            [ 7, 8, 6 ],
            [ 7, 9, 5 ],
            [ 7, 10, 4 ],
            [ 8, 3, 10 ],
            [ 8, 4, 9 ],
            [ 8, 5, 8 ],
            [ 8, 6, 7 ],
            [ 8, 7, 6 ],
            [ 8, 8, 5 ],
            [ 8, 9, 4 ],
            [ 8, 10, 3 ],
            [ 9, 2, 10 ],
            [ 9, 3, 9 ],
            [ 9, 4, 8 ],
            [ 9, 5, 7 ],
            [ 9, 6, 6 ],
            [ 9, 7, 5 ],
            [ 9, 8, 4 ],
            [ 9, 9, 3 ],
            [ 9, 10, 2 ],
            [ 10, 1, 10 ],
            [ 10, 2, 9 ],
            [ 10, 3, 8 ],
            [ 10, 4, 7 ],
            [ 10, 5, 6 ],
            [ 10, 6, 5 ],
            [ 10, 7, 4 ],
            [ 10, 8, 3 ],
            [ 10, 9, 2 ],
            [ 10, 10, 1 ] ],
    '6,false': [ [ 2, 2, 2 ] ],
    '7,false': [ [ 2, 2, 3 ], [ 2, 3, 2 ], [ 3, 2, 2 ] ],
    '8,false':
        [ [ 2, 2, 4 ],
            [ 2, 3, 3 ],
            [ 2, 4, 2 ],
            [ 3, 2, 3 ],
            [ 3, 3, 2 ],
            [ 4, 2, 2 ] ],
    '9,false':
        [ [ 2, 2, 5 ],
            [ 2, 3, 4 ],
            [ 2, 4, 3 ],
            [ 2, 5, 2 ],
            [ 3, 2, 4 ],
            [ 3, 3, 3 ],
            [ 3, 4, 2 ],
            [ 4, 2, 3 ],
            [ 4, 3, 2 ],
            [ 5, 2, 2 ] ],
    '10,false':
        [ [ 2, 2, 6 ],
            [ 2, 3, 5 ],
            [ 2, 4, 4 ],
            [ 2, 5, 3 ],
            [ 2, 6, 2 ],
            [ 3, 2, 5 ],
            [ 3, 3, 4 ],
            [ 3, 4, 3 ],
            [ 3, 5, 2 ],
            [ 4, 2, 4 ],
            [ 4, 3, 3 ],
            [ 4, 4, 2 ],
            [ 5, 2, 3 ],
            [ 5, 3, 2 ],
            [ 6, 2, 2 ] ],
    '11,false':
        [ [ 2, 2, 7 ],
            [ 2, 3, 6 ],
            [ 2, 4, 5 ],
            [ 2, 5, 4 ],
            [ 2, 6, 3 ],
            [ 2, 7, 2 ],
            [ 3, 2, 6 ],
            [ 3, 3, 5 ],
            [ 3, 4, 4 ],
            [ 3, 5, 3 ],
            [ 3, 6, 2 ],
            [ 4, 2, 5 ],
            [ 4, 3, 4 ],
            [ 4, 4, 3 ],
            [ 4, 5, 2 ],
            [ 5, 2, 4 ],
            [ 5, 3, 3 ],
            [ 5, 4, 2 ],
            [ 6, 2, 3 ],
            [ 6, 3, 2 ],
            [ 7, 2, 2 ] ] }
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
let twoCardsCombineH1=makeTwoCardsCombine(combineH)
let twoCardsCombineH=_.filter(twoCardsCombineH1,function(o){
    return o[0][0]<=o[0][1]
})
let twoCardsCombineSplit=makeTwoCardsCombine(combineSplit)
let twoCardsCombineS1=makeTwoCardsCombine(combineS)
let twoCardsCombineS=_.filter(twoCardsCombineS1,function(o){
    return o[0][0]<=o[0][1]
})
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

let oneDeckS17HardTrusy=[


    [ 8, 5, false ],
    [ 8, 6, false ],


    [ 9, 2, false ],
    [ 9, 3, false ],
    [ 9, 4, false ],
    [ 9, 5, false ],
    [ 9, 6, false ],


    [ 10, 2, false ],
    [ 10, 3, false ],
    [ 10, 4, false ],
    [ 10, 5, false ],
    [ 10, 6, false ],
    [ 10, 7, false ],
    [ 10, 8, false ],
    [ 10, 9, false ],

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

]
let oneDeckS17HardTwoCardsTrusy=makeTwoCardsCombine(oneDeckS17HardTrusy)

let oneDeckS17HardFalsy=_.differenceWith(twoCardsCombineH,oneDeckS17HardTwoCardsTrusy,_.isEqual)

function OneDeckS17Hard(playerPoint,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:1,
        charlie:false,

    })
    const handValue=Points(playerPoint)
    const handCount=1
    return [playerPoint,dealerCard,handValue,handCount,options]
}

// describe('One Deck S17 Hard hands',function(){
//     describe('double',function(){
//         oneDeckS17HardTwoCardsTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...OneDeckS17Hard(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         oneDeckS17HardFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...OneDeckS17Hard(...value))).to.not.be.ok
//             })
//         })
//     })
// })

let oneDeckS17SoftTrusy=[

    [ 13, 4, true ],
    [ 13, 5, true ],
    [ 13, 6, true ],


    [ 14, 4, true ],
    [ 14, 5, true ],
    [ 14, 6, true ],


    [ 15, 4, true ],
    [ 15, 5, true ],
    [ 15, 6, true ],

    [ 16, 4, true ],
    [ 16, 5, true ],
    [ 16, 6, true ],


    [ 17, 2, true ],
    [ 17, 3, true ],
    [ 17, 4, true ],
    [ 17, 5, true ],
    [ 17, 6, true ],


    [ 18, 3, true ],
    [ 18, 4, true ],
    [ 18, 5, true ],
    [ 18, 6, true ],


    [ 19, 6, true ],

]
let oneDeckS17SoftTwoCardsTrusy=makeTwoCardsCombine(oneDeckS17SoftTrusy)
let oneDeckS17SoftFalsy=_.differenceWith(twoCardsCombineS,oneDeckS17SoftTwoCardsTrusy,_.isEqual)

function OneDeckS17Soft(playerPoint,dealerCard){
    const options=GameOptions({
        hitSoft17:false,
        numberOfDecks:1,
        charlie:false,

    })
    const handValue=Points(playerPoint)
    const handCount=1
    return [playerPoint,dealerCard,handValue,handCount,options]
}

console.log(Double(...OneDeckS17Soft([1,2],4)))

// describe('One Deck S17 Soft hands',function(){
//     describe('double',function(){
//         oneDeckS17SoftTwoCardsTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...OneDeckS17Soft(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         oneDeckS17SoftFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...OneDeckS17Soft(...value))).to.not.be.ok
//             })
//         })
//     })
// })

let oneDeckSplitsNoDASTrusy=[
    [[4,4],5],
    [[4,4],6],
    [ [ 5, 5 ], 2 ],
    [ [ 5, 5 ], 3 ],
    [ [ 5, 5 ], 4 ],
    [ [ 5, 5 ], 5 ],
    [ [ 5, 5 ], 6 ],
    [ [ 5, 5 ], 7 ],
    [ [ 5, 5 ], 8 ],
    [ [ 5, 5 ], 9 ],
]

let oneDeckSplitsNoDASFalsy=_.differenceWith(combineSplit,oneDeckSplitsNoDASTrusy,_.isEqual)

function OneDeckSplitsNoDAS(playerCards,dealerCard){
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

// describe('One Deck S17 Split hands No DAS',function(){
//     describe('double',function(){
//         oneDeckSplitsNoDASTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...OneDeckSplitsNoDAS(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         oneDeckSplitsNoDASFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...OneDeckSplitsNoDAS(...value))).to.not.be.ok
//             })
//         })
//     })
// })

//
let oneDeckH17HardTrusy=oneDeckS17HardTwoCardsTrusy
let oneDeckH17HardFalsy=oneDeckS17HardFalsy
function OneDeckH17Hard(playerPoint,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:1,
        charlie:false,

    })
    const handValue=Points(playerPoint)
    const handCount=1
    return [playerPoint,dealerCard,handValue,handCount,options]
}

// describe('One Deck H17 Hard hands',function(){
//     describe('double',function(){
//         oneDeckH17HardTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...OneDeckH17Hard(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         oneDeckH17HardFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...OneDeckH17Hard(...value))).to.not.be.ok
//             })
//         })
//     })
// })

let oneDeckH17SoftTrusy=[
    [ 13, 4, true ],
    [ 13, 5, true ],
    [ 13, 6, true ],


    [ 14, 4, true ],
    [ 14, 5, true ],
    [ 14, 6, true ],


    [ 15, 4, true ],
    [ 15, 5, true ],
    [ 15, 6, true ],

    [ 16, 4, true ],
    [ 16, 5, true ],
    [ 16, 6, true ],


    [ 17, 2, true ],
    [ 17, 3, true ],
    [ 17, 4, true ],
    [ 17, 5, true ],
    [ 17, 6, true ],


    [ 18, 3, true ],
    [ 18, 4, true ],
    [ 18, 5, true ],
    [ 18, 6, true ],


    [ 19, 6, true ],
]
let oneDeckH17SoftTwoCardsTrusy=makeTwoCardsCombine(oneDeckH17SoftTrusy)
let oneDeckH17SoftFalsy=_.differenceWith(twoCardsCombineS,oneDeckH17SoftTwoCardsTrusy,_.isEqual)
function OneDeckS17Soft(playerPoint,dealerCard){
    const options=GameOptions({
        hitSoft17:true,
        numberOfDecks:1,
        charlie:false,

    })
    const handValue=Points(playerPoint)
    const handCount=1
    return [playerPoint,dealerCard,handValue,handCount,options]
}

// describe('One Deck H17 Soft hands',function(){
//     describe('double',function(){
//         oneDeckH17SoftTwoCardsTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...OneDeckS17Soft(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         oneDeckH17SoftFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...OneDeckS17Soft(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
let oneDeckH17SplitsNoDASTrusy=oneDeckSplitsNoDASTrusy
let oneDeckH17SplitsNoDASFalsy=oneDeckSplitsNoDASFalsy
function OneDeckH17SplitsNoDAS(playerCards,dealerCard){
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

describe('One Deck H17 Split hands No DAS',function(){
    describe('double',function(){
        oneDeckH17SplitsNoDASTrusy.forEach(function(value){

            it(`${value} should return true`,function(){
                expect(Double(...OneDeckH17SplitsNoDAS(...value))).to.be.ok
            })
        })
    })
    describe('Not double',function(){
        oneDeckH17SplitsNoDASFalsy.forEach(function(value){
            it(`${value} should return false`,function(){
                expect(Double(...OneDeckH17SplitsNoDAS(...value))).to.not.be.ok
            })
        })
    })
})
//
//
// //DOUBLE DECKS
// let twoDecksS17HardTrusy=[
//
//
//     [ 9, 2, false ],
//     [ 9, 3, false ],
//     [ 9, 4, false ],
//     [ 9, 5, false ],
//     [ 9, 6, false ],
//
//
//     [ 10, 2, false ],
//     [ 10, 3, false ],
//     [ 10, 4, false ],
//     [ 10, 5, false ],
//     [ 10, 6, false ],
//     [ 10, 7, false ],
//     [ 10, 8, false ],
//     [ 10, 9, false ],
//
//     [ 11, 1, false ],
//     [ 11, 2, false ],
//     [ 11, 3, false ],
//     [ 11, 4, false ],
//     [ 11, 5, false ],
//     [ 11, 6, false ],
//     [ 11, 7, false ],
//     [ 11, 8, false ],
//     [ 11, 9, false ],
//     [ 11, 10, false ],
// ]
// let twoDecksS17HardFalsy=_.differenceWith(combineH,twoDecksS17HardTrusy,_.isEqual)
// function TwoDecksS17Hard(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:false,
//         numberOfDecks:2,
//         charlie:false,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
//
// describe('Two Decks S17 Hard hands',function(){
//     describe('double',function(){
//         twoDecksS17HardTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...TwoDecksS17Hard(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         twoDecksS17HardFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...TwoDecksS17Hard(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
// let twoDecksS17SoftTrusy=[
//
//     [ 13, 5, true ],
//     [ 13, 6, true ],
//
//
//
//     [ 14, 5, true ],
//     [ 14, 6, true ],
//
//
//     [ 15, 4, true ],
//     [ 15, 5, true ],
//     [ 15, 6, true ],
//
//     [ 16, 4, true ],
//     [ 16, 5, true ],
//     [ 16, 6, true ],
//
//
//
//     [ 17, 3, true ],
//     [ 17, 4, true ],
//     [ 17, 5, true ],
//     [ 17, 6, true ],
//
//
//     [ 18, 3, true ],
//     [ 18, 4, true ],
//     [ 18, 5, true ],
//     [ 18, 6, true ],
//
// ]
// let twoDecksS17SoftFalsy=_.differenceWith(combineS,twoDecksS17SoftTrusy,_.isEqual)
// function TwoDecksS17Soft(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:false,
//         numberOfDecks:2,
//         charlie:false,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
//
// describe('Two Decks S17 Soft hands',function(){
//     describe('double',function(){
//         twoDecksS17SoftTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...TwoDecksS17Soft(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         twoDecksS17SoftFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...TwoDecksS17Soft(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
// let twoDecksH17HardTrusy=[
//     [ 9, 2, false ],
//     [ 9, 3, false ],
//     [ 9, 4, false ],
//     [ 9, 5, false ],
//     [ 9, 6, false ],
//
//
//     [ 10, 2, false ],
//     [ 10, 3, false ],
//     [ 10, 4, false ],
//     [ 10, 5, false ],
//     [ 10, 6, false ],
//     [ 10, 7, false ],
//     [ 10, 8, false ],
//     [ 10, 9, false ],
//
//     [ 11, 1, false ],
//     [ 11, 2, false ],
//     [ 11, 3, false ],
//     [ 11, 4, false ],
//     [ 11, 5, false ],
//     [ 11, 6, false ],
//     [ 11, 7, false ],
//     [ 11, 8, false ],
//     [ 11, 9, false ],
//     [ 11, 10, false ],
// ]
// let twoDecksH17HardFalsy=_.differenceWith(combineH,twoDecksH17HardTrusy,_.isEqual)
// function TwoDecksH17Hard(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:true,
//         numberOfDecks:2,
//         charlie:false,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
//
// describe('Two Decks H17 Hard hands',function(){
//     describe('double',function(){
//         twoDecksH17HardTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...TwoDecksH17Hard(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         twoDecksH17HardFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...TwoDecksH17Hard(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
// let twoDecksH17SoftTrusy=[
//
//     [ 13, 5, true ],
//     [ 13, 6, true ],
//
//
//     [ 14, 4, true ],
//     [ 14, 5, true ],
//     [ 14, 6, true ],
//
//
//     [ 15, 4, true ],
//     [ 15, 5, true ],
//     [ 15, 6, true ],
//
//     [ 16, 4, true ],
//     [ 16, 5, true ],
//     [ 16, 6, true ],
//
//
//
//     [ 17, 3, true ],
//     [ 17, 4, true ],
//     [ 17, 5, true ],
//     [ 17, 6, true ],
//
//
//     [ 18, 2, true ],
//     [ 18, 3, true ],
//     [ 18, 4, true ],
//     [ 18, 5, true ],
//     [ 18, 6, true ],
//
//
//     [ 19, 6, true ],
//
// ]
// let twoDecksH17SoftFalsy=_.differenceWith(combineS,twoDecksH17SoftTrusy,_.isEqual)
// function TwoDecksH17Soft(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:true,
//         numberOfDecks:2,
//         charlie:false,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
// describe('Two Decks H17 Soft hands',function(){
//     describe('double',function(){
//         twoDecksH17SoftTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...TwoDecksH17Soft(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         twoDecksH17SoftFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...TwoDecksH17Soft(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
// //4 decks
// let fourDecksS17HardTrusy=[
//
//     [ 9, 3, false ],
//     [ 9, 4, false ],
//     [ 9, 5, false ],
//     [ 9, 6, false ],
//
//
//     [ 10, 2, false ],
//     [ 10, 3, false ],
//     [ 10, 4, false ],
//     [ 10, 5, false ],
//     [ 10, 6, false ],
//     [ 10, 7, false ],
//     [ 10, 8, false ],
//     [ 10, 9, false ],
//
//
//     [ 11, 2, false ],
//     [ 11, 3, false ],
//     [ 11, 4, false ],
//     [ 11, 5, false ],
//     [ 11, 6, false ],
//     [ 11, 7, false ],
//     [ 11, 8, false ],
//     [ 11, 9, false ],
//     [ 11, 10, false ],
// ]
// let fourDecksS17HardFalsy=_.differenceWith(combineH,fourDecksS17HardTrusy,_.isEqual)
// function FourDecksS17Hard(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:false,
//         numberOfDecks:4,
//         charlie:false,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
// describe('Four Decks S17 Hard hands',function(){
//     describe('double',function(){
//         fourDecksS17HardTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...FourDecksS17Hard(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         fourDecksS17HardFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...FourDecksS17Hard(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
// let fourDecksS17SoftTrusy=[
//
//     [ 13, 5, true ],
//     [ 13, 6, true ],
//
//
//
//     [ 14, 5, true ],
//     [ 14, 6, true ],
//
//
//     [ 15, 4, true ],
//     [ 15, 5, true ],
//     [ 15, 6, true ],
//
//     [ 16, 4, true ],
//     [ 16, 5, true ],
//     [ 16, 6, true ],
//
//
//
//     [ 17, 3, true ],
//     [ 17, 4, true ],
//     [ 17, 5, true ],
//     [ 17, 6, true ],
//
//
//     [ 18, 3, true ],
//     [ 18, 4, true ],
//     [ 18, 5, true ],
//     [ 18, 6, true ],
//
// ]
// let fourDecksS17SoftFalsy=_.differenceWith(combineS,fourDecksS17SoftTrusy,_.isEqual)
// function FourDecksS17Soft(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:false,
//         numberOfDecks:4,
//         charlie:false,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
//
// describe('Four Decks S17 Soft hands',function(){
//     describe('double',function(){
//         fourDecksS17SoftTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...FourDecksS17Soft(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         fourDecksS17SoftFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...FourDecksS17Soft(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
// let fourDecksH17HardTrusy=[
//
//     [ 9, 3, false ],
//     [ 9, 4, false ],
//     [ 9, 5, false ],
//     [ 9, 6, false ],
//
//
//     [ 10, 2, false ],
//     [ 10, 3, false ],
//     [ 10, 4, false ],
//     [ 10, 5, false ],
//     [ 10, 6, false ],
//     [ 10, 7, false ],
//     [ 10, 8, false ],
//     [ 10, 9, false ],
//
//     [ 11, 1, false ],
//     [ 11, 2, false ],
//     [ 11, 3, false ],
//     [ 11, 4, false ],
//     [ 11, 5, false ],
//     [ 11, 6, false ],
//     [ 11, 7, false ],
//     [ 11, 8, false ],
//     [ 11, 9, false ],
//     [ 11, 10, false ],
// ]
// let fourDecksH17HardFalsy=_.differenceWith(combineH,fourDecksH17HardTrusy,_.isEqual)
// function FourDecksH17Hard(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:true,
//         numberOfDecks:4,
//         charlie:false,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
//
// describe('Four Decks H17 Hard hands',function(){
//     describe('double',function(){
//         fourDecksH17HardTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...FourDecksH17Hard(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         fourDecksH17HardFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...FourDecksH17Hard(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
// let fourDecksH17SoftTrusy=[
//
//     [ 13, 5, true ],
//     [ 13, 6, true ],
//
//     [ 14, 5, true ],
//     [ 14, 6, true ],
//
//
//     [ 15, 4, true ],
//     [ 15, 5, true ],
//     [ 15, 6, true ],
//
//     [ 16, 4, true ],
//     [ 16, 5, true ],
//     [ 16, 6, true ],
//
//
//
//     [ 17, 3, true ],
//     [ 17, 4, true ],
//     [ 17, 5, true ],
//     [ 17, 6, true ],
//
//
//     [ 18, 2, true ],
//     [ 18, 3, true ],
//     [ 18, 4, true ],
//     [ 18, 5, true ],
//     [ 18, 6, true ],
//
//
//     [ 19, 6, true ],
//
// ]
// let fourDecksH17SoftFalsy=_.differenceWith(combineS,fourDecksH17SoftTrusy,_.isEqual)
// function FourDecksH17Soft(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:true,
//         numberOfDecks:4,
//         charlie:false,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
// describe('Four Decks H17 Soft hands',function(){
//     describe('double',function(){
//         fourDecksH17SoftTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...FourDecksH17Soft(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         fourDecksH17SoftFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...FourDecksH17Soft(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
// //charlie
// let fourDecksS17HardCharlieTrusy=[
//
//     [ 9, 3, false ],
//     [ 9, 4, false ],
//     [ 9, 5, false ],
//     [ 9, 6, false ],
//
//
//     [ 10, 2, false ],
//     [ 10, 3, false ],
//     [ 10, 4, false ],
//     [ 10, 5, false ],
//     [ 10, 6, false ],
//     [ 10, 7, false ],
//     [ 10, 8, false ],
//     [ 10, 9, false ],
//
//
//     [ 11, 2, false ],
//     [ 11, 3, false ],
//     [ 11, 4, false ],
//     [ 11, 5, false ],
//     [ 11, 6, false ],
//     [ 11, 7, false ],
//     [ 11, 8, false ],
//     [ 11, 9, false ],
//     [ 11, 10, false ],
// ]
// let fourDecksS17HardCharlieFalsy=_.differenceWith(combineH,fourDecksS17HardCharlieTrusy,_.isEqual)
// function FourDecksS17HardCharlie(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:false,
//         numberOfDecks:4,
//         charlie:5,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
// describe('Four Decks S17 Hard hands Charlie',function(){
//     describe('double',function(){
//         fourDecksS17HardCharlieTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...FourDecksS17HardCharlie(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         fourDecksS17HardCharlieFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...FourDecksS17HardCharlie(...value))).to.not.be.ok
//             })
//         })
//     })
// })
//
// let fourDecksS17SoftCharlieTrusy=[
//
//     [ 15, 6, true ],
//
//
//     [ 16, 5, true ],
//     [ 16, 6, true ],
//
//     [ 17, 3, true ],
//     [ 17, 4, true ],
//     [ 17, 5, true ],
//     [ 17, 6, true ],
//
//
//     [ 18, 3, true ],
//     [ 18, 4, true ],
//     [ 18, 5, true ],
//     [ 18, 6, true ],
//
// ]
// let fourDecksS17SoftCharlieFalsy=_.differenceWith(combineS,fourDecksS17SoftTrusy,_.isEqual)
// function FourDecksS17SoftCharlie(playerPoint,dealerCard,soft){
//     const options=GameOptions({
//         hitSoft17:false,
//         numberOfDecks:4,
//         charlie:false,
//
//     })
//     const handValue=playerPoint
//     const handCount=1
//     return [[null,null],dealerCard,{total:playerPoint,soft:soft},handCount,options]
// }
//
// describe('Four Decks S17 Soft hands Charlie',function(){
//     describe('double',function(){
//         fourDecksS17SoftCharlieTrusy.forEach(function(value){
//
//             it(`${value} should return true`,function(){
//                 expect(Double(...FourDecksS17SoftCharlie(...value))).to.be.ok
//             })
//         })
//     })
//     describe('Not double',function(){
//         fourDecksS17SoftCharlieFalsy.forEach(function(value){
//             it(`${value} should return false`,function(){
//                 expect(Double(...FourDecksS17SoftCharlie(...value))).to.not.be.ok
//             })
//         })
//     })
// })
