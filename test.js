const Surrender=require('./Surrender')
const ActingPlayer=require('./Acting_player')
const BackPlayer=require('./Back_player')
const Suggestion=require('./Suggestions')
const _=require('lodash')

let result=ActingPlayer([2,2],1,1,1,{doubleAfterSplit:true})
console.log(result)


let suggestion=Suggestion([2,2],1,1,true,true,{doubleAfterSplit:true,backBet:true})
console.log(suggestion)