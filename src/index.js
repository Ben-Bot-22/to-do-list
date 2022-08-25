import { initColumns as initColumn } from './column';
import addColumnToDOM from './dom';

const startColumnName = 'Inbox';
addColumnToDOM(initColumn(startColumnName));
// const secondColumn = 'Inbox 2';
// addColumnToDOM(initColumn(secondColumn));

// # sourceMappingURL=/dist/app.js.map

/*
TODO:

NEW COLUMNS
- + column button is 100% height
- Add new column button functionality
-- List counting Column 2

GIT!!

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
