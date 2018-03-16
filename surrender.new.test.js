const Surrender=require('./Surrender')
const _=require('lodash')
const expect=require('chai').expect
const Points=require('./Points')
const GameOptions=require('./GameOptions')


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
let splits={
    '12,true': [ [ 1, 1 ] ],
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

let twoCardsCombineH=_.filter(makeTwoCardsCombine(combineH),function(o){
    return o[0][0]<=o[0][1]
})
let twoCardsCombineSplit=combineSplit
let twoCardsCombineS=_.filter(makeTwoCardsCombine(combineS),function(o){
    return o[0][0]<=o[0][1]
})

const twoCardsCombineAll=[...twoCardsCombineH,...twoCardsCombineS,...twoCardsCombineSplit]


{
    let oneDeckH17LateTruty=[
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

    let oneDeckH17LateFalsy=_.differenceWith(twoCardsCombineAll,oneDeckH17LateTruty,_.isEqual)
    function oneDeckH17LateSurrender(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'late',
            numberOfDecks:1,

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('One Deck H17 Late Surrender',function(){
        describe('surrender',function(){
            oneDeckH17LateTruty.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckH17LateSurrender(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckH17LateFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckH17LateSurrender(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckH17LateSurrender(...value))).to.not.be.ok
                })
            })
        })

    })
}

{
    let oneDeckS17LateTruty=[

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
    let oneDeckS17LateFalsy=_.differenceWith(twoCardsCombineAll,oneDeckS17LateTruty,_.isEqual)
    function oneDeckS17LateSurrender(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'late',
            numberOfDecks:1,

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('One Deck S17 Late Surrender',function(){
        describe('surrender',function(){
            oneDeckS17LateTruty.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckS17LateSurrender(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckS17LateFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17LateSurrender(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17LateSurrender(...value))).to.not.be.ok
                })
            })
        })

    })
}

{
    let twoDecksH17NoDASTrusy=[


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
    let twoDecksH17NoDASFalsy=_.differenceWith(twoCardsCombineAll,twoDecksH17NoDASTrusy,_.isEqual)
    let twoDecksH17DASTrusy=[


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
    let twoDecksH17DASFalsy=_.differenceWith(twoCardsCombineAll,twoDecksH17DASTrusy,_.isEqual)

    function twoDeckH17LateSurrenderNoDAS(playerCards,dealerCard){
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
    function twoDeckH17LateSurrenderDAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'late',
            numberOfDecks:2,
            doubleAfterSplit:true

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('Two Decks H17 No DAS Late Surrender',function(){
        describe('surrender',function(){
            twoDecksH17NoDASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...twoDeckH17LateSurrenderNoDAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            twoDecksH17NoDASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckH17LateSurrenderNoDAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckH17LateSurrenderNoDAS(...value))).to.not.be.ok
                })
            })
        })

    })

    describe('Two Decks H17 DAS Late Surrender',function(){
        describe('surrender',function(){
            twoDecksH17DASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...twoDeckH17LateSurrenderNoDAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            twoDecksH17DASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckH17LateSurrenderNoDAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckH17LateSurrenderNoDAS(...value))).to.not.be.ok
                })
            })
        })

    })
}

{
    let twoDecksS17LateTrusy=[

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
    let twoDecksS17LateFalsy=_.differenceWith(twoCardsCombineAll,twoDecksS17LateTrusy,_.isEqual)
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
    describe('Two Decks S17 Late Surrender',function(){
        describe('surrender',function(){
            twoDecksS17LateTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...twoDeckLateS17LateSurrender(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            twoDecksS17LateFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckLateS17LateSurrender(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckLateS17LateSurrender(...value))).to.not.be.ok
                })
            })
        })

    })

}

{
    let fourDecksH17LateTrusy=[

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


    ]
    let fourDecksH17LateFalsy=_.differenceWith(twoCardsCombineAll,fourDecksH17LateTrusy,_.isEqual)
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

    describe('Four to Six Decks H17 Late Surrender',function(){
        describe('surrender',function(){
            fourDecksH17LateTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...fourToSixDecksH17LateSurrender(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            fourDecksH17LateFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...fourToSixDecksH17LateSurrender(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...fourToSixDecksH17LateSurrender(...value))).to.not.be.ok
                })
            })
        })

    })
}

