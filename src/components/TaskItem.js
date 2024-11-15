import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import './TaskItem.css';

function TaskItem({ task, deleteTask, setEditingTask }) {
    return (
        <div className="task-item d-flex align-items-center justify-content-between p-3 mb-3 shadow-sm rounded">
            <div>
                <h5 className="task-title mb-1">{task.title}</h5>
                <div className="d-flex align-items-center">
                    <span className={`badge ${getPriorityClass(task.priority)} me-2`}>
                        Priority: {task.priority}
                    </span>
                    <span className={`badge ${getStatusClass(task.status)}`}>
                        Status: {task.status}
                    </span>
                </div>
            </div>
            <div className="task-actions">
                <button onClick={() => setEditingTask(task)} className="btn btn-outline-primary btn-sm me-2">
                    <FiEdit /> Edit
                </button>
                <button onClick={() => deleteTask(task.id)} className="btn btn-outline-danger btn-sm">
                    <FiTrash2 /> Delete
                </button>
            </div>
        </div>
    );
}

function getPriorityClass(priority) {
    switch (priority) {
        case 'High': return 'bg-danger text-white';
        case 'Medium': return 'bg-warning text-dark';
        case 'Low': return 'bg-success text-white';
        default: return '';
    }
}

function getStatusClass(status) {
    switch (status) {
        case 'To Do': return 'bg-secondary text-white';
        case 'In Progress': return 'bg-info text-white';
        case 'Done': return 'bg-primary text-white';
        default: return '';
    }
}

export default TaskItem;
