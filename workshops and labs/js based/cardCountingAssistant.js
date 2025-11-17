console.log("Welcome to Blackjack");
let count = 0;

function cc(card) {
    if (card > 1 && card < 7) {
        count++;
    }
    else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
        count--;
    }
    if (count > 0) {
        return "" + count + " Bet";
    }
    return "" + count + " Hold";
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(4));
console.log(cc(5));
console.log(cc(6));

console.log(cc(7));
console.log(cc(8));
console.log(cc(9));