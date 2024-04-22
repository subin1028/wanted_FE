import axios from "axios";

const getInfo = async () => {
    let info = await axios({
        method: "get",
        url: "http://localhost:5001/condition",
        headers:{
            "Content-Type": "application/json",
        },
    });
    return info;
};

export default getInfo;