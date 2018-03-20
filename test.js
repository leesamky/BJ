const Surrender=require('./Surrender')
const ActingPlayer=require('./Acting_player')
const BackPlayer=require('./Back_player')
const Suggestion=require('./Suggestions')
const _=require('lodash')

let result=ActingPlayer([4,4],7,1,1,{doubleAfterSplit:true})
console.log(result)