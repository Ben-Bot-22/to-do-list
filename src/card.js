import { addCardToColumn, removeCardFromColumn } from './column';

let cards = new Map();

class Card {
  constructor(title, colName) {
    this.title = title;
    this.colName = colName;
  }
  //   title
  //   description,
  //   dueDate,
  //   priority,
  //   project,
  //   column
}

export function createCard(title, colName) {
  const card = new Card(title, colName);
  cards.set(title, card);
  addCardToColumn(card, colName);
  return card;
}

export function removeCard(title) {
  // get card
  const card = cards.get(title);
  console.log(card);
  // get col
  const colName = card.colName;
  // remove card from column
  removeCardFromColumn(card, colName);
  // remove card from map
  cards.delete(card.title);
}
