import React, {useContext} from "react";
import { userContext } from "../context/context";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Headers from "./Headers";
import Card from "./Card";
import ReactMarkdown from "react-markdown";

const Detail = (props) => {
    const detail = useContext(userContext);
    const prop = useParams();
    const item = detail[0][prop.id.slice(1)];

    return(
        <>
            <Headers/>
            <Outerdetail>
                <Card 
                    iss_num={item.number}
                    iss_title={item.title}
                    writer={item.user.login}
                    iss_date={item.created_at}
                    num_coment={item.comments}
                    user_src={item.user.avatar_url}
                    ></Card>
                <Innerdetail>
                    <ReactMarkdown>{item.body}</ReactMarkdown>
                </Innerdetail>
            </Outerdetail>
        </>
    )
}


const Outerdetail = styled.div`
    padding-top: 8vh;
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
`;

const Innerdetail = styled.div`
    width: 80vw;
    margin: 2vh auto;
    font-size: 2vmin;
`;

export default Detail;