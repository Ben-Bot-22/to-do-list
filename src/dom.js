import { createCard, removeCard } from './card';
// import addCardToColumn from './column';
// import addCardToColumn from './index';

// Objects
let activeForm = new Map();

// hide add task button; button is used to create a form
// to collect input form user on a new task
function toggleAddTaskButton() {
  const addTask = activeForm.get('addTaskButton');
  if (addTask.classList.contains('hide')) {
    addTask.classList.remove('hide');
  } else {
    addTask.classList.add('hide');
  }
}

function removeForm() {
  activeForm.get('card').remove();
  activeForm.get('buttonContainer').remove();
  toggleAddTaskButton();
  activeForm.clear();
}

function cardDone(event) {
  // get column
  // remove card from column
  removeCard(
    event.target.parentNode
      .querySelector('#title-input')
      .getAttribute('data-title')
  );
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

function createCardDOM(card) {
  //     <div class="to-do-card round">
  //     <input type="checkbox" name="task-0" />
  //     <label for="task-0">First task</label>
  //   </div>
  // create
  const cardDiv = document.createElement('div');
  const checkbox = document.createElement('input');
  const title = document.createElement('input');
  // add attributes
  cardDiv.classList.add('to-do-card');
  cardDiv.classList.add('round');
  checkbox.setAttribute('type', 'checkbox');
  title.setAttribute('id', 'title-input');
  title.setAttribute('data-title', card.title);
  // DOM
  title.value = card.title;
  // render
  cardDiv.appendChild(checkbox);
  cardDiv.appendChild(title);
  // event listeners
  checkbox.addEventListener('click', cardDone);
  // save input change in card.js
  return cardDiv;
}

//  Add card to column array
function createNewCard(event) {
  const dataColumn = event.target.parentNode.parentNode;
  // console.log(event.target.parentNode.parentNode.getAttribute('data-column')); // add button
  const cardTitle = document.getElementById('card-title');
  const card = createCard(
    cardTitle.value,
    event.target.parentNode.parentNode.getAttribute('data-column')
  );
  // add card to HTML
  const cardDOM = createCardDOM(card);
  const children = dataColumn.getElementsByTagName('div');
  // 1st child is name of column, second child is container for cards,
  // last child is add task button
  children[1].appendChild(cardDOM);
  removeForm();
}

export function loadCard(title, colName) {
  // get parent node matching column name
  const dataColumn = document.querySelector(`[data-column='${colName}']`);
  console.log(dataColumn);
  const card = createCard(title, colName);
  // add card to HTML
  const cardDOM = createCardDOM(card);
  const children = dataColumn.getElementsByTagName('div');
  // 1st child is name of column, second child is container for cards,
  // last child is add task button
  children[1].appendChild(cardDOM);
}

function cancelNewCard() {
  removeForm();
}

function createCardForm(event) {
  //     <div class="to-do-card" id="form">
  //     <form method="get">
  //       <input placeholder="task name" id="card-title" required />
  //     </form>
  //   </div>
  //   <div id="card-btns">
  //     <button id="card-cancel-btn">Cancel</button>
  //     <button type="submit" id="card-add-btn">Add</button>
  //   </div>
  const dataColumn = event.target.parentNode.getAttribute('data-column');
  // console.log(dataColumn);
  // console.log(
  //   document.querySelector(`[data-column=${dataColumn}] button:first-of-type`)
  // );
  const columnParent = event.target.parentNode;
  const card = document.createElement('div');
  const formCard = document.createElement('form');
  const inputTitle = document.createElement('input');
  const buttonContainer = document.createElement('div');
  const buttonCancel = document.createElement('button');
  const buttonAdd = document.createElement('button');

  // add inner html
  buttonCancel.innerHTML = 'Cancel';
  buttonAdd.innerHTML = 'Add';

  // add classes
  card.classList.add('to-do-card');
  card.setAttribute('id', 'form');
  inputTitle.setAttribute('placeholder', 'Task name');
  inputTitle.setAttribute('id', 'card-title');
  inputTitle.required = true;
  inputTitle.setAttribute('autocomplete', 'off');
  buttonContainer.setAttribute('id', 'card-btns');
  buttonCancel.setAttribute('id', 'card-cancel-btn');
  buttonAdd.setAttribute('type', 'submit');
  buttonAdd.setAttribute('id', 'card-add-btn');

  // append children
  columnParent.appendChild(card);
  card.appendChild(formCard);
  formCard.appendChild(inputTitle);
  columnParent.appendChild(buttonContainer);
  buttonContainer.appendChild(buttonCancel);
  buttonContainer.appendChild(buttonAdd);

  // focus
  inputTitle.focus();
  inputTitle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      // e.preventDefault();
      createNewCard();
    }
  });

  // button event listeners
  buttonAdd.addEventListener('click', createNewCard);
  buttonAdd.column = event.target.columnName;
  buttonCancel.addEventListener('click', cancelNewCard);

  // save active form in map
  activeForm.set('card', card);
  activeForm.set('buttonContainer', buttonContainer);
  // document.querySelector(`[data-column='${dataColumn}'] button:first-of-type`)
  activeForm.set(
    'addTaskButton',
    document.querySelector(`[data-column='${dataColumn}'] #add-task`)
  );

  // hide create new button (generates form)
  toggleAddTaskButton();
}

function editTitle(event) {
  console.log(event.target.innerHTML);
}

export function addColumnToDOM(colObject) {
  // <div data-column="0" class="column">
  // <div class="column-title">Inbox</div>
  // <div id="column-cards">
  //   <div class="to-do-card round">
  //     <input type="checkbox" name="task-0" />
  //     <label for="task-0">First task</label>
  //   </div>
  // </div>
  // <button class="add-task-btn">+ add task</button>
  // </div>
  const columnContent = document.querySelector('.column-content');
  // Create
  const parentDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const cardParentDiv = document.createElement('div');
  const addButton = document.createElement('button');
  // Add html
  titleDiv.innerHTML = colObject.title;
  addButton.innerHTML = '+ add task';
  // Add attributes
  parentDiv.setAttribute('data-column', colObject.title);
  parentDiv.classList.add('column');
  titleDiv.classList.add('column-title');
  cardParentDiv.setAttribute('id', 'column-cards');
  addButton.classList.add('add-task-btn');
  addButton.setAttribute('id', 'add-task');
  // Append
  columnContent.appendChild(parentDiv);
  parentDiv.appendChild(titleDiv);
  parentDiv.appendChild(cardParentDiv);
  parentDiv.appendChild(addButton);
  // Listeners
  // titleDiv.addEventListener('click', editTitle);
  addButton.addEventListener('click', createCardForm);
  addButton.columnName = colObject.title;
}
