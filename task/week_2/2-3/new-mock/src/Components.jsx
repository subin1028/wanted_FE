import React from "react";
import { getPong } from "./network/axios";

const Ping = () => {
    const [text, setText] = React.useState("ping");
    return(
        <>
            <p>{text}</p>
            <button onClick={() => {
                setText("ping");
            }}>초기화</button>
            <button onClick={() => {
                const result = getPong();
                console.log(result);
                getPong().then((res) => {setText(res.data.ping)}).catch("fail");
            }}>핑</button>
        </>
    );
};

export default Ping;