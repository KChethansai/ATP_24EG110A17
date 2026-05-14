//task helpers
import { addTask, getAllTask, completeTask } from './task.js'

//add tasks with title, priority, and due date
addTask('Coding', 'high', '12-12-2024')
addTask('Gaming', 'high', '28-02-2026')
addTask('Projects', 'high', '28-02-2026')

//mark Gaming task as complete
completeTask('Gaming')

//fetch and display all tasks
const t = getAllTask()
console.log(t)