{
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
    let fourDecksS17Falsy=_.differenceWith(twoCardsCombineAll,fourDecksS17Trusy,_.isEqual)
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

    describe('Four to Six Decks H17 Late Surrender',function(){
        describe('surrender',function(){
            fourDecksS17Trusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...fourToSixDecksS17LateSurrender(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            fourDecksS17Falsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...fourToSixDecksS17LateSurrender(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...fourToSixDecksS17LateSurrender(...value))).to.not.be.ok
                })
            })
        })

    })


}

{
    let eightDecksH17LateTrusy=[

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
    let eightDecksH17LateFalsy=_.differenceWith(twoCardsCombineAll,eightDecksH17LateTrusy,_.isEqual)
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
    describe('Eight Decks H17 Late Surrender',function(){
        describe('surrender',function(){
            eightDecksH17LateTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...eightDecksH17LateSurrender(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            eightDecksH17LateFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...eightDecksH17LateSurrender(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...eightDecksH17LateSurrender(...value))).to.not.be.ok
                })
            })
        })

    })
}

{
    let eightDecksS17LateTrusy=[

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
    let eightDecksS17LateFalsy=_.differenceWith(twoCardsCombineAll,eightDecksS17LateTrusy,_.isEqual)
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

    describe('Eight Decks S17 Late Surrender',function(){
        describe('surrender',function(){
            eightDecksS17LateTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...eightDecksS17LateSurrender(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            eightDecksS17LateFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...eightDecksS17LateSurrender(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...eightDecksS17LateSurrender(...value))).to.not.be.ok
                })
            })
        })

    })


}

const earlyCombine10=[
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


{
    let oneDeckS17LateTruty=[

        //p14 d10
        [[7,7],10],

        //p15 d10
        [[5,10],10],
        [[6,9],10],

        //p16,d10
        [[6,10],10],
        [[7,9],10],
        // [[8,8],10],

        //p16 dA


    ]
    const oneDeckS17Early10DASTrusy=[
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
        ...oneDeckS17LateTruty

    ]
    const oneDeckS17Early10NoDASTrusy=[
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
        [[8,8],10],
        ...oneDeckS17LateTruty

    ]
    const oneDeckS17Early10NoDASFalsy=_.differenceWith(twoCardsCombineH,oneDeckS17Early10NoDASTrusy,_.isEqual)
    const oneDeckS17Early10DASFalsy=_.differenceWith(twoCardsCombineH,oneDeckS17Early10DASTrusy,_.isEqual)
    function oneDeckS17Early10DAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'early10',
            numberOfDecks:1,
            doubleAfterSplit:true

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    function oneDeckS17Early10NoDAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'early10',
            numberOfDecks:1,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('One Deck S17 Early 10 DAS',function(){
        describe('surrender',function(){
            oneDeckS17Early10DASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckS17Early10DAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckS17Early10DASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17Early10DAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17Early10DAS(...value))).to.not.be.ok
                })
            })
        })

    })
    describe('One Deck S17 Early 10 No DAS',function(){
        describe('surrender',function(){
            oneDeckS17Early10NoDASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckS17Early10NoDAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckS17Early10NoDASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17Early10NoDAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17Early10NoDAS(...value))).to.not.be.ok
                })
            })
        })

    })
}

{
    let oneDeckH17LateTruty=[
        //p14 d10
        [[7,7],10],

        //p15 d10
        [[5,10],10],
        [[6,9],10],

        //p16,d10
        [[6,10],10],
        [[7,9],10],


        //p14 dA


        //p15 dA


        //p16 dA


        //p17,dA

    ]
    const oneDeckH17Early10DASTrusy=[
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
        ...oneDeckH17LateTruty

    ]
    const oneDeckH17Early10NoDASTrusy=[
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
        [[8,8],10],
        ...oneDeckH17LateTruty

    ]
    const oneDeckH17Early10NoDASFalsy=_.differenceWith(twoCardsCombineH,oneDeckH17Early10NoDASTrusy,_.isEqual)
    const oneDeckH17Early10DASFalsy=_.differenceWith(twoCardsCombineH,oneDeckH17Early10DASTrusy,_.isEqual)
    function oneDeckS17Early10DAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'early10',
            numberOfDecks:1,
            doubleAfterSplit:true

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    function oneDeckS17Early10NoDAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'early10',
            numberOfDecks:1,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('One Deck H17 Early 10 DAS',function(){
        describe('surrender',function(){
            oneDeckH17Early10DASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckS17Early10DAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckH17Early10DASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17Early10DAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17Early10DAS(...value))).to.not.be.ok
                })
            })
        })

    })
    describe('One Deck H17 Early 10 No DAS',function(){
        describe('surrender',function(){
            oneDeckH17Early10NoDASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckS17Early10NoDAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckH17Early10NoDASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17Early10NoDAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17Early10NoDAS(...value))).to.not.be.ok
                })
            })
        })

    })
}

