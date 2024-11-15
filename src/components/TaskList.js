import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    // Fungsi untuk menambahkan tugas baru dengan status default 'To Do'
    const addTask = (taskData) => {
        setTasks([
            ...tasks,
            { ...taskData, id: Date.now(), status: taskData.status || 'To Do' },  // Status default adalah 'To Do'
        ]);
    };

    // Fungsi untuk memperbarui tugas yang ada
    const updateTask = (updatedTaskData) => {
        setTasks(
            tasks.map((task) => (task.id === updatedTaskData.id ? updatedTaskData : task))
        );
    };

    // Fungsi untuk menghapus tugas berdasarkan ID
    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div>
            <TaskForm
                addTask={addTask}
                editingTask={editingTask}
                updateTask={updateTask}
            />
            <div className="task-list mt-4">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        setEditingTask={setEditingTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
