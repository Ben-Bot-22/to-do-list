import createToDo from './create-to-do';
import createColumn from './create-column';

/*
TODO:

- Create new to do in UI (JS)
- Design code architecture

- Disappear on checkbox change
- Add new column - anonomous list counting (JS)

- Re-order to do by dragging

- Change column title with click
- Add new column UI
- Add new column JS
- Re-order column by dragging horizontally
- Move todos between columns (projects)

- Expand new to do form
-- task title, task description, dueDate, priority, project, column

- Inbox is default project

-- Confetti on complete to do; Flash Flash warning before busting
-- save to completed filter

- You should separate your application logic (i.e. creating new todos, setting 
    todos as complete, changing todo priority etc.) from the DOM-related stuff, 
    so keep all of those things in separate modules.

- view all todos in each project (probably just the title and duedate)
- changing color for different priorities
- expand a single todo to see/edit its details
- delete a todo

- adding external libraries from npm is a cinch! 
You might want to consider using the following useful library in your code:
- date-fns for formatting and manipulating dates and times.

- add some persistence to this todo app using the Web Storage API.
- localStorage (docs here) allows you to save data on the user’s computer. 
- Set up a function that saves the projects (and todos) to localStorage 
every time a new project (or todo) is created, and another function 
that looks for that data in localStorage when your app is first loaded. 

- Make sure your app doesn’t crash if the data you may want retrieve isn’t there!
- localStorage uses JSON to send and store data, and when you retrieve the data, 
it will also be in JSON format. Keep in mind you cannot store functions in JSON,
so you’ll have to figure out how to add methods back to your object properties
once you fetch them.

*/
