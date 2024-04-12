import { queryParam } from "../network/axios_api";
import styled from 'styled-components';

function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Headers = (props) => {
    return (
        <>
            <HeaderDiv>{upperFirst(queryParam.organ)} / {upperFirst(queryParam.repo)}</HeaderDiv>
        </>
    )   
};

const HeaderDiv = styled.div`
    width: 100vw;
    height: 6vh;
    line-height: 6vh;
    text-align: center;
    position: fixed;
    font-size: 3vh;
    margin-bottom: 2vh;
    background-color: white;
`;

export default Headers;