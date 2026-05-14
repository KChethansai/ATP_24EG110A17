//check title is present and at least 3 chars
function validateTitle(title) {
  if (!title) return 'Title required'
  if (title.length <= 3) return 'Min 3 char required'
  return 'Title is valid'
}

//check priority is one of the allowed values
function validatePriority(priority) {
  const priorities = ['low', 'medium', 'high']
  return priorities.includes(priority) ? true : 'Invalid priority'
}

//check due date is in the future
function validateDueDate(date) {
  const dueDate = new Date(date)
  const today = new Date()
  return dueDate > today
}

export { validateDueDate, validatePriority, validateTitle }
