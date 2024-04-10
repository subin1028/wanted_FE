import {useState} from 'react';
import './App.css';
import {RouterProvider, Link} from "react-router-dom";
import router from "./router";
import Home from './Home';


function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
