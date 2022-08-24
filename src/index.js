import { initColumns as initColumn } from './column';
import addColumnToDOM from './dom';

const startColumnName = 'Inbox';
addColumnToDOM(initColumn(startColumnName));

// const test = 'Inbox 2';
// addColumnToDOM(initColumn(test));

// # sourceMappingURL=/dist/app.js.map

/*
TODO:

EDIT TITLES
- Change column title with click
- Edit card by clicking on card

DEBUG COLUMNS (2 column layout):
- multiline columns
- responsive design - hide first column
- taskButton wonky with 2 columns

NEW COLUMNS
- Add new column button functionality
-- Anonomous list counting (JS)

SAVE
- add some persistence to this todo app using the Web Storage API.
- localStorage (docs here) allows you to save data on the user’s computer.
- Set up a function that saves the projects (and todos) to localStorage
every time a new project (or todo) is created, and another function
that looks for that data in localStorage when your app is first loaded.

-- Make sure your app doesn’t crash if the data you may want retrieve isn’t there!
-- localStorage uses JSON to send and store data, and when you retrieve the data,
it will also be in JSON format. Keep in mind you cannot store functions in JSON,
so you’ll have to figure out how to add methods back to your object properties
once you fetch them.

**Extended**
PRIORITY
- Expand new to do form w/ priority
- changing color for different priorities

POLISH
-- Form add button create task (disabled if no text)
- view all todos in each project (probably just the title and duedate)
- expand a single todo to see/edit its details
- delete a todo

- move columns
- date-fns for formatting and manipulating dates and times.
- User authentication
- BaaS

*/
