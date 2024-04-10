import {useState} from "react";
import {RouterProvider, Link} from "react-router-dom";
import './App.css';

const Home = (props) => {
    const [todo, setTodo] = useState("");
    const [divList, setDivlist] = useState([]);

    const writeSome = (event) => {
        setTodo(event.target.value);
    };

    const addTodo = () => {
        if (todo !== ""){
        const updatedList = [...divList, todo];
        setDivlist(updatedList);
        localStorage.setItem('todos', JSON.stringify(updatedList));
        setTodo('');
        }
    };
    
    return (
        <div className="App">
            <div className='up-box'>
                <h2 id="title">내 버킷리스트</h2>
                <hr className='hr'/>
                <div className='todo'>
                {divList.map((item, index) => (
                            <Link to={`/detail/:${item}`} key={index} className="link"><div className='box_todo'>
                            {item}
                            </div></Link>
                        ))}
                </div>
            </div>
            <div className='ip-btn'>
                <input type="text" placeholder="입력하기.." value={todo} onChange={writeSome} required/>
                <button onClick={addTodo}>추가하기</button>
            </div>
        </div>
  )
}

export default Home;