{
    let twoDecksS17LateTrusy=[
        //p15 d10
        [[5,10],10],
        [[6,9],10],

        //p16,d10
        [[6,10],10],
        [[7,9],10],
    ]
    let twoDecksEarly10Trusy=[
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
    const twoDecksS17Early10Trusy=[...twoDecksS17LateTrusy,...twoDecksEarly10Trusy]
    const twoDecksS17Early10Falsy=_.differenceWith(twoCardsCombineAll,twoDecksS17Early10Trusy,_.isEqual)
    function twoDecksS17Early10(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'early10',
            numberOfDecks:2,

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('Two Decks S17 Early 10 DAS',function(){
        describe('surrender',function(){
            twoDecksS17Early10Trusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...twoDecksS17Early10(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            twoDecksS17Early10Falsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDecksS17Early10(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDecksS17Early10(...value))).to.not.be.ok
                })
            })
        })

    })


    const twoDecksH17Early10Trusy=[...twoDecksS17LateTrusy,...twoDecksEarly10Trusy]
    const twoDecksH17Early10Falsy=_.differenceWith(twoCardsCombineAll,twoDecksH17Early10Trusy,_.isEqual)
    function twoDecksH17Early10NoDAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'early10',
            numberOfDecks:2,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('Two Decks H17 Early 10 No DAS',function(){
        describe('surrender',function(){
            twoDecksH17Early10Trusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...twoDecksH17Early10NoDAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            twoDecksH17Early10Falsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDecksH17Early10NoDAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDecksH17Early10NoDAS(...value))).to.not.be.ok
                })
            })
        })

    })
}

{
    const fourDecksH17LateTrusy=[

    //p16 d9
    [[6,10],9],
    [[7,9],9],




    //p15 d10
    [[5,10],10],
    [[6,9],10],

    //p16,d10
    [[6,10],10],
    [[7,9],10],




    // //p15 dA
    // [[5,10],1],
    // [[6,9],1],
    // [[7,8],1],
    //
    // //p16 dA
    // [[6,10],1],
    // [[7,9],1],
    // [[8,8],1],
    //
    // //p17 dA
    // [[7,10],1],
    // [[8,9],1],


]
    const fourDecksS17LateTrusy=[


        //p16 d9
        [[6,10],9],
        [[7,9],9],



        //p15 d10
        [[5,10],10],
        [[6,9],10],

        //p16,d10
        [[6,10],10],
        [[7,9],10],



        // //p16 dA
        // [[6,10],1],
        // [[7,9],1],


    ]
    const fourDecksH17Early10Trusy=[...earlyCombine10,...fourDecksH17LateTrusy]
    const fourDecksH17Early10Falsy=_.differenceWith(twoCardsCombineAll,fourDecksH17Early10Trusy,_.isEqual)
    const fourDecksS17Early10Trusy=[...earlyCombine10,...fourDecksS17LateTrusy]
    const fourDecksS17Early10Falsy=_.differenceWith(twoCardsCombineAll,fourDecksS17Early10Trusy,_.isEqual)
    function fourDecksH17Early10(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'early10',
            numberOfDecks:4,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('Four Decks H17 Early 10 ',function(){
        describe('surrender',function(){
            fourDecksH17Early10Trusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...fourDecksH17Early10(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            fourDecksH17Early10Falsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...fourDecksH17Early10(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...fourDecksH17Early10(...value))).to.not.be.ok
                })
            })
        })

    })
    function fourDecksS17Early10(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'early10',
            numberOfDecks:4,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('Four Decks S17 Early 10 ',function(){
        describe('surrender',function(){
            fourDecksS17Early10Trusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...fourDecksS17Early10(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            fourDecksS17Early10Falsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...fourDecksS17Early10(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...fourDecksH17Early10(...value))).to.not.be.ok
                })
            })
        })

    })

}

