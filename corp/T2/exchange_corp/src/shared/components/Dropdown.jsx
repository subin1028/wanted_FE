import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountry, addExchange } from "../store/redux_slice";
import getFullDate from "./GetDate";

const Dropdown = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("USD");
    const [date, setDate] = useState('');
    const [change, setChange] = useState('');
    const countryVal = useSelector((state) => state.redux_slice.countryVal);
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
            <select value={value} onChange={handleChange}>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
                <option value="KRW">KRW</option>
                <option value="HKD">HKD</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNY</option>
            </select>
        </form>
    );
}

export default Dropdown;
