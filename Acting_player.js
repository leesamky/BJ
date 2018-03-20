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

            return true

            break;

        case 2:


            return true


            break;


        case 3:


            return true



            break;


        case 4:
            if(options.doubleAfterSplit){
                if((dealerCard===5)||(dealerCard===6)){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }


            break;

        case 5:
            return false
            break;


        case 6:
            return true


            break;

        case 7:



            return true


            break;


        case 8:
            return true

            break;

        case 9:


            if(dealerCard===7){
                return false
            }else {
                return true
            }
            break;

        case 10:
            return false
            break;

        default:
            throw Error('no match case')
            break;

    }


}