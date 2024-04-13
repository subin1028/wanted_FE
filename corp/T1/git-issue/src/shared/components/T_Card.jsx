import React, {useContext} from "react";
import { userContext } from "../context/context";
import {RouterProvider, Link} from "react-router-dom";
import Card from "./Card";
import Headers from "./Headers";
import styled from "styled-components";

const TCards = (props) => {
    const detail = useContext(userContext);
    console.log(detail[0]);

    return(
        <>
            <Headers/>
            <Outerdetail>
                {detail[0].map((item, id) => {
                    return (<Linkouter key={id} to={`/detail/:${id}`}><Card 
                    iss_num={item.number}
                    iss_title={item.title}
                    writer={item.user.login}
                    iss_date={item.created_at}
                    num_coment={item.comments}
                    ></Card></Linkouter>);
                })}
            </Outerdetail>    
        </>
    )
}

const Linkouter = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Outerdetail = styled.div`
    padding-top: 8vh;
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
`;

  //이슈번호, 이슈제목, 작성자, 작성일, 코멘트수
  //0.number, 0.title, 0.user.login, 0.created_at, 0.comments

export default TCards;