export interface Task{
    id: string,
    name: string
}

export interface Todo{
    task: Task,
    priority: 'high' | 'medium' | 'low'
    status: 'scheduled' | 'done'
}