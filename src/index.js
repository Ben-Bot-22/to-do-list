import { initColumns, getColNumber } from './column';
import { addColumnToDOM, loadCard } from './dom';
import { getColumnData } from './data';
// import { createCard } from './card';
// import { initNewColumnButtons } from './add-new-column';

function initNewColumnButtons() {
  const addColButtons = document.querySelectorAll('.add-column-btn');
  addColButtons.forEach((btn) => btn.addEventListener('click', addColumn));
  // console.log(addColButtons.length);
}

// add a new column when click on DOM button
function addColumn() {
  // get col number
  const newColumnName = 'List ' + getColNumber();
  addColumnToDOM(initColumns(newColumnName));
}

function loadData() {
  const data = getColumnData();
  console.log(JSON.stringify(data));
  if (data) {
    // for each column, create column
    for (const column in data) {
      addColumnToDOM(initColumns(column, false));
      console.log(data[column]['cards']);
      data[column]['cards'].forEach((card) => {
        console.log(card.title + ', ' + card.colName);
        // create card
        loadCard(card.title, card.colName);
      });
    }
  } else {
    const startColumnName = 'Inbox';
    addColumnToDOM(initColumns(startColumnName));
  }
}

// localStorage.clear();
// addColumnToDOM(initColumns('T1'));
// addColumnToDOM(initColumns('title_2'));
loadData();
initNewColumnButtons();

/*
TODO:

**Extended**

PRIORITY
- Expand new to do form w/ priority
- changing color for different priorities

POLISH
- Change column title with click
-- Form add button create task (disabled if no text)
- view all todos in each project (probably just the title and duedate)
- expand a single todo to see/edit its details
- delete a todo

NAV
- keep left column on screen - focus on 1 column
-- scroll through with arrow keys

- move columns
- date-fns for formatting and manipulating dates and times.
- User authentication
- BaaS

*/
