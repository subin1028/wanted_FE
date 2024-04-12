import React, { useState, useEffect, useContext } from "react";
import { callApi } from '../network/axios_api';

const userContext = React.createContext();

function DataContext({children}) {
    const [useDetail, SetUserDetail] = useState([]);
    useEffect(() => {
        callApi().then(result => {SetUserDetail(result[0])});
    }, []);

    return (
        <userContext.Provider value={[useDetail, SetUserDetail]}>
            {children}
        </userContext.Provider>
    )
}

export {DataContext, userContext};
