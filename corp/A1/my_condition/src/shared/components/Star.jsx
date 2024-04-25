import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Estar } from '../../empty_star.svg';
import { ReactComponent as FStar } from '../../full_star.svg';

const Star = (props) => {
    
  return (
    <span role='button' onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
        {props.filled ? (
            <FullStar/>
        ) : (
            <EmpStar/>
        )}
    </span>
  )
};

const EmpStar = styled(Estar)`
    fill: #fcc419;
    width: 5vmax;
    height: auto;
`;

const FullStar = styled(FStar)`
    fill: #fcc419;
    width: 5vmax;
    height: auto;
`;

export default Star;