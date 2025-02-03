import { useState } from "react";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        const taskName = e.target.name.value;
        if (taskName) {
            setTasks([...tasks, { id: Date.now(), name: taskName }]);
            e.target.reset(); 
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const startEditing = (id, currentName) => {
        setEditingId(id);
        setEditedTask(currentName);
    };

    const saveEditedTask = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, name: editedTask } : task));
        setEditingId(null);
        setEditedTask("");
    };

    return (
        <main>
            <section>
                <h2>Add Task</h2>
                <form onSubmit={addTask}>
                    <input type="text" name="name" placeholder="Task Name" required />
                    <button type="submit">Add Task</button>
                </form>
            </section>
            <section>
                <h2>Added Tasks</h2>
                {tasks.length ? (
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Task Name</th>
                                <th>Edit Task</th>
                                <th>Delete Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>
                                        {editingId === task.id ? (
                                            <input
                                                type="text"
                                                value={editedTask}
                                                onChange={(e) => setEditedTask(e.target.value)}
                                            />
                                        ) : (
                                            task.name
                                        )}
                                    </td>
                                    <td>
                                        {editingId === task.id ? (
                                            <button onClick={() => saveEditedTask(task.id)}>Save</button>
                                        ) : (
                                            <button onClick={() => startEditing(task.id, task.name)}>Edit</button>
                                        )}
                                    </td>
                                    <td>
                                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No tasks added yet.</p>
                )}
            </section>
        </main>
    );
};

export default Dashboard;
