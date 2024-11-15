import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function TaskForm({ addTask, editingTask, updateTask }) {
    const [taskData, setTaskData] = useState({
        title: '',
        priority: 'Low',
        status: 'To Do',  // Status default ketika menambahkan tugas baru
    });
    const [showModal, setShowModal] = useState(false);

    // Menampilkan modal untuk edit tugas jika ada tugas yang diedit
    useEffect(() => {
        if (editingTask) {
            setTaskData(editingTask); // Mengisi formulir dengan data tugas yang sedang diedit
            setShowModal(true);
        }
    }, [editingTask]);

    // Menangani submit form untuk menambah atau memperbarui tugas
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingTask) {
            updateTask(taskData); // Memperbarui tugas jika sedang mengedit
        } else {
            addTask(taskData); // Menambahkan tugas baru
        }
        setTaskData({ title: '', priority: 'Low', status: 'To Do' }); // Mereset data tugas
        setShowModal(false); // Menutup modal
    };

    const handleShow = () => setShowModal(true); // Menampilkan modal untuk tambah tugas
    const handleClose = () => {
        setShowModal(false);
        setTaskData({ title: '', priority: 'Low', status: 'To Do' }); // Mereset data saat menutup modal
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Task
            </Button>

            {/* Modal untuk menambah atau mengedit tugas */}
            <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{editingTask ? 'Edit Task' : 'New Task'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="taskTitle" className="form-label">Task Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="taskTitle"
                                placeholder="Enter task title"
                                value={taskData.title}
                                onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="taskPriority" className="form-label">Priority</label>
                            <select
                                className="form-select"
                                id="taskPriority"
                                value={taskData.priority}
                                onChange={(e) => setTaskData({ ...taskData, priority: e.target.value })}
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="taskStatus" className="form-label">Status</label>
                            <select
                                className="form-select"
                                id="taskStatus"
                                value={taskData.status}
                                onChange={(e) => setTaskData({ ...taskData, status: e.target.value })}
                            >
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        <Button type="submit" variant="primary" className="w-100">
                            {editingTask ? 'Update Task' : 'Add Task'}
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default TaskForm;
