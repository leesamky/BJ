const _=require('lodash')
// need to modify charlie

module.exports=function (playerCards,dealerCard,handValue,handCount,options){
    // console.log(playerCards)
    // console.log(dealerCard)
    // console.log(handValue)

    let shouldDouble=false

    //It needs to be a possible action
    if((playerCards.length!==2)||((handCount>1)&&!options.doubleAfterSplit)){
        return false
    }

    if((handValue.total<options.doubleRange[0])||(handValue.total>options.doubleRange[1])){
        return false
    }

    if(handValue.soft){
        if(options.EuropeanNoHoldCard){
            return false
        }
        switch(handValue.total){

            case 13:
                //charlie no doulbe
                if(options.charlie===false){
                    //deck 1 dealer 4-6
                    if((options.numberOfDecks===1)&&((dealerCard>=4)&&(dealerCard<=6))){
                        shouldDouble=true
                    }

                    //deck 2+, dealer 5-6
                    if((options.numberOfDecks!==1)&&((dealerCard>=5)&&(dealerCard<=6))){
                        shouldDouble=true
                    }
                }

                break;


            case 14:
                //charlie no double
                if(options.charlie===false){
                    //deck 1, dealer 4-6
                    if((options.numberOfDecks===1)&&((dealerCard>=4)&&(dealerCard<=6))){
                        shouldDouble=true
                    }

                    if(options.numberOfDecks===2){
                        //deck 2 dealer 4,5,6 hit on soft 17
                        if(options.hitSoft17&&((dealerCard>=4)&&(dealerCard<=6))){
                            shouldDouble=true
                        }
                        // deck 2 dealer 5,6 Stand on soft 17
                        if((options.hitSoft17===false)&&((dealerCard>=5)&&(dealerCard<=6))){
                            shouldDouble=true
                        }
                    }
                    //deck 4+ dealer 5,6
                    if(options.numberOfDecks>=4){
                        if((dealerCard>=5)&&(dealerCard<=6)){
                            shouldDouble=true
                        }
                    }
                }

                break;

            case 15:
                //charlie, dealer 6
                if(options.charlie){
                    if(dealerCard===6){
                        shouldDouble=true
                    }
                }
                // dealer 4-6
                else{
                    if((dealerCard>=4)&&(dealerCard<=6)){
                        shouldDouble=true
                    }
                }
                break;


            case 16:

                //charlie, dealer 5,6
                if(options.charlie){
                    if((dealerCard>=5)&&(dealerCard<=6)){
                        shouldDouble=true
                    }
                }
                // dealer 4-6
                else{
                    if((dealerCard>=4)&&(dealerCard<=6)){
                        shouldDouble=true
                    }
                }
                break;


            case 17:
                //charlie 3-6
                if(options.charlie){
                    if((dealerCard>=3)&&(dealerCard<=6)){
                        shouldDouble=true
                    }
                }
                else{
                    //deck 1, 2-6
                    if(options.numberOfDecks===1){
                        if((dealerCard>=2)&&(dealerCard<=6)){
                            shouldDouble=true
                        }
                    }
                    else{
                        //deck 2+ 3-6
                        if((dealerCard>=3)&&(dealerCard<=6)){
                            shouldDouble=true
                        }
                    }
                }
                break;


            case 18:
                if(options.charlie){
                    if((dealerCard>=3)&&(dealerCard<=6)){
                        shouldDouble=true
                    }
                }
                else{
                    //deck 1, 3-6
                    if(options.numberOfDecks===1){
                        if((dealerCard>=3)&&(dealerCard<=6)){
                            shouldDouble=true
                        }
                    }
                    else{
                        // deck 2+ stand on soft 17, 3-6
                        if(options.hitSoft17===false){
                            if((dealerCard>=3)&&(dealerCard<=6)){
                                shouldDouble= true
                            }
                        }
                        //deck2+, hit on soft 17,2-6
                        else{
                            if((dealerCard>=2)&&(dealerCard<=6)){
                                shouldDouble= true
                            }
                        }
                    }

                }


                break;

            case 19:

                if(options.charlie===false){
                    //deck 1, dealer 6
                    if(options.numberOfDecks===1){
                        if(dealerCard===6){
                            shouldDouble=true
                        }
                    }
                    //deck 2+, Hit on soft 17,dealer 6
                    else{
                        if(options.hitSoft17===true){
                            if(dealerCard===6){
                                shouldDouble=true
                            }
                        }
                    }
                }

                break;

            default:
                break;
        }
    }
    else{
        //Double on 8,9,10,11 only
        switch(handValue.total){
            case 8:
                //charlie no double
                if(options.charlie===false){
                    //deck 1, dealer 5,6
                    if(options.numberOfDecks===1){
                        if((dealerCard>=5)&&(dealerCard<=6)){
                            if((playerCards[0]===playerCards[1])&&(playerCards[0]===4)&&(options.doubleAfterSplit)){
                                shouldDouble= false
                            }else{
                                shouldDouble=true
                            }


                        }
                    }
                }
                break;

            case 9:
                //charlie 3-6
                if(options.charlie){
                    if((dealerCard>=3)&&(dealerCard<=6)){
                        shouldDouble=true
                    }
                }else{
                    if(options.numberOfDecks<=2){
                        if((dealerCard>=2)&&(dealerCard<=6)){
                            shouldDouble=true
                        }
                    }else{
                        if((dealerCard>=3)&&(dealerCard<=6)){
                            shouldDouble=true
                        }
                    }
                }
                break;

            case 10:

                //both charlie and others are dealer 2-9
                if((dealerCard>=2)&&(dealerCard<=9)){
                    shouldDouble=true
                }
                break;


            case 11:
                //charlie 2-10
                if(options.charlie){
                    if((dealerCard>=2)&&(dealerCard<=10)){
                        shouldDouble=true
                    }
                }else{
                    //deck1,2 always double
                    if(options.numberOfDecks<=2){
                        shouldDouble=true
                    }else{
                        //deck4+, hit soft 17, all double
                        if(options.hitSoft17){
                            shouldDouble=true
                        }else{
                            //deck4+ , stand on soft 17, 2-10,
                            if(dealerCard!==1){

                                shouldDouble=true
                                if((dealerCard===10)&&options.EuropeanNoHoldCard){
                                    shouldDouble=false
                                }
                            }
                        }
                    }
                }



                break;

            default:
                break;
        }

    }

    return shouldDouble
}