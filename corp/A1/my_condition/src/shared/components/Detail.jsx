import React, {useState} from 'react'
import { StarRate } from './StarRate'
import { useParams } from 'react-router-dom';
import { updateData } from '../network/axios';


const Detail = () => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const [rate, setRate] = useState(0);
    const { id, day } = useParams();
    const wday = daysOfWeek[day.slice(1)];
    const wid = id.slice(1);
  return (
    <>
        <div>{wday}요일 평점 매기기</div>
        <p>{wday}</p>
        <StarRate rate={rate} setRate={setRate}/>
        <button onClick={() => {updateData(wid, rate)}}>저장하기</button>
    </>
    
  )
}

export default Detail