import createToDo from './create-to-do';
import createColumn from './create-column';
import './dom';

let columns = new Map();

/*
TODO:

-- save data: cards
-- save data: column card array

- Disappear on checkbox change (remove from dom & remove from column)
- Add to completed array (filter)

POLISH
-- make form submittal work on pressing enter
-- Form add button create task (disabled if no text)


- Add new column - anonomous list counting (JS)

- Re-order to do by dragging

- Change column title with click
- Add new column UI
- Add new column JS
- Re-order column by dragging horizontally
- Move todos between columns (projects)

- Expand new to do form
-- task title, task description, dueDate, priority, project, column

-- Confetti on complete to do; Flash Flash warning before busting
-- save to completed filter

- You should separate your application logic (i.e. creating new todos, setting 
    todos as complete, changing todo priority etc.) from the DOM-related stuff, 
    so keep all of those things in separate modules.
-- Refactor code
--- Remove globals to max extent
--- Modules are SOLID

- view all todos in each project (probably just the title and duedate)
- changing color for different priorities
- expand a single todo to see/edit its details
- delete a todo

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
- date-fns for formatting and manipulating dates and times.
- User authentication
- Firebase BaaS

*/
