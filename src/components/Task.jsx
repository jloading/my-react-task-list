import React from 'react';

function Task({ task, onToggleStatus }) {
    return (
        <div className="task-item">
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={onToggleStatus}
            />
            <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                {task.name}
            </span>
        </div>
    );
}

export default Task;
