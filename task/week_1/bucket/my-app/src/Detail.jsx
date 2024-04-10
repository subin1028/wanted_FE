import React from "react";
import './App.css';
import { useParams } from "react-router-dom";

const Detail = (props) => {

    return (
        <>
        <div className="App">
            <div className='up-box high'>
                <h2 id="title">내 버킷리스트</h2>
                <hr className='hr'/>
                <h2 className="detail">상세 페이지입니다!</h2>
            </div>
            <div className='ip-btn'>
                <input type="text" placeholder="입력하기.." required/>
                <button>추가하기</button>
            </div>
        </div>
        </>
    )
}

export default Detail;