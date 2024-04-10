 import React, { useState } from "react";
 import {useSelector, useDispatch} from "react-redux";
 import {addTodo, deleteTodo} from "./redux/slices/todo";
 import { Link } from "react-router-dom";

 const TodoList = () => {
    const [todo, setTodo] = useState("");
    const todo_arr = useSelector((state) => state.todo.todo_arr);
    const dispatch = useDispatch();
    return(
        <>
            <div id="div-list">
                <h1 id="title">내 버킷리스트</h1>
                <hr/>
                {todo_arr.map((todo, index) => {
                    return <div className="todo"><Link to={`detail/${index}`} content={todo} key={index} className="link">
                            <div key={index}>{todo} </div>
                        </Link>
                        <button className="del-btn" onClick={() => {
                                    dispatch(deleteTodo({index}))
                                }}>❌</button> 
                        </div>
                })}
            </div>
            <div id="div-input">
                <input type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} required/>
                <button onClick={() => {
                    if(todo !== ""){
                        dispatch(addTodo(todo));
                        setTodo("");
                    }
                    
                }}>추가하기</button>
            </div>
        </>
    )
 }

 export {TodoList};