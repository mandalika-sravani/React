import styles from './to_do.module.css';
import React, {useState} from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Take shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function  moveTaskUp(index) {
        
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {

        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div className={styles.to_do_list}>
            <h1>To-Do-List</h1>

            <div>
                <input className={styles.input}
                    type="text" 
                    value={newTask} 
                    placeholder="Enter a Task"
                    onChange={handleInputChange}
                />
                <button onClick={addTask} className={styles['add-button']}>
                    Add Task
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className={styles.text}>{task}</span>
                        <button 
                            className={styles['delete-button']} 
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button 
                            className={styles['move-button']} 
                            onClick={() => moveTaskUp(index)}
                        >
                            ☝
                        </button>
                        <button 
                            className={styles['move-button']} 
                            onClick={() => moveTaskDown(index)}
                        >
                            👇
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList