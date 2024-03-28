import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [divList, setDivlist] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setDivlist(JSON.parse(savedTodos));
    }
  }, []);

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

  const removeTodo = (r_index) => {
    const updatedList = divList.filter((_, index) => index !== r_index);
    setDivlist(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
  };

  return (
    <div>
      <h3>오늘 할 일</h3>
      <div id="form_todo">
          <div id="list_todo">
              {divList.length === 0 && <p className='center'>할 일이 없습니다.</p>}
              {divList.map((item, index) => (
                <div key={index} className='box_todo'>
                  {item}
                  <button onClick={() => removeTodo(index)}>완료</button>
                </div>
              ))}
          </div>
          <div id="form_submit">
              <input type="text" placeholder="입력하기.." value={todo} onChange={writeSome} required/>
              <button onClick={addTodo}>추가하기</button>
          </div>
      </div>
    </div>
  );
}

export default App;