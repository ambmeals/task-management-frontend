import React, { useState } from 'react';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [refreshTasks, setRefreshTasks] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleTaskCreated = () => {
        setShowModal(false);
        setRefreshTasks(prev => !prev);
        setSelectedTask(null);
    };

    const handleSelectTask = (task) => {
        setSelectedTask(task);
        setShowModal(true);
    };

    return (
        <div>
            <main className="container py-5">
                <section className="d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row text-center text-md-start">
                    <h1 className="title-text fw-bold">
                        Task Management
                    </h1>
                    <button
                        className="btn btn-create text-dark btn-lg mt-3 mt-md-0"
                        onClick={() => {
                            setSelectedTask(null);
                            setShowModal(true);
                        }}>
                        <i className="bi bi-plus-circle me-2"></i>
                        Create Task
                    </button>
                </section>
                <TaskList onSelectTask={handleSelectTask} refreshTasks={refreshTasks} />
            </main>

            {showModal &&
 (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backdropFilter: 'blur(5px)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title text-white">{selectedTask
                                    ? 'Edit Task'
                                    : 'Create Task'}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        setShowModal(false);
                                        setSelectedTask(null);
                                    }}>
                                </button>
                            </div>
                            <div className="modal-body">
                                <TaskForm
                                    onTaskCreated={handleTaskCreated}
                                    existingTask={selectedTask}
                                    onClose={() => setShowModal(false)}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;