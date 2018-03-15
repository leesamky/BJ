const _=require('lodash')

module.exports=function(playerCards,dealerCard,handValue,handCount,options){
        // console.log(playerCards)
        // console.log(dealerCard)
        // console.log(options)


        let shouldSurrender=false

        if((options.surrender===false)||(playerCards.length!==2)||(handCount!==1)){
            return false
        }
        if(handValue.soft){
            return false
        }
        if(options.surrender!==false){
            //check late surrender here
            if(options.numberOfDecks===1){
                if(handValue.total===14){
                    //dealer 10,player 7,7
                    if((dealerCard===10)&&(playerCards[0]===7)){
                        shouldSurrender=true
                    }
                    //dealer A, player 7,7 hit soft 17
                    else if((dealerCard===1)&&(options.hitSoft17)&&(playerCards[0]===7)){
                        shouldSurrender=true
                    }
                }
                else if(handValue.total===15){

                    // dealer 10, player 9+6,10+5
                    if((dealerCard===10)&&(_.includes([5,6,9,10],playerCards[0]))){
                        shouldSurrender=true
                    }
                    //dealer A, player 9+6,10+5, hit soft 17
                    else if (options.hitSoft17&&(dealerCard===1)&&(_.includes([5,6,9,10],playerCards[0]))){
                        shouldSurrender=true
                    }
                }

                else if(handValue.total===16){
                    if(dealerCard===10){
                        shouldSurrender=true
                    }

                    else if(dealerCard===1){
                        //S17, dealer A,player 10+6
                        if((options.hitSoft17===false)&&(_.includes([10,6],playerCards[0]))){
                            shouldSurrender=true
                        }
                        //H17 dealer A, player 9+7,10+6
                        else if(options.hitSoft17&&(_.includes([6,7,9,10],playerCards[0]))){
                            shouldSurrender=true
                        }
                    }
                }

                else if(handValue.total===17){
                    if((dealerCard===1)&&(options.hitSoft17)&&(_.includes([10,7],playerCards[0]))){
                        shouldSurrender=true
                    }
                }
            }
            else if(options.numberOfDecks===2){
                if(handValue.total===15){
                    if((dealerCard===10)&&(_.includes([5,6,9,10],playerCards[0]))){
                        shouldSurrender=true
                    }
                    else if((dealerCard===1)&&(options.hitSoft17)&&(_.includes([5,6,9,10],playerCards[0]))){
                        shouldSurrender=true
                    }
                }
                else if(handValue.total===16){

                    //player 8,8,dealer A, H17
                    if((playerCards[0]===playerCards[1])&&(playerCards[0]===8)){
                        if((dealerCard===1)&&(options.doubleAfterSplit===false)&&(options.hitSoft17)){
                            shouldSurrender=true
                        }
                    }else{
                        //dealer 10
                        if(dealerCard===10){
                            shouldSurrender=true
                        }
                        //dealer A, S17
                        else if((dealerCard===1)&&(options.hitSoft17===false)){
                            shouldSurrender=true
                        }
                        //dealer A, H17,7+9,10+6
                        else if((dealerCard===1)&&options.hitSoft17&&(_.includes([6,7,9,10],playerCards[0]))){
                            shouldSurrender=true
                        }
                    }

                }
                else if(handValue.total==17){
                    //dealer A,H17
                    if((dealerCard===1)&&(options.hitSoft17)){
                        shouldSurrender=true
                    }
                }


            }
            else if((options.numberOfDecks===4)||(options.numberOfDecks===6)){

                if(handValue.total===15){
                    if(dealerCard===10){
                        if(_.includes([5,6,9,10],playerCards[0])){
                            shouldSurrender=true
                        }
                    }
                    else if((dealerCard===1)&&(options.hitSoft17)){
                        shouldSurrender=true
                    }
                }
                else if(handValue.total===16){
                    if(playerCards[0]===playerCards[1]){
                        if(dealerCard===1&&options.hitSoft17){
                            shouldSurrender=true
                        }
                    }else if(_.includes([1,9,10],dealerCard)){
                        shouldSurrender=true
                    }


                }else if(handValue.total===17){
                    if(dealerCard===1&&options.hitSoft17){
                        shouldSurrender=true
                    }
                }
            }
            else if(options.numberOfDecks===8){
                if(handValue.total===15){
                    if(dealerCard===10){
                        shouldSurrender=true
                    }
                    else if((dealerCard===1)&&(options.hitSoft17)){
                        shouldSurrender=true
                    }
                }
                else if(handValue.total===16){
                    if(playerCards[0]===playerCards[1]){//p[8,8] dA H17 surrender
                        if(dealerCard===1&&options.hitSoft17){
                            shouldSurrender=true
                        }
                    }else if(_.includes([1,9,10],dealerCard)){
                        shouldSurrender=true
                    }


                }else if(handValue.total===17){
                    if(dealerCard===1&&options.hitSoft17){
                        shouldSurrender=true
                    }
                }
            }
        }
        if(_.includes(options.surrender,'early')){
           //early10
            if(dealerCard===10){
                if(_.includes([14,15,16],handValue.total)){
                    shouldSurrender=true
                }
                //exceptions
                if((options.numberOfDecks===1)&&(handValue.total===14)&&(_.includes([4,5,9,10],playerCards[0]))){
                    shouldSurrender=false
                }
                else if((options.numberOfDecks===2)&&(handValue.total===14)&&(_.includes([4,10],playerCards[0]))){
                    shouldSurrender=false
                }
                else if((options.doubleAfterSplit)&&(options.numberOfDecks===1)&&(playerCards[0]===playerCards[1])&&(playerCards[0]===8)){
                    shouldSurrender=false
                }
            }
            if(dealerCard===1){
                shouldSurrender=false
            }
            if(options.surrender==='earlyA'){
                if(dealerCard===1){
                    if(_.includes([5,6,7,12,13,14,15,16,17],handValue.total)){
                        shouldSurrender=true
                    }
                    if((options.hitSoft17)&&(playerCards[0]===playerCards[1])&&(playerCards[0]===2)){
                        shouldSurrender=true
                    }
                    if((options.numberOfDecks===1)&&options.doubleAfterSplit&&(playerCards[0]===playerCards[1]===8)){
                        shouldSurrender=false
                    }
                }
            }
        }
        return shouldSurrender





}

