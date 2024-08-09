class Todo {
    id: string;
    text: string;
    completed: boolean;

    constructor(todoText: string) {
        this.text = todoText
        this.id = new Date().toISOString()
        this.completed = false
    }
}

export default Todo;