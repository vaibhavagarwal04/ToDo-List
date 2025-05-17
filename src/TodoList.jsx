import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        setTodos((prevTodo) => {
            return [...prevTodo, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (events) => {
        setNewTodo(events.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) =>
            todos.filter((prevTodos) => prevTodos.id !== id)
        );
    };

    // let upperCaseAll = () => {
    //     setTodos((prevTodos) =>
    //         prevTodos.map((prevTodos) => {
    //             return { ...prevTodos, task: prevTodos.task.toUpperCase() };
    //         })
    //     );
    // };

    // let upperCase = (id) => {
    //     setTodos((prevTodos) =>
    //         prevTodos.map((todo) => {
    //             if (todo.id === id) {
    //                 return {
    //                     ...todo,
    //                     task: todo.task.toUpperCase(),
    //                 };
    //             } else {
    //                 return {
    //                     ...todo,
    //                 };
    //             }
    //         })
    //     );
    // };

    let markAllDone = () => {
        setTodos(
            todos.map((todo) => {
                return {
                    ...todo,
                    done: true,
                };
            })
        );
    };

    let markDone = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        done:true,
                    };
                }
                else return todo
            })
        );
    };
    return (
        <div>
            <h2 style={{textDecoration:"underline wavy"}}>Todo List </h2>
            <input style={{height:"30px",width:"200px"}}
                placeholder="add a task"
                onChange={updateTodoValue}
                value={newTodo}
                />
            <br />
            <br />
            <button onClick={addTask}>Add Task</button>
            <br />
            <h4 style={{textDecoration:"underline"}}>Tasks</h4>
            <ul style={{border:"2px solid white",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly"
            }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.done ? "line-through" : "none",
                            display:"flex",
                            justifyContent:"space-evenly",
                            margin:"20px",
                            fontWeight:"bold",
                        }}
                    >
                        <span style={{fontSize:"25px"}}>{todo.task} : </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>
                            delete
                        </button>
                        {/* <button onClick={()=>upperCase(todo.id)}>To-Upper-Case</button> */}
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => markDone(todo.id)} >
                            Mark-Done
                        </button>
                    </li>
                ))}
            </ul>
            <br />
            <br />
            {/* <button onClick={upperCaseAll}>Upper-case</button> */}
            <button onClick={markAllDone}>Mark-All-Done</button>
        </div>
    );
}
