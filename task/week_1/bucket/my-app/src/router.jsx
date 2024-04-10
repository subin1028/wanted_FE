import {createBrowserRouter} from "react-router-dom";
import React from "react";

import Home from "./Home";
import Detail from "./Detail";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },
    {
        path:"/detail/:name",
        element: <Detail />,
    },
]);

export default router;

//추가적인 설정은 react-router-dom이 해줄거예요