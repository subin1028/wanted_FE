import React, {useContext} from "react";
import { userContext } from "../context/context";
import {RouterProvider, Link} from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";

const TCards = (props) => {
    const detail = useContext(userContext);
    console.log(detail[0]);

    return(
        <Outerdetail>
            {detail[0].map((item, id) => {
                return <Card key={id} 
                iss_num={item.number}
                iss_title={item.title}
                writer={item.user.login}
                iss_date={DateFormatter(item.created_at)}
                num_coment={item.comments}
                ></Card>
            })}
        </Outerdetail>
    )
}

const Outerdetail = styled.div`
    padding-top: 8vh;
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
`;

function DateFormatter(origin_date){
    const date = new Date(origin_date);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const format_date = `${year}년 ${month}월 ${day}일`;
    return format_date;
};

  //이슈번호, 이슈제목, 작성자, 작성일, 코멘트수
  //0.number, 0.title, 0.user.login, 0.created_at, 0.comments

export default TCards;