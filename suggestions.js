const _=require('lodash')

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

function GameOptions(options){
    const playerOptions={
        hitSoft17: true,
        surrender: "late",
        doubleRange:[0,21],
        doubleAfterSplit: true,
        resplitAces: false,
        offerInsurance: true,
        numberOfDecks: 6,
        maxSplitHands: 4,
        count: {system: null, trueCount: null},
        strategyComplexity: "simple",
        hitSplitedAce:false,
        EuropeanNoHoldCard:false,
        CSM:false,
        fiveDragon:false,//no yet
        charlie:false

    }

    if (options)
    {
        if (options.hasOwnProperty("charlie"))
        {
            playerOptions.charlie = options.charlie;
        }

        if (options.hasOwnProperty("hitSoft17"))
        {
            playerOptions.hitSoft17 = options.hitSoft17;
        }
        if (options.hasOwnProperty("surrender"))
        {
            playerOptions.surrender = options.surrender;
        }
        if (options.hasOwnProperty("doubleAfterSplit"))
        {
            playerOptions.doubleAfterSplit = options.doubleAfterSplit;
        }
        if (options.hasOwnProperty("resplitAces"))
        {
            playerOptions.resplitAces = options.resplitAces;
        }
        if (options.hasOwnProperty("offerInsurance"))
        {
            playerOptions.offerInsurance = options.offerInsurance;
        }
        if (options.hasOwnProperty("numberOfDecks"))
        {
            playerOptions.numberOfDecks = options.numberOfDecks;
        }
        if (options.hasOwnProperty("maxSplitHands"))
        {
            playerOptions.maxSplitHands = options.maxSplitHands;
        }
        if (options.hasOwnProperty("count"))
        {
            playerOptions.count = options.count;
        }
        if (options.hasOwnProperty("strategyComplexity"))
        {
            playerOptions.strategyComplexity = options.strategyComplexity;
        }

        // Double rules - make sure doubleRange is set as that is all we use here
        if (options.hasOwnProperty("doubleRange"))
        {
            playerOptions.doubleRange = options.doubleRange;
        }
        else if (options.hasOwnProperty("double"))
        {
            // Translate to doubleRange
            if (options.double == "none")
            {
                playerOptions.doubleRange[0] = 0;
                playerOptions.doubleRange[1] = 0;
            }
            else if (options.double === "10or11")
            {
                playerOptions.doubleRange[0] = 10;
                playerOptions.doubleRange[1] = 11;
            }
            else if (options.double === "9or10or11")
            {
                playerOptions.doubleRange[0] = 9;
                playerOptions.doubleRange[1] = 11;
            }
        }
        if (options.hasOwnProperty("hitSplitedAce"))
        {
            playerOptions.hitSplitedAce = options.hitSplitedAce;
        }
        if (options.hasOwnProperty("EuropeanNoHoldCard"))
        {
            playerOptions.EuropeanNoHoldCard = options.EuropeanNoHoldCard;
        }
        if (options.hasOwnProperty("CSM"))
        {
            playerOptions.CSM = options.CSM;
        }
        if (options.hasOwnProperty("fiveDragon"))
        {
            playerOptions.fiveDragon = options.fiveDragon;
        }

        return playerOptions
    }
}

function ShouldPlayerSplit(playerCards,dealerCard,handValue,handCount,options){
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
            }else{
                shouldSplit=true
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
            shouldSplit=!ShouldPlayerSurrender(playerCards,dealerCard,handValue,handCount,options)

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

function ShouldPlayerSurrender(playerCards,dealerCard,handValue,handCount,options){

}

function ShouldPlayerDouble(playerCards,dealerCard,handValue,handCount,options){
    let shouldDouble=false

    //It needs to be a possible action
    if((playerCards.length!==2)||((handCount>1)&&!options.doubleAfterSplit)){
        return false
    }

    if((handValue.total<options.doubleRange[0])||(handValue.total>options.doubleRange[1])){
        return false
    }

    if(handValue.soft){
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
                            shouldDouble=true
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
                            }
                        }
                    }
                }



                break;

            default:
                break;
        }

    }
}