{
    let eightDecksS17LateTrusy=[

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




        // //p16 dA
        // [[6,10],1],
        // [[7,9],1],


    ]
    let eightDecksS17Early10Trusy=[...earlyCombine10,...eightDecksS17LateTrusy]
    let eightDecksS17Early10Falsy=_.differenceWith(twoCardsCombineAll,eightDecksS17Early10Trusy,_.isEqual)

    let eightDecksH17LateTrusy=[

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



        // //p15 dA
        // [[5,10],1],
        // [[6,9],1],
        // [[7,8],1],
        //
        // //p16 dA
        // [[6,10],1],
        // [[7,9],1],
        // [[8,8],1],
        //
        // //p17 dA
        // [[7,10],1],
        // [[8,9],1],
        // [[9,8],1],

    ]
    let eightDecksH17Early10Trusy=[...earlyCombine10,...eightDecksH17LateTrusy]
    let eightDecksH17Early10Falsy=_.differenceWith(twoCardsCombineAll,eightDecksH17Early10Trusy,_.isEqual)

    function eightDecksS17Early10(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'early10',
            numberOfDecks:8,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('Eight Decks S17 Early 10 ',function(){
        describe('surrender',function(){
            eightDecksS17Early10Trusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...eightDecksS17Early10(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            eightDecksS17Early10Falsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...eightDecksS17Early10(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...eightDecksS17Early10(...value))).to.not.be.ok
                })
            })
        })

    })

    function eightDecksH17Early10(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'early10',
            numberOfDecks:8,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }
    describe('Four Decks H17 Early 10 ',function(){
        describe('surrender',function(){
            eightDecksH17LateTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...eightDecksH17Early10(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            eightDecksH17Early10Falsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...eightDecksH17Early10(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...eightDecksH17Early10(...value))).to.not.be.ok
                })
            })
        })

    })




}


//earlyA

const pairTwoDealerA=[[2,2],1]
const earlyCombineA=[
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
//one deck


{
    const oneDeckH17LateTruty=[
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
    const oneDeckH17EarlyA_NoDASTrusy=_.differenceWith([...earlyCombineA,...oneDeckH17LateTruty,pairTwoDealerA],[[[4,10],10],[[5,9],10]],_.isEqual)
    const oneDeckH17EarlyA_NoDASFalsy=_.differenceWith(twoCardsCombineAll,oneDeckH17EarlyA_NoDASTrusy,_.isEqual)
    function oneDeckH17EarlyA_NoDAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'earlyA',
            numberOfDecks:1,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('One Deck H17 No DAS Early A',function(){
        describe('surrender',function(){
            oneDeckH17EarlyA_NoDASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckH17EarlyA_NoDAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckH17EarlyA_NoDASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckH17EarlyA_NoDAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckH17EarlyA_NoDAS(...value))).to.not.be.ok
                })
            })
        })

    })
    const oneDeckH17EarlyADASTrusy=_.differenceWith([...earlyCombineA,...oneDeckH17LateTruty,pairTwoDealerA],[[[4,10],10],[[5,9],10],[[8,8],10]],_.isEqual)
    const oneDeckH17EarlyADASFalsy=_.differenceWith(twoCardsCombineAll,oneDeckH17EarlyADASTrusy,_.isEqual)

    function oneDeckH17EarlyADAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'earlyA',
            numberOfDecks:1,
            doubleAfterSplit:true

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('One Deck H17 DAS Early A',function(){
        describe('surrender',function(){
            oneDeckH17EarlyADASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckH17EarlyADAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckH17EarlyADASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckH17EarlyADAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckH17EarlyADAS(...value))).to.not.be.ok
                })
            })
        })

    })

    const oneDeckS17LateTruty=[

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
    const oneDeckS17EarlyA_NoDASTrusy=_.differenceWith([...earlyCombineA,...oneDeckH17LateTruty],[[[4,10],10],[[5,9],10]],_.isEqual)
    const oneDeckS17EarlyA_NoDASFalsy=_.differenceWith(twoCardsCombineAll,oneDeckS17EarlyA_NoDASTrusy,_.isEqual)
    function oneDeckS17EarlyA_NoDAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'earlyA',
            numberOfDecks:1,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('One Deck H17 No DAS Early A',function(){
        describe('surrender',function(){
            oneDeckS17EarlyA_NoDASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckS17EarlyA_NoDAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckS17EarlyA_NoDASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17EarlyA_NoDAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17EarlyA_NoDAS(...value))).to.not.be.ok
                })
            })
        })

    })


    const oneDeckS17EarlyADASTrusy=_.differenceWith([...earlyCombineA,...oneDeckH17LateTruty],[[[4,10],10],[[5,9],10],[[8,8],10]],_.isEqual)
    const oneDeckS17EarlyADASFalsy=_.differenceWith(twoCardsCombineAll,oneDeckS17EarlyADASTrusy,_.isEqual)
    function oneDeckS17EarlyADAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'earlyA',
            numberOfDecks:1,
            doubleAfterSplit:true

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('One Deck H17 DAS Early A',function(){
        describe('surrender',function(){
            oneDeckS17EarlyADASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...oneDeckS17EarlyADAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            oneDeckS17EarlyADASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17EarlyADAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...oneDeckS17EarlyADAS(...value))).to.not.be.ok
                })
            })
        })

    })

}



