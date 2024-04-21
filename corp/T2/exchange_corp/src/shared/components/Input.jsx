import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {NumericFormat} from "react-number-format";
import { callApi } from "../network/callEC";
import { useDispatch, useSelector } from "react-redux";
import { setInput, addExchange } from "../store/redux_slice";
import getFullDate from "./GetDate";

const Input = (props) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [format_value, setFormat] = useState('');
    const [date, setDate] = useState('');
    const [change, setChange] = useState('');
    const country = useSelector((state) => state.redux_slice.countryVal);

    useEffect(() => {
        if (value.length >= 4 && country !== undefined){
            callApi([value, country]).then((data) => {
                setChange(data.result);
                setDate(getFullDate(data.date));                
            });
    
            dispatch(setInput(value));
            dispatch(addExchange({ country, date, change, from:"input" }));
        }
    }, [value, date, country, change]);
    
    const onChange = (e) => {
        const newValue = e.target.value;
        setFormat(newValue);
        setValue(newValue.replace(/,/g, ''));
    }

    return(
        <>
            <Numeric value={format_value} thousandSeparator={true} onChange={onChange} allowNegative={false}/>
        </>
    )
}

const Numeric = styled(NumericFormat)`
    margin-right: 20px;
    font-size: 2vw;
`


export default Input;