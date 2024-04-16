import React from 'react';
import { DataContext } from './shared/context/context';
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
