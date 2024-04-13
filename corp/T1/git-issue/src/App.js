import React, {useContext} from 'react';
import { DataContext } from './shared/context/context';
import styled from "styled-components"
import Headers from './shared/components/Headers';
import Card from './shared/components/Card';
import TCards from './shared/components/T_Card';
import { RouterProvider } from 'react-router-dom';
import router from "./shared/router/router";


function App() {
  
  return (
      <div className="App">
        <DataContext>
          <RouterProvider router={router}/>
        </DataContext>
      </div>
  );
}

export default App;