//two decks

{
    let twoDecksH17NoDASLateTrusy=[
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

    let twoDecksH17EarlyANoDASTrusy=_.differenceWith([...earlyCombineA,...twoDecksH17NoDASLateTrusy,pairTwoDealerA],[[[4,10],10]],_.isEqual)
    let twoDecksH17EarlyANoDASFalsy=_.differenceWith(twoCardsCombineAll,twoDecksH17EarlyANoDASTrusy,_.isEqual)
    function twoDeckH17EarlyA_NoDAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'earlyA',
            numberOfDecks:2,
            doubleAfterSplit:false

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('Two Deck H17 No DAS Early A',function(){
        describe('surrender',function(){
            twoDecksH17EarlyANoDASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...twoDeckH17EarlyA_NoDAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            twoDecksH17EarlyANoDASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckH17EarlyA_NoDAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckH17EarlyA_NoDAS(...value))).to.not.be.ok
                })
            })
        })

    })


    let twoDecksH17DASLateTrusy=[


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
        // [[8,8],1],

        //p17 dA
        [[7,10],1],
        [[8,9],1],
        [[9,8],1],
    ]
    let twoDecksH17EarlyADASTrusy=_.differenceWith([...earlyCombineA,...twoDecksH17DASLateTrusy,pairTwoDealerA],[[[4,10],10]],_.isEqual)
    let twoDecksH17EarlyADASFalsy=_.differenceWith(twoCardsCombineAll,twoDecksH17EarlyADASTrusy,_.isEqual)
    function twoDeckH17EarlyADAS(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'earlyA',
            numberOfDecks:2,
            doubleAfterSplit:true

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('Two Deck H17 DAS Early A',function(){
        describe('surrender',function(){
            twoDecksH17EarlyADASTrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...twoDeckH17EarlyADAS(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            twoDecksH17EarlyADASFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckH17EarlyADAS(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckH17EarlyADAS(...value))).to.not.be.ok
                })
            })
        })

    })




    let twoDecksS17LateTrusy=[
        //p15 d10
        [[5,10],10],
        [[6,9],10],

        //p16,d10
        [[6,10],10],
        [[7,9],10],
    ]

    const twoDecksS17EarlyATrusy=_.differenceWith([...twoDecksS17LateTrusy,...earlyCombineA],[[[4,10],10],[[2,2],1]],_.isEqual)
    const twoDecksS17EarlyAFalsy=_.differenceWith(twoCardsCombineAll,twoDecksS17EarlyATrusy,_.isEqual)
    function twoDeckS17EarlyA(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'earlyA',
            numberOfDecks:2,

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('Two Deck S17 Early A',function(){
        describe('surrender',function(){
            twoDecksS17EarlyATrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...twoDeckS17EarlyA(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            twoDecksS17EarlyAFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckS17EarlyA(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...twoDeckS17EarlyA(...value))).to.not.be.ok
                })
            })
        })

    })
}

//four decks

