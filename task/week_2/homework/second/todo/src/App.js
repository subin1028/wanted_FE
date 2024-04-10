import './App.css';
import React from 'react';
import { TodoList } from './Components';
import { useDispatch, useSelector } from 'react-redux';
import {RouterProvider, Link} from "react-router-dom";
import router from "./router";

function App() {
  const myStoreData = useSelector((state) => state);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
