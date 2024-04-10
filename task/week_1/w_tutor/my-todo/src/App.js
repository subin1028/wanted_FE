import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const Card = (props) => {
  return (
    <div>
      <p>내용</p>
      <button>완료</button>
    </div>
  )
}

const InputArea = (props) => {
  return (
    <div>
      <input type="text"/>
      <button onClick={() => {
      }}>추가하기</button>
    </div>
  );
};

function App() {
  const [todoList, setTodoList] = useState(["dj", "df"]);

  const addTodo = (item) => {
    setTodoList([...todoList, item]);
  };

  return (
    <div className="App">
        <h1>오늘 할 일 </h1>
        <div style={{display:"flex", alignItems: "center",}}>
        {todoList.map((todo) => {
          return <Card contents={todo}/>;
          })}</div>
      <InputArea addTodoFn = {addTodo}/>
    </div>
  );
}

export default App;
