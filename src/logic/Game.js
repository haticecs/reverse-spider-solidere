import * as _ from "lodash";
import cardInfo from "../utils/cardInfo.json";
// We need to maintain rank since we will implement logic based on the ranks. (movable or not movable)
export const getRank = (rank) => {
  if (rank === "K" || rank === "Q" || rank === "J" || rank === "A") {
    switch (rank) {
      case "K":
        return 13;
      case "Q":
        return 12;
      case "J":
        return 11;
      case "A":
        return 1;
      default:
        return;
    }
  } else {
    return parseInt(rank);
  }
};

// Function to generate card decks
export const populateOneSuitCards = () => {
  let cards = [],
    decks;
  cardInfo["rank"].forEach((rank) => {
    for (let i = 1; i <= 8; i++) {
      cards.push({
        rank: rank,
        suit: "heart",
        isDown: true,
        deck: i,
        isSelected: false,
        isHighlighted: false,
      });
    }
  });
  let shuffledCards = _.shuffle(cards);
  let decks1 = _.chunk(shuffledCards.slice(0, 24), 6);
  let decks2 = _.chunk(shuffledCards.slice(24, 54), 5);
  let decks3 = _.chunk(shuffledCards.slice(54, 104), 10);

  decks = decks1.concat(decks2, decks3);

  for (let i = 0; i <= 9; i++) {
    decks[i][decks[i].length - 1].isDown = false;
  }
  return {
    decks: decks.slice(0, 10),
    remainingDecks: decks.slice(10, 20),
  };
};

console.log("heree", populateOneSuitCards());
