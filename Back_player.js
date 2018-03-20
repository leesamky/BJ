const _=require('lodash')

module.exports=function (playerCards,dealerCard,handValue,handCount,options){

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
            if(options.doubleAfterSplit){
                if(_.includes([4,5,6,7],dealerCard)){
                    return true
                }else{
                    return false
                }
            }else{
                if(_.includes([5,6],dealerCard)){
                    return true
                }else{
                    return false
                }
            }




            break;


        case 3:

            if(options.doubleAfterSplit){
                if(_.includes([4,5,6],dealerCard)){
                    return true
                }else{
                    return false
                }
            }else{
                if(_.includes([5,6],dealerCard)){
                    return true
                }else{
                    return false
                }
            }




            break;


        case 4:
            if(options.doubleAfterSplit){
                if(_.includes([5,6],dealerCard)){
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

            if(options.doubleAfterSplit){
                if(_.includes([4,5,6],dealerCard)){//with doubt
                    return true
                }else{
                    return false
                }
            }else{
                if(_.includes([6],dealerCard)){//with doubt
                    return true
                }else{
                    return false
                }
            }




            break;

        case 7:

            if(options.doubleAfterSplit){
                if(_.includes([4,5,6],dealerCard)){
                    return true
                }else{
                    return false
                }
            }else{
                if(_.includes([5,6],dealerCard)){
                    return true
                }else{
                    return false
                }
            }



            break;


        case 8:
            if(options.doubleAfterSplit){
                if(_.includes([2,3,4,5,6,7],dealerCard)){
                    return true
                }else{
                    return false
                }
            }else{
                if(_.includes([3,4,5,6,7],dealerCard)){
                    return true
                }else{
                    return false
                }
            }


            break;

        case 9:

            if(options.doubleAfterSplit){
                if(_.includes([2,3,4,5,6,8],dealerCard)){
                    return true
                }else{
                    return false
                }
            }else{
                if(_.includes([2,3,4,5,6,8],dealerCard)){
                    return true
                }else{
                    return false
                }
            }

            break;

        case 10:
            if(_.includes([2,3,4,5,6,7],dealerCard)){
                return true
            }else{
                return false
            }
            break;

        default:
            throw Error('no match case')
            break;

    }


}