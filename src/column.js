// import addColumnToDOM from './dom';

let columns = new Map();

class Column {
  constructor(title) {
    this.title = title;
    this.cards = [];
    // write to DOM
    // addColumnToDOM(this.title);
  }

  addCard = (card) => this.cards.push(card);

  changeTitle = (newTitle) => {
    this.title = newTitle;
  };
}

function getColumn(colName) {
  return columns.get(colName);
}

export function addCardToColumn(card, colName) {
  // get column
  const column = getColumn(colName);
  column.addCard(card);
}

function createColumn(title) {
  const col = new Column(title);
  // addColumnToDOM(col);
  return col;
}

export function initColumns(startColumnName) {
  const col = createColumn(startColumnName);
  columns.set(startColumnName, col);
  return col;
}