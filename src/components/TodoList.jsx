import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function TodoList() {

    // State Array which hold all todos

    const [todos, setTodos] = useState([]);

    // Add todo to list
    const addTask = task => {
        if(!task.text){
            return
        }

        const newTodos = [task, ...todos];
        setTodos(newTodos);
        // both are same meaning above and below
        // const oldTask = todos;
        // todos.push(task);
    }

    //Remove todo from list

    const removeTask = id => {
        let updateTask = [...todos].filter(task => task.id !== id);
        setTodos(updateTask);
    }

    //Task is complete;

    const completeTask = id => {
        let updateTask = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updateTask);
    }

  return (
    <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todo>
    </div>
  )
}
