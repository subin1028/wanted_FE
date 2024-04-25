import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import {getInfo, addDays} from '../network/axios';
import {StarMain} from '../components/StarRate';
import makeDay from './makeDay';
import { addRating } from '../store/redux_slice';

const Table = () => {
    const dispatch = useDispatch();
    const date_arr = useSelector((state) => state.redux_slice.date_arr);
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const [table, setTable] = useState([]);

    React.useEffect(() => {
        addDays();
        const fetchData = async () => {
            const response = await getInfo(); 
            console.log(response.data); 
            setTable(response.data);
            dispatch(addRating(response.data.slice(-7)));
        };
        fetchData();
        
    }, []);

  return (
    <>
        <h2>일주일 컨디션</h2>
        {/* {table && table.map((item, idx) => (
            <MainBlock key={idx}>
                <p>{item.date}</p>
                {item.rate? (<StarMain rate={item.rate}/>):(<p>-</p>)}
                <button>수정</button>
            </MainBlock>
        ))} */}

        <TableContainer>
            <tbody>
                {date_arr && Object.values(date_arr).map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{daysOfWeek[makeDay(item.date)]}</TableCell>
                        <TableCell>{item.rate ? <StarMain rate={item.rate} /> : '-'}</TableCell>
                        <TableCell><Link to={`/detail/:${item.id}/:${makeDay(item.date)}`}><div>수정</div></Link></TableCell>
                    </TableRow>
                ))}
            </tbody>
        </TableContainer>

    </>
  )
}

const MainBlock = styled.div`
    display:flex;
    flex-direction: row;
`;

const TableContainer = styled.table`
    border-collapse: collapse;
    width: 45vmax;
    text-align: center;
    margin: auto;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
    margin: auto;
    height: 8vmin;
`;

const TableCell = styled.td`
    padding: 8px;
    margin: auto;
    text-align: center;
    justify-content: center;
`;

export default Table