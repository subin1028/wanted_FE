import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountry, addExchange } from "../store/redux_slice";
import styled from "styled-components";

const Dropdown = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("USD");
    const inputVal = useSelector((state) => state.redux_slice.inputVal);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        if (value !== undefined && inputVal !== ""){
            dispatch(setCountry(value));
        }
    }, [value]);

    return (
        <form>
            <Selectbox value={value} onChange={handleChange}>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
                <option value="KRW">KRW</option>
                <option value="HKD">HKD</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNY</option>
            </Selectbox>
        </form>
    );
}

const Selectbox = styled.select`
    font-size: 2vw;
    padding: 2px;
`;

export default Dropdown;
