import React, {useContext} from "react";
import { userContext } from "../context/context";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Headers from "./Headers";
import Card from "./Card";

const Detail = (props) => {
    const navigate = useNavigate();
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
                    ></Card>
                <div id='div-list'>
                    {item.body}
                </div>
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

export default Detail;