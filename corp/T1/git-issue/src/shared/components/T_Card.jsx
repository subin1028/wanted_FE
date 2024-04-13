import React, {useContext} from "react";
import { userContext } from "../context/context";
import {RouterProvider, Link} from "react-router-dom";
import Card from "./Card";
import Headers from "./Headers";
import styled from "styled-components";
import advertise from "../../image.jpg";

const TCards = (props) => {
    const detail = useContext(userContext);

    return(
        <>
            <Headers/>
            <Outerdetail>
            {detail[0].map((item, id) => {
                return (
                    <React.Fragment key={id}>
                        <Linkouter to={`/detail/:${id}`}>
                            <Card
                                iss_num={item.number}
                                iss_title={item.title}
                                writer={item.user.login}
                                iss_date={item.created_at}
                                num_coment={item.comments}
                            />
                        </Linkouter>
                        {/* 광고 */}
                        {id === 3 && (
                            <Linkouter key={"ad"} to={"https://www.wanted.co.kr/"}>
                                <Adcard src={advertise}/>
                            </Linkouter>
                        )}
                    </React.Fragment>
                );
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

const Adcard = styled.img`
    height: 15vh;
    overflow: hidden;
    width: 90vw;
    object-fit: cover;
    padding: 1vw 0;
`;

  //이슈번호, 이슈제목, 작성자, 작성일, 코멘트수
  //0.number, 0.title, 0.user.login, 0.created_at, 0.comments

export default TCards;