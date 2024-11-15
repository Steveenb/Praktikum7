import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), status: 'To Do' }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
        setEditingTask(null);
    };

    return (
        <div className="app-container d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div
                className="task-manager-container p-4 shadow-lg rounded w-100"
                style={{
                    maxWidth: '800px',    // Maksimal lebar 800px untuk layar besar
                    width: '100%',        // Lebar 100% agar responsif
                    minHeight: '200px',   // Minimum tinggi agar konten tidak terlalu kompak
                    backgroundColor: '#fff', // Latar belakang putih
                    borderRadius: '12px', // Sudut membulat untuk desain yang lebih modern
                }}
            >
                <h1 className="text-center mb-4" style={{ fontSize: '2rem', fontWeight: '600' }}>
                    Management tugas
                </h1>
    
                {/* Daftar tugas yang ada */}
                <TaskList tasks={tasks} deleteTask={deleteTask} setEditingTask={setEditingTask} />
            </div>
        </div>
    );
    
    
    
}

export default App;
