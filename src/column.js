// import addColumnToDOM from './dom';
import { saveColumnData, getColumnData } from './data';

let columns = new Map();

class Column {
  constructor(title) {
    this.title = title;
    this.cards = [];
    // write to DOM
    // addColumnToDOM(this.title);
  }

  addCard = (card) => this.cards.push(card);

  removeCard = (cardToRemove) => {
    const index = this.cards.indexOf(cardToRemove);
    if (index > -1) {
      this.cards.splice(index, 1);
    }
  };

  changeTitle = (newTitle) => {
    this.title = newTitle;
  };
}

function getColumn(colName) {
  return columns.get(colName);
}

export function removeCardFromColumn(card, colName) {
  const col = getColumn(colName);
  col.removeCard(card);
  saveColumnData(columns);
}

export function addCardToColumn(card, colName) {
  // get column
  const column = getColumn(colName);
  // console.log(column);
  column.addCard(card);
  saveColumnData(columns);
}

export function getColNumber() {
  return columns.size;
}

function createColumn(title) {
  const col = new Column(title);
  return col;
}

export function initColumns(startColumnName, save = true) {
  const col = createColumn(startColumnName);
  columns.set(startColumnName, col);
  if (save) saveColumnData(columns);
  return col;
}
