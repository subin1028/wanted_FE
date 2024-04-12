import {createBrowserRouter} from "react-router-dom";
import React from "react";

import TCards from "../components/T_Card";
import Detail from "../components/Detail";

const router = createBrowserRouter([
    {
        path:"/",
        element: <TCards />,
    },
    {
        path:"/detail/:id",
        element: <Detail />,
    },
]);

export default router;