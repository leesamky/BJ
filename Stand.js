const _=require('lodash')

module.exports=function(playerCards,dealerCard,handValue,handCount,options){
    let shouldStand=false

    if(options.charlie){
        let toCharlie=options.charlie-playerCards.length

        if(handValue.soft){
            if(handValue.total===18){
                if((toCharlie>2)&&(_.includes([1,2,7,8,9,10],dealerCard))){
                    shouldStand=true
                }
            }else if((handValue.total===19)&&(dealerCard===10)&&(toCharlie>2)){
                shouldStand=true
            }else if(handValue.total>=19){
                if(toCharlie>1){
                    shouldStand=true
                }
            }
        }else{
            //stand
            if(handValue.total>=18){
                shouldStand=true
            }else if(handValue.total===17){
                if(_.includes([2,3,4,5,6,7,8],dealerCard)){
                    shouldStand=true
                }else{
                    if(toCharlie>1){
                        shouldStand=true
                    }
                }
            }
            else if(handValue.total===16){
                if(_.includes([4,5,6],dealerCard)){
                    shouldStand=true
                }else if((_.includes([2,3],dealerCard))&&(toCharlie>1)){
                    shouldStand=true
                }
            }
            else if(_.includes([14,15],dealerCard)){
                if(toCharlie>1){
                    shouldStand=true
                }
            }
            else if(handValue.total===13){
                if((toCharlie>1)&&(_.includes([4,5,6],dealerCard))){
                    shouldStand=true
                }else if((toCharlie>2)&&(_.includes([2,3],dealerCard))){
                    shouldStand=true
                }
            }else if(handValue.total===12){
                if((toCharlie>12)&&(_.includes([4,5,6],dealerCard))){
                    shouldStand=true
                }
            }

        }
    }else{
        if(handValue.soft){
            //always hit if under 18
            if(handValue.total<=17){
                return false
            }
            else if(handValue.total===18){
                if(options.numberOfDecks===1){
                    if(options.hitSoft17===false){
                        if((dealerCard<=8)&&(dealerCard>=1)){
                            shouldStand=true
                        }
                    }else{
                        if((dealerCard<=8)&&(dealerCard>=2)){
                            shouldStand=true
                        }
                    }
                }else if(options.numberOfDecks===2){
                    if(options.hitSoft17===false){
                        if((dealerCard<=8)&&(dealerCard>=2)){
                            shouldStand=true
                        }
                    }else{
                        if((dealerCard<=8)&&(dealerCard>=2)){
                            shouldStand=true
                        }
                    }
                }else if((options.numberOfDecks>=4)&&(options.numberOfDecks<=8)){
                    if(options.hitSoft17===false){
                        if((dealerCard<=8)&&(dealerCard>=2)){
                            shouldStand=true
                        }
                    }else{
                        if((dealerCard<=8)&&(dealerCard>=2)){
                            shouldStand=true
                        }
                    }
                }
            }
            else{
                return true
            }
        }
        else {
            if((playerCards[0]===playerCards[1])&&(playerCards.length===2)){//split
                if(options.numberOfDecks===1){
                    if((playerCards[0]===7)&&(dealerCard===10)){
                        shouldStand=true
                    }else if((playerCards[0]===9)&&(_.includes([1,7,10],dealerCard))){
                        shouldStand=true
                    }
                }else if(options.numberOfDecks>=2){
                    if((playerCards[0]===9)&&(_.includes([1,7,10],dealerCard))){
                        shouldStand=true
                    }
                }
            }else{
                if((handValue.total===12)&&(_.includes([4,5,6],dealerCard))){
                    shouldStand=true
                }
                else if((_.includes([13,14,15,16],handValue.total))&&(_.includes([2,3,4,5,6],dealerCard))){
                    shouldStand=true
                }else if(handValue.total>=17){
                    shouldStand=true
                }
            }

        }
    }

    return shouldStand

}