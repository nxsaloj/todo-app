import './assets/css/main.css'
import { addTaskToList, setupAddTaskButton } from './todo'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `  
  <div class="p-5">
    <div class="container mx-auto mockup-window bg-base-300 border">
      <div class="join mx-auto">
        <input id="taskName" type="text" placeholder="Type the task name" class="input input-bordered w-full max-w-xs join-item" />
        <button id="addTask" class="btn btn-primary text-white join-item">Add</button>        
      </div>
      <div class="divider"></div>
      <div class="overflow-x-auto">
        <table id="todoList" class="table table-zebra">
          <!-- head -->
          <thead>
            <tr>
              <th>Completed</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>            
          </tbody>
        </table>
      </div>
    </div>  
  </div>
`

const addTaskButton = document.getElementById("addTask") as HTMLButtonElement
const taskNameInput = document.getElementById("taskName") as HTMLInputElement
const todoList = document.getElementById("todoList") as HTMLTableElement

setupAddTaskButton(addTaskButton, ()=>{
  const taskName = taskNameInput.value
  addTaskToList(taskName, todoList)
  taskNameInput.value = ""
})