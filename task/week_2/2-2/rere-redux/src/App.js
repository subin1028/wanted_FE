import './App.css';
import React from 'react';
import { Home,Cat, Dog } from './Component';
import {addCat} from "./redux/modules/cat";
//리덕스는요 훅을 제공해줍니다
// 데이터를 갖다쓰는 훅을 useSelector
//변경 요청 보내는 애를 useDispatch
import {useSelector,useDispatch} from "react-redux";


function App() {

  //state중 뭘 가져올 지 정해주는 함수가 필요해요
  const myStoreData = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(myStoreData);

  return (
    <div className="App">
      <button onClick={() => {
        dispatch(
          addCat("펄이2"),
        )
      }}>추가할래!!</button>
      <Home />
      <Cat />
      <Dog />
    </div>
  );
}

export default App;
