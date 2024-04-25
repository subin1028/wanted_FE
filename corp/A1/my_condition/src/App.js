import React from "react";
// import StarRate from "./shared/components/StarRate";
import Table from "./shared/components/Table";
import {StarMain, StarRate} from "./shared/components/StarRate";
import { RouterProvider } from "react-router-dom";
import router from "./shared/router/router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