{
    const fourDecksH17LateTrusy=[

        //p16 d9
        [[6,10],9],
        [[7,9],9],




        //p15 d10
        [[5,10],10],
        [[6,9],10],

        //p16,d10
        [[6,10],10],
        [[7,9],10],




        // //p15 dA
        // [[5,10],1],
        // [[6,9],1],
        // [[7,8],1],
        //
        // //p16 dA
        // [[6,10],1],
        // [[7,9],1],
        // [[8,8],1],
        //
        // //p17 dA
        // [[7,10],1],
        // [[8,9],1],


    ]
    const fourDecksH17EarlyATrusy=[...fourDecksH17LateTrusy,...earlyCombineA,pairTwoDealerA]
    const fourDecksH17EarlyAFalsy=_.differenceWith(twoCardsCombineAll,fourDecksH17EarlyATrusy,_.isEqual)
    function FourDeckH17EarlyA(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'earlyA',
            numberOfDecks:4,

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('Four Deck S17 Early A',function(){
        describe('surrender',function(){
            fourDecksH17EarlyATrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...FourDeckH17EarlyA(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            fourDecksH17EarlyAFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...FourDeckH17EarlyA(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...FourDeckH17EarlyA(...value))).to.not.be.ok
                })
            })
        })

    })

    const fourDecksS17LateTrusy=[


        //p16 d9
        [[6,10],9],
        [[7,9],9],



        //p15 d10
        [[5,10],10],
        [[6,9],10],

        //p16,d10
        [[6,10],10],
        [[7,9],10],



        // //p16 dA
        // [[6,10],1],
        // [[7,9],1],


    ]
    const fourDecksS17EarlyATrusy=_.differenceWith([...fourDecksH17LateTrusy,...earlyCombineA],pairTwoDealerA,_.isEqual)
    const fourDecksS17EarlyAFalsy=_.differenceWith(twoCardsCombineAll,fourDecksS17EarlyATrusy,_.isEqual)
    function FourDeckS17EarlyA(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'earlyA',
            numberOfDecks:4,

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('Four Deck S17 Early A',function(){
        describe('surrender',function(){
            fourDecksS17EarlyATrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...FourDeckS17EarlyA(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            fourDecksS17EarlyAFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...FourDeckS17EarlyA(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...FourDeckS17EarlyA(...value))).to.not.be.ok
                })
            })
        })

    })
}

//eight decks

{
    
    let eightDecksH17LateTrusy=[

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



        // //p15 dA
        // [[5,10],1],
        // [[6,9],1],
        // [[7,8],1],
        //
        // //p16 dA
        // [[6,10],1],
        // [[7,9],1],
        // [[8,8],1],
        //
        // //p17 dA
        // [[7,10],1],
        // [[8,9],1],
        // [[9,8],1],

    ]
    const eightDecksH17EarlyATrusy=[...eightDecksH17LateTrusy,...earlyCombineA,pairTwoDealerA]
    const eightDecksH17EarlyAFalsy=_.differenceWith(twoCardsCombineAll,eightDecksH17EarlyATrusy,_.isEqual)
    function EightDeckH17EarlyA(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:true,
            surrender:'earlyA',
            numberOfDecks:8,

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('Eight Deck H17 Early A',function(){
        describe('surrender',function(){
            eightDecksH17EarlyATrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...EightDeckH17EarlyA(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            eightDecksH17EarlyAFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...EightDeckH17EarlyA(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...EightDeckH17EarlyA(...value))).to.not.be.ok
                })
            })
        })

    })


    let eightDecksS17LateTrusy=[

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




        // //p16 dA
        // [[6,10],1],
        // [[7,9],1],


    ]
    const eightDecksS17EarlyATrusy=[...eightDecksS17LateTrusy,...earlyCombineA]
    const eightDecksS17EarlyAFalsy=_.differenceWith(twoCardsCombineAll,eightDecksS17EarlyATrusy,_.isEqual)
    function EightDeckS17EarlyA(playerCards,dealerCard){
        const options=GameOptions({
            hitSoft17:false,
            surrender:'earlyA',
            numberOfDecks:8,

        })
        const handValue=Points(playerCards)
        const handCount=1
        return [playerCards,dealerCard,handValue,handCount,options]
    }

    describe('Eight Deck S17 Early A',function(){
        describe('surrender',function(){
            eightDecksS17EarlyATrusy.forEach(function(value){

                it(`${value} should return true`,function(){
                    expect(Surrender(...EightDeckS17EarlyA(...value))).to.be.ok
                })
            })
        })
        describe('Not Surrender',function(){
            eightDecksS17EarlyAFalsy.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...EightDeckS17EarlyA(...value))).to.not.be.ok
                })
            })
        })
        describe('Soft hands Not Surrender',function(){
            twoCardsCombineS.forEach(function(value){
                it(`${value} should return false`,function(){
                    expect(Surrender(...EightDeckS17EarlyA(...value))).to.not.be.ok
                })
            })
        })

    })
}
