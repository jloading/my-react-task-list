import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initialTasks);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title, description) => {
        const newTask = {
            id: Date.now(),
            title,
            description,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const editTask = (id, newTitle, newDescription) => {
        const updatedTasks = tasks.map(task => 
            task.id === id ? { ...task, title: newTitle, description: newDescription } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="app">
            <Header />
            <TaskList tasks={tasks} onAddTask={addTask} onDeleteTask={deleteTask} onEditTask={editTask} />
        </div>
    );
}

export default App;
