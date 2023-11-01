
import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Curso Ada', completed: false },
        { id: 2, name: 'Mi primera lista', completed: false },
        { id: 3, name: 'Probando', completed: false },
        { id: 4, name: 'Laboratorio 1', completed: false }
    ]);

    const toggleTaskStatus = (id) => {
        const updatedTasks = tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="app">
            <Header />
            <TaskList tasks={tasks} onToggleTask={toggleTaskStatus} />
        </div>
    );
}

export default App;
