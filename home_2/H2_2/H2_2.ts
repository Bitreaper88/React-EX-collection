let cardNames: Array<string> = [
    "Ace of Spades",
    "2 of Spades",
    "3 of Spades",
    "4 of Spades",
    "5 of Spades",
    "6 of Spades",
    "7 of Spades",
    "8 of Spades",
    "9 of Spades",
    "10 of Spades",
    "Jack of Spades",
    "Queen of Spades",
    "King of Spades",

    "Ace of Diamonds",
    "2 of Diamonds",
    "3 of Diamonds",
    "4 of Diamonds",
    "5 of Diamonds",
    "6 of Diamonds",
    "7 of Diamonds",
    "8 of Diamonds",
    "9 of Diamonds",
    "10 of Diamonds",
    "Jack of Diamonds",
    "Queen of Diamonds",
    "King of Diamonds",

    "Ace of Club",
    "2 of Club",
    "3 of Club",
    "4 of Club",
    "5 of Club",
    "6 of Club",
    "7 of Club",
    "8 of Club",
    "9 of Club",
    "10 of Club",
    "Jack of Club",
    "Queen of Club",
    "King of Club",

    "Ace of Heart",
    "2 of Heart",
    "3 of Heart",
    "4 of Heart",
    "5 of Heart",
    "6 of Heart",
    "7 of Heart",
    "8 of Heart",
    "9 of Heart",
    "10 of Heart",
    "Jack of Heart",
    "Queen of Heart",
    "King of Heart",
  ];

let deckIndex: Array<number> = new Array (cardNames.length);
 for (let i = 0; i < deckIndex.length; i++) {
    while (true){
        let tempNumber: number =  Math.round(Math.random() * 10); 
        if (!deckIndex.includes(tempNumber)){
            deckIndex[i] =  tempNumber;
            break;
        }
    }
}

function takeTopCard(deck: Array<number>) {
    return deck[0];
}

console.log("The top card is: " + takeTopCard(deckIndex));