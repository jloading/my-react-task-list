// src/components/TaskList.js
import React from 'react';
import Task from './Task';

function TaskList({ tasks, onToggleTask }) {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onToggleStatus={() => onToggleTask(task.id)}
                />
            ))}
        </div>
    );
}

export default TaskList;
