import React, { useState } from 'react'
import styled from 'styled-components';
import Star from './Star';

export const StarRate = (props) => {
    const [rate, setRate] = useState(0);
    const [mouseOverRate, setMouseOverRate] = useState(0);

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

export const StarMain = (props) => {
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
`;


// export default {StarRate, StarMain};