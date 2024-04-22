import React, { useState } from 'react';
import styled from 'styled-components';
import getInfo from '../network/axios';
import {StarMain} from '../components/StarRate';

const Table = () => {
    const [table, setTable] = useState([]);
    const [rate, setRate] = useState(0);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await getInfo(); 
            console.log(response.data); 
            setTable(response.data);
        };
        fetchData();
    }, []);

    // console.log(table[0].date);

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
                {table && table.map((item, idx) => (
                    <TableRow key={idx}>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.rate ? <StarMain rate={item.rate} /> : '-'}</TableCell>
                        <TableCell><button>수정</button></TableCell>
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
    width: 100%;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

const TableHeader = styled.th`
    padding: 8px;
`;

const TableCell = styled.td`
    padding: 8px;
`;

export default Table