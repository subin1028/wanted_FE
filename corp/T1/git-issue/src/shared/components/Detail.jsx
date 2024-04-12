import React from "react";
import './App.css';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "./redux/slices/todo";

const Detail = (props) => {
    const navigate = useNavigate();
    const [newTodo, setNewTodo] = React.useState("");
    const prop = useParams();
    // const todo_arr = useSelector((state) => state.todo.todo_arr);
    // const dispatch = useDispatch();

    return(
        <>
            <div id='div-list'>
                <button className="back-btn" onClick={() => navigate(-1)}>뒤로가기</button>
                <h1 id="title">내 버킷리스트</h1>
                <hr/>
                <div className="detail">
                    <h2>{prop.id}번 수정 페이지입니다!</h2>
                    {/* <h3>현재 텍스트: {todo_arr[prop.id]}</h3> */}
                </div>
            </div>
            <div id='div-input'>
                <input type="text" placeholder="입력하기.." required value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}}/>
            </div>
        </>
    )
}

export default Detail;