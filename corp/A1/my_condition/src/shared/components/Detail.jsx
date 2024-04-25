import React, {useState} from 'react'
import { StarRate } from './StarRate'
import { useParams, useNavigate } from 'react-router-dom';
import { updateData } from '../network/axios';
import styled from 'styled-components';

const Detail = () => {
  const navigate = useNavigate();
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const [rate, setRate] = useState(0);
    const { id, day } = useParams();
    const wday = daysOfWeek[day.slice(1)];
    const wid = id.slice(1);
  return (
    <>
        <CenterH3>{wday}요일 평점 매기기</CenterH3>
        <Columndiv>
          <Tablep>{wday}</Tablep>
          <StarRate rate={rate} setRate={setRate}/>
        </Columndiv>
        <Savebtn onClick={() => {updateData(wid, rate); navigate(-1)}}>저장하기</Savebtn>
    </>
    
  )
};

const CenterH3 = styled.h3`
  text-align: center;
  margin-bottom: 5vh;
`;

const Columndiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 33%;
  margin: auto;
  justify-content: center;
`

const Tablep = styled.p`
  margin-right: 10px;
  line-height: 5vmin;
  font-size: 1.2em;
`;

const Savebtn = styled.button`
  display: flex;
  margin: 2vh auto auto auto;
  background-color: #ffe595;
  color: black;
  border-radius: 5px;
  height: 4vh;
  width: auto;
  line-height: 4vh;
  justify-content: center;
  border: none;
  padding: 0 2vw;
`;

export default Detail