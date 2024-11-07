import { Task, Todo } from "./interfaces"

const tasks: Array<Todo> = []

export function addTaskToList(name: string, table: HTMLTableElement ){
    const task:Task = {id: "task-"+tasks.length, name}
    const todo:Todo = { 
        task, 
        status: 'scheduled', 
        priority: 'medium' 
    }

    tasks.push(todo)
    table.getElementsByTagName("tbody")[0].appendChild(HtmlTrItem(todo));
    
}

function HtmlTrItem(todo: Todo){
    const row = document.createElement('tr');
    const rowId = todo.task.id
    row.setAttribute("id", rowId)

    const changeStatusElement = document.createElement('td');
    const nameElement = document.createElement('td')
    const statusElement = document.createElement('td')
    const deleteElement = document.createElement('td')
    
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("btn","btn-sm","btn-error","text-white")
    deleteButton.addEventListener('click', () => deleteTask(rowId))
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'

    const statusCheckbox = document.createElement("input")
    statusCheckbox.setAttribute("type","checkbox")
    statusCheckbox.classList.add("checkbox")
    statusCheckbox.addEventListener('change', () => updateStatus(rowId))
    
    changeStatusElement.append(statusCheckbox)
    nameElement.appendChild(document.createTextNode(`${todo.task.name}`))
    statusElement.innerHTML = `<div class="badge badge-outline">${todo.status}</div>`
    deleteElement.append(deleteButton)
    row.appendChild(changeStatusElement)
    row.appendChild(nameElement)
    row.appendChild(statusElement)
    row.appendChild(deleteElement)
    return row
}

function deleteTask(id: string){
    document.getElementById(id)?.remove()
}

function updateStatus(id: string){
    const taskItem = tasks.find((item) => String(item.task.id) == id)
    if(taskItem){
        const currentState = taskItem.status
        taskItem.status = taskItem.status === 'scheduled'? 'done':'scheduled'
        
        document.getElementById(id)!.classList.remove('!bg-success')
        document.getElementById(id)!.classList.remove('!bg-opacity-30')
        document.querySelector(`#${id} .badge`)?.classList.remove('badge-primary')

        document.querySelector(`#${id} .badge`)!.innerHTML = taskItem.status

        if(currentState === 'scheduled')
        {
            document.getElementById(id)!.classList.add('!bg-success', '!bg-opacity-30')
            document.querySelector(`#${id} .badge`)?.classList.add('badge-primary')            
        }        
    }
    
}

export function setupAddTaskButton(element: HTMLButtonElement, callback:(...args: any[]) => void) {  
  element.addEventListener('click', (...args) => callback(...args))
}
