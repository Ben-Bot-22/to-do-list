import createToDo from './create-to-do';

const addTask = document.querySelector('.add-task-btn');
const column = document.querySelector('.column');

// Objects
let activeForm = new Map();

// hide button used to create form
function toggleNewTaskButton() {
  if (addTask.classList.contains('hide')) {
    addTask.classList.remove('hide');
  } else {
    addTask.classList.add('hide');
  }
}

function removeForm() {
  activeForm.get('card').remove();
  activeForm.get('buttonContainer').remove();
  activeForm.clear();
  toggleNewTaskButton();
}

function createCardDOM(card) {
  //     <div class="to-do-card round">
  //     <input type="checkbox" name="task-0" />
  //     <label for="task-0">First task</label>
  //   </div>
  // create
  const cardDiv = document.createElement('div');
  const checkbox = document.createElement('input');
  const title = document.createElement('label');
  // add attributes
  cardDiv.classList.add('to-do-card');
  cardDiv.classList.add('round');
  checkbox.setAttribute('type', 'checkbox');
  // DOM
  title.innerHTML = card.title;
  // render
  cardDiv.appendChild(checkbox);
  cardDiv.appendChild(title);
  return cardDiv;
}

function createNewTask() {
  let cardTitle = document.getElementById('card-title');
  let card = createToDo(cardTitle.value);
  // add card to HTML
  const cardDOM = createCardDOM(card);
  // get column with correct dataset attribute
  const columns = document.querySelectorAll('div[data-column]');
  const activeColumn = Array.from(columns).filter(
    (col) => col.getAttribute('data-column') === '0'
  );
  // add to column card array
  const colDiv = activeColumn[0];
  const children = colDiv.getElementsByTagName('div');
  // 1st child is name of column, second child is container for cards, last child is add task button
  children[1].appendChild(cardDOM);
  removeForm();
}

function cancelNewTask() {
  removeForm();
}

function createForm() {
  //     <div class="to-do-card" id="form">
  //     <form method="get">
  //       <input placeholder="task name" id="card-title" required />
  //     </form>
  //   </div>
  //   <div id="card-btns">
  //     <button id="card-cancel-btn">Cancel</button>
  //     <button type="submit" id="card-add-btn">Add</button>
  //   </div>
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
  buttonContainer.setAttribute('id', 'card-btns');
  buttonCancel.setAttribute('id', 'card-cancel-btn');
  buttonAdd.setAttribute('type', 'submit');
  buttonAdd.setAttribute('id', 'card-add-btn');

  // append children
  column.appendChild(card);
  card.appendChild(formCard);
  formCard.appendChild(inputTitle);
  column.appendChild(buttonContainer);
  buttonContainer.appendChild(buttonCancel);
  buttonContainer.appendChild(buttonAdd);

  // focus
  inputTitle.focus();

  // button event listeners
  buttonAdd.addEventListener('click', createNewTask);
  buttonCancel.addEventListener('click', cancelNewTask);

  // save active form in map
  activeForm.set('card', card);
  activeForm.set('buttonContainer', buttonContainer);

  // hide create new button (generates form)
  toggleNewTaskButton();
}

addTask.addEventListener('click', createForm);
