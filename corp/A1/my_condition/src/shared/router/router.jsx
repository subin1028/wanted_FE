import {createBrowserRouter} from "react-router-dom";
import React from "react";

import Table from "../components/Table";
import Detail from "../components/Detail";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Table />,
    },
    {
        path:"/detail/:id/:day",
        element: <Detail />,
    },
]);

export default router;