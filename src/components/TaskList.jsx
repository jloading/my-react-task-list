import React, { useState } from 'react';

function TaskList({ tasks, onAddTask, onDeleteTask, onEditTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        onAddTask(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <div>
                <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button onClick={handleAdd}>Add Task</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <button onClick={() => onEditTask(task.id, "New Title", "New Description")}>Edit</button>
                        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
