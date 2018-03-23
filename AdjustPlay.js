const _=require('lodash')

module.exports=function (playerCards, dealerCard, handValue, handCount, dealerCheckedBlackjack, options)
{
    var canSplit = (playerCards[0] === playerCards[1]) && (playerCards.length === 2) && (handCount < options.maxSplitHands);
    var canDouble = ((playerCards.length === 2) && ((handCount === 1) || options.doubleAfterSplit)) &&
        ((handValue.total >= options.doubleRange[0]) && (handValue.total <= options.doubleRange[1]));
    var canSurrender = ((_.includes(options.surrender,'early')) || (options.surrender === "late")) && (playerCards.length === 2) && (handCount === 1);
    var surrenderMatrix = [
        {player: 14, dealer: 10, count: 3},
        {player: 15, dealer: 10, count: 0},
        {player: 15, dealer: 9, count: 2},
        {player: 15, dealer: 1, count: 1}
    ];

    // We may take insurance!
    if ((dealerCard === 1) && !dealerCheckedBlackjack && options.offerInsurance && (options.count.trueCount >= 3))
    {
        return "insurance";
    }
    else if ((handValue.total === 16) && (dealerCard === 10) && (options.count.trueCount >= 0))
    {
        return "stand";
    }
    else if ((handValue.total === 15) && (dealerCard === 10) && (options.count.trueCount >=4))
    {
        return "stand";
    }
    else if (canSplit && (handValue.total === 20))
    {
        if ((dealerCard === 5) && (options.count.trueCount >= 5))
        {
            return "split";
        }
        else if ((dealerCard === 6) && (options.count.trueCount >= 4))
        {
            return "split";
        }
    }
    else if (canDouble && (handValue.total === 10) && (dealerCard === 10) && (options.count.trueCount >= 4))
    {
        return "double";
    }
    else if ((handValue.total === 12) && (dealerCard === 3) && (options.count.trueCount >= 2))
    {
        return "stand";
    }
    else if ((handValue.total === 12) && (dealerCard === 2) && (options.count.trueCount >= 3))
    {
        return "stand";
    }
    else if (canDouble && (handValue.total === 11) && (dealerCard === 1) && (options.count.trueCount >= 1))
    {
        return "double";
    }
    else if (canDouble && (handValue.total === 9) && (dealerCard === 2) && (options.count.trueCount >= 1))
    {
        return "double";
    }
    else if (canDouble && (handValue.total === 10) && (dealerCard === 1) && (options.count.trueCount >= 4))
    {
        return "double";
    }
    else if (canDouble && (handValue.total === 9) && (dealerCard === 7) && (options.count.trueCount >= 3))
    {
        return "double";
    }
    else if ((handValue.total === 16) && (dealerCard === 9) && (options.count.trueCount >= 5))
    {
        return "stand";
    }
    else if ((handValue.total === 13) && (dealerCard === 2) && (options.count.trueCount < -1))
    {
        return "hit";
    }
    else if ((handValue.total === 12) && (dealerCard === 4) && (options.count.trueCount < 0))
    {
        return "hit";
    }
    else if ((handValue.total === 12) && (dealerCard === 5) && (options.count.trueCount < -2))
    {
        return "hit";
    }
    else if ((handValue.total === 12) && (dealerCard === 6) && (options.count.trueCount < -1))
    {
        return "hit";
    }
    else if ((handValue.total === 13) && (dealerCard === 3) && (options.count.trueCount < -2))
    {
        return "hit";
    }
    else if (canSurrender)
    {
        for (var i = 0; i < surrenderMatrix.length; i++)
        {
            if ((handValue.total === surrenderMatrix[i].player) && (dealerCard === surrenderMatrix[i].dealer)
                && (options.count.trueCount >= surrenderMatrix[i].count))
            {
                return "surrender";
            }
        }
    }

    // Nope, no adjustment
    return null;
}