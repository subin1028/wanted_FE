import axios from "axios";

 export const getPong = async() => {
    let pong = await axios({
        method: "get",
        url: "http://localhost:5001/pingpong",
        header: {
            "Content-Type": "application/json",
        },
    });
    console.log(pong.data.ping);
    return pong;
};