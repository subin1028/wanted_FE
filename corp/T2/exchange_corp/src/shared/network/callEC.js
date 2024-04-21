import axios from "axios";
import exchangeApi from "../../apiKey";
import { useDispatch, useSelector } from "react-redux";
import fullDate from "../components/GetDate";

const APIKey = exchangeApi.exchangeApi;

const instance = axios.create({
    baseURL: "https://api.apilayer.com/exchangerates_data",
    headers: {"apikey": APIKey},
})

export const callApi = async ([amount,country]) => {
    try{
        const response = await instance.get(`convert?to=${country}&from=KRW&amount=${amount}`);
        console.log(response.data);
        return await(response).data
    }
    catch(err){
        console.log(err);
    }
}