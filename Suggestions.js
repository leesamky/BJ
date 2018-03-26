const _=require('lodash')
const GameOptions=require('./GameOptions')
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
const ActingPlayer=require('./Acting_player')

const AdjustPlay=require('./AdjustPlay')
const Double=require('./Double')
const Split=require('./Split')
const Stand=require('./Stand')
const Surrender=require('./Surrender')
const Hit=require('./Hit')

module.exports=function (playerCards,dealerCard,handCount,dealerCheckedBlackJack,dealerHasBlackJack,options){
    // console.log(playerCards)
    // console.log(dealerCard)
    // console.log(options)

    const playerOptions=options
    const handValue=Points(playerCards)

    // console.log(ActingPlayer(playerCards,dealerCard,handValue,handCount,playerOptions),playerOptions.backBet)

    //has early10 and earlyA
    if((_.includes(playerOptions.surrender,'early'))&&(Surrender(playerCards,dealerCard,handValue,handCount,playerOptions))){
        return 'surrender'
    }

    //to do Hi Lo

    if(playerOptions.count.system==='HiLo'){

        let result=AdjustPlay(playerCards,dealerCard,handValue,handCount,dealerCheckedBlackJack,playerOptions)

        if(result!==null){
            // console.log('adjust the play '+result)
            return result
        }

    }




    //insurance
    if((dealerCard===1)&&!dealerCheckedBlackJack&&playerOptions.offerInsurance){
        return 'noInsurance'
    }

    //late surrender
    else if((playerOptions.surrender==='late')&&dealerCheckedBlackJack&&!dealerHasBlackJack&&(Surrender(playerCards,dealerCard,handValue,handCount,playerOptions))){
        return 'surrender'
    }

    // else if(Split(playerCards,dealerCard,handValue,handCount,playerOptions)){
    //     return 'split'
    // }

    else if(playerOptions.backBet&&ActingPlayer(playerCards,dealerCard,handValue,handCount,playerOptions)){

            return 'split'

    }

    else if(playerOptions.backBet===false&&Split(playerCards,dealerCard,handValue,handCount,playerOptions)){

            return 'split'
    }

    else if(Double(playerCards,dealerCard,handValue,handCount,playerOptions)){
        return 'double'
    }

    else if(Stand(playerCards,dealerCard,handValue,handCount,playerOptions)){
        return 'stand'
    }

    else if(Hit(playerCards,dealerCard,handValue,handCount,playerOptions)){
        return 'hit'
    }else{
        throw Error('no matches')
    }




}