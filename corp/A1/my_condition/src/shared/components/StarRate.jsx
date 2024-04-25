import React, { useState } from 'react'
import styled from 'styled-components';
import Star from './Star';

export const StarRate = ({rate, setRate}) => { //detail 화면 별 그리기

    const [mouseOverRate, setMouseOverRate] = useState(0);
    const handleKeyDown = (event) => {
        // 입력된 키가 숫자인지 확인
        if (event.key >= '0' && event.key <= '5') {
            setRate(event.key);
        }
    };

    window.addEventListener('keydown', handleKeyDown);

  return (
    <>
        <StarBox>
            {Array.from({length:5}, (_,i) => {
                return <Star key={i} filled={mouseOverRate ? mouseOverRate >= i+1 : rate >= i+1} onClick={()=>{
                    setRate(i+1);
                }} onMouseEnter={() => setMouseOverRate(i+1)} onMouseLeave={() => setMouseOverRate(0)}/>
            })}
            
        </StarBox>
    </>
  )
};

export const StarMain = (props) => { //메인 화면 별 그리기
  return (
    <>
        <StarBox>
            {Array.from({length:5}, (_,i) => {
                return <Star key={i} filled={props.rate >= i+1}/>
            })}
        </StarBox>
    </>
  )
};

const StarBox = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
`;


// export default {StarRate, StarMain};