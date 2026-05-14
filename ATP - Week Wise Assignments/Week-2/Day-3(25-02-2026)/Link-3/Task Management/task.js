//validator helpers
import {
  validateDueDate,
  validatePriority,
  validateTitle
} from './validator.js'

const tasks = []

//add task if all fields are valid
function addTask(title, priority, dueDate) {
  if (
    !validateTitle(title) &&
    !validatePriority(priority) &&
    !validateDueDate(dueDate)
  ) {
    return 'Invalid task'
  }
  tasks.push({ title, priority, dueDate })
  return true
}

//return all tasks
function getAllTask() {
  return tasks
}

//remove task by title
function completeTask(task) {
  for (let name in tasks) {
    if (tasks[name].title === task) {
      tasks.splice(name, 1)
    }
  }
}

export { addTask, getAllTask, completeTask }
