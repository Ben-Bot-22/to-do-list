import { addCardToColumn } from './column';

class Card {
  constructor(title) {
    this.title = title;
  }
  //   title
  //   description,
  //   dueDate,
  //   priority,
  //   project,
  //   column
}

export default function createCard(title, colName) {
  const card = new Card(title);
  addCardToColumn(card, colName);
  return card;
}
