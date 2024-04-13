import React, { useState, useEffect, useContext } from "react";
import { callApi } from '../network/axios_api';

const userContext = React.createContext();

function DataContext({children}) {
    const [useDetail, SetUserDetail] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async(pageNum) => {
        try{
            const response = await callApi(pageNum);
            SetUserDetail(prevData => [...prevData, ...response[0]]);
        } catch(e){
            console.log("error >> ", e);
        }
    }

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    return (
        <userContext.Provider value={[useDetail, SetUserDetail]}>
            {children}
        </userContext.Provider>
    )
}

export {DataContext, userContext};
