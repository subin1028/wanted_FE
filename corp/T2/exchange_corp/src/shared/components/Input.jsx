import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {NumericFormat, numericFormatter, removeNumericFormat} from "react-number-format";
import { callApi } from "../network/callEC";
import { useDispatch, useSelector } from "react-redux";
import { setInput, addExchange } from "../store/redux_slice";
import getFullDate from "./GetDate";

const Input = (props) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');
    const [change, setChange] = useState('');
    const country = useSelector((state) => state.redux_slice.countryVal);
    const inputVal = useSelector((state) => state.redux_slice.inputVal);

    useEffect(() => {
        if (value.length >= 4 && country !== undefined){
            // callApi([value, country]).then((data) => {
            //     setChange(data.result);
            //     setDate(getFullDate(data.date));                
            // });
            setChange(0.01 * value);
            setDate(getFullDate("2024-04-21"));
            dispatch(setInput(value));
            dispatch(addExchange({ country, date, change, from:"input" }));
            console.log("Input >>", country, date, change, "val>> ", value);
        }
    }, [value, date, country, change]);
    
    const onChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
    }

    return(
        <>
            {/* <NumericFormat value={value} thousandSeparator={true} onChange={onChange} allowNegative={false}/> */}
            <input type="number" value={value} onChange={onChange} onKeyDown={onChange}></input>
        </>
    )
}


export default Input;