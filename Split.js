const _=require('lodash')

module.exports=function (playerCards,dealerCard,handValue,handCount,options){
    let shouldSplit=false

    //it needs to be a possible action
    if((playerCards.length!==2)||(handCount===options.maxSplitHands)||(playerCards[0]!==playerCards[1])){
        return false
    }

    switch(playerCards[0]){
        case 1:
            //always split aces

            if(options.charlie){
                // 5 card charlie dealer not 1
                if((options.charlie===5)&&(dealerCard!==1)){
                    shouldSplit=true
                }
                // 6 cards charlie always split
                else if(options.charlie===6){
                    shouldSplit=true
                }
            }else{
                shouldSplit=true
                if(options.EuropeanNoHoldCard&&(dealerCard===1)){
                    shouldSplit=false
                }
            }

            break;

        case 2:


            if(options.charlie){
                //5 card Charlie double after split dearler has 5,6
                if((dealerCard===5||dealerCard===6)&&options.doubleAfterSplit&&options.charlie===5){
                    shouldSplit=true
                }

                //6 card Charlie No Double after split dealer has 5,6,7
                if((dealerCard>=5&&dealerCard<=7)&&options.doubleAfterSplit===false&&options.charlie===6){
                    shouldSplit=true
                }

                // 6 card Charlie Double after split,dealer has 2-7
                if((dealerCard>=2&&dealerCard<=7)&&options.doubleAfterSplit&&options.charlie===6){
                    shouldSplit=true
                }
            }else{
                //dealer card 4-7,
                if((dealerCard>3&&dealerCard<8)){
                    shouldSplit=true
                }
                //or dealer has 2 and 3 if you can double after split
                if(((dealerCard===2||dealerCard===3))&&(options.doubleAfterSplit)){
                    shouldSplit=true
                }

                //against a dealer 3 in single deck
                if((dealerCard===3)&&(options.numberOfDecks===1)){
                    shouldSplit=true
                }
            }


            break;


        case 3:


            if(options.charlie){
                //5 card charlie No double after split dealer has 6
                if((dealerCard===6)&&options.doubleAfterSplit===false&&options.charlie===5){
                    shouldSplit=true
                }

                // 5 card charlie Double After split dealer has 4-6
                if((dealerCard>=4&&dealerCard<=6)&&options.doubleAfterSplit&&options.charlie===5){
                    shouldSplit=true
                }

                //6 card charlie No double after split,dealer has 5-7
                if((dealerCard>=5&&dealerCard<=7)&&(options.doubleAfterSplit===false)&&(options.charlie===6)){
                    shouldSplit=true
                }

                //6 card charlie Double after split, dealer has 3-7
                if((dealerCard>=3&&dealerCard<=7)&&options.doubleAfterSplit&&(options.charlie===6)){
                    shouldSplit=true
                }
            }
            else{
                //single deck, dealer has 8 and you can double after split
                if((dealerCard===8)&&(options.numberOfDecks===1)&&(options.doubleAfterSplit)){
                    shouldSplit=true
                }

                //dealer has 4-7 or 2,3 if you can double after split
                if((dealerCard>=4&&dealerCard<=7)){
                    shouldSplit=true
                }

                //dealer has 2,3 if you can double after split
                if((dealerCard>=2&&dealerCard<=3)&&(options.doubleAfterSplit)){
                    shouldSplit=true
                }
            }



            break;


        case 4:

            if(options.charlie){
                //5 card charlie, DAS,dealer has 6
                if((dealerCard===6)&&(options.charlie===5)&&(options.doubleAfterSplit)){
                    shouldSplit=true
                }

                // 6 card charlie, DAS, Dealer has 5,6
                if((dealerCard>=5&&dealerCard<=6)&&(options.charlie===6)&&(options.doubleAfterSplit)){
                    shouldSplit=true
                }
            }
            else{
                //dealer has 4, single deck, double after split
                if((dealerCard===4)&&(options.numberOfDecks===1)&&(options.doubleAfterSplit)){
                    shouldSplit=true
                }

                //dealer has 5,6, double after split
                if((dealerCard>=5&&dealerCard<=6)&&options.doubleAfterSplit){
                    shouldSplit=true
                }
            }

            break;

        case 5:
            break;


        case 6:

            if(options.charlie){
                //5,6 card charlie NDAS3-6,DAS2-6
                if(options.charlie===5||options.charlie===6){
                    if((options.doubleAfterSplit===false)&&(dealerCard>=3&&dealerCard<=6)){
                        shouldSplit=true
                    }else if(options.doubleAfterSplit&&(dealerCard>=2&&dealerCard<=6)){
                        shouldSplit=true
                    }
                }
            }
            else{
                //1-2 decks dealer has 2-6 or DAS7
                if(options.numberOfDecks<=2){
                    if((dealerCard>=2&&dealerCard<=6)){
                        shouldSplit=true
                    }else if(dealerCard===7&&options.doubleAfterSplit){
                        shouldSplit=true
                    }
                }

                // 4+ decks,3-6 DAS2
                if(options.numberOfDecks>=4){
                    if((dealerCard>=3&&dealerCard<=6)){
                        shouldSplit=true
                    }else if(dealerCard===2&&options.doubleAfterSplit){
                        shouldSplit=true
                    }
                }
            }


            break;

        case 7:



            if(options.charlie){
                //charlie 2-7
                if((options.charlie>=5)&&(dealerCard>=2)&&(dealerCard<=7)){
                    shouldSplit=true
                }
            }
            else{
                //1-2 decks dealer 2-7 DAS 8
                if(options.numberOfDecks<=2){
                    if((dealerCard>=2&&dealerCard<=7)){
                        shouldSplit=true
                    }else if(dealerCard===8&&options.doubleAfterSplit){
                        shouldSplit=true
                    }
                }

                //4+ decks dealer 2-7
                if(options.numberOfDecks>=4){
                    if((dealerCard>=2&&dealerCard<=7)){
                        shouldSplit=true
                    }
                }
            }


            break;


        case 8:
            shouldSplit=true
            if(options.EuropeanNoHoldCard&&(_.includes([1,10],dealerCard))){
                shouldSplit=false
            }

            break;

        case 9:


            //charlie
            if(options.charlie){
                if((dealerCard>=2)&&(dealerCard<=9)&&(dealerCard!=7)){
                    shouldSplit=true
                }
            }
            else{
                //deck 1, DAS1, all card but 7,10
                if(options.numberOfDecks===1){
                    if((dealerCard>=2)&&(dealerCard<=9)&&(dealerCard!=7)){
                        shouldSplit=true
                    }else if((dealerCard===1)&&options.doubleAfterSplit&&options.hitSoft17){
                        shouldSplit=true
                    }
                }

                //deck 2+ dealer 2-9, but 7
                if(options.numberOfDecks>=2){
                    if((dealerCard>=2)&&(dealerCard<=9)&&(dealerCard!=7)){
                        shouldSplit=true
                    }
                }
            }

            break;



        default:
            break;

    }

    return shouldSplit
}