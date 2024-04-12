import './App.css';
import React, {useContext} from 'react';
import { DataContext } from './shared/context/context';
import styled from "styled-components"
import Headers from './shared/components/Headers';
import Card from './shared/components/Card';
import TCards from './shared/components/T_Card';


function App() {
  
  return (
      <div className="App">
        <DataContext>
          <Headers/>
          <TCards/>
        </DataContext>
      </div>
  );
}

export default App;
