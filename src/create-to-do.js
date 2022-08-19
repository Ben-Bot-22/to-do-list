export default function createToDo(
  title,
  description,
  dueDate,
  priority,
  project,
  column
) {
  return {
    title,
    description,
    dueDate,
    priority,
    project,
    column,
  };
}
