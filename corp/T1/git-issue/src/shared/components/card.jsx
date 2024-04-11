import styled from 'styled-components';

//이슈번호, 이슈제목, 작성자, 작성일, 코멘트수
const Card = (props) => {
    return(
        <>
            <bigCard>
                <columnInner>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </columnInner>
                <div>코멘트</div>
            </bigCard>
        </>
    )

};

const bigCard = styled.div`
    height: 20vh;
    width: 80vw;
`;

const columnInner = styled.div`
    display: flex;
    flex-direction: column;
`;


export default Card;