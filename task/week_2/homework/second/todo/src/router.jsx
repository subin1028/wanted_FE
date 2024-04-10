import { createBrowserRouter } from "react-router-dom";
import React from "react";

import Detail from "./Detail";
import { TodoList } from "./Components";

const router = createBrowserRouter([
    {
        path:"/",
        element: <TodoList/>
    },
    {
        path: `/detail/:id`,
        element: <Detail/>
    }
]);

export default router;