import styled from 'styled-components';

//이슈번호, 이슈제목, 작성자, 작성일, 코멘트수
const Card = ({iss_num, iss_title, writer, iss_date, num_coment,user_src}) => {
    return(
            <>
            <Bigcard>
                {/* user_src를 넣지 않았을 때 image 태그가 안 생기는데 왜 이게 되는건가요..? */}
                <Userimage src={user_src}></Userimage> 
                <Columninner>
                    <Detailinner>
                        <Nump>#{iss_num}</Nump>
                        <DetailP>{iss_title}</DetailP>
                    </Detailinner>
                    <Detailinner>
                        <Nump>작성자: {writer} </Nump>
                        <DetailP>작성일: {DateFormatter(iss_date)}</DetailP>
                    </Detailinner>
                </Columninner>
                <CommnetBox>코멘트: {num_coment}</CommnetBox>
            </Bigcard>
            </>
            
        
    );

};

function DateFormatter(origin_date){
    const date = new Date(origin_date);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const format_date = `${year}년 ${month}월 ${day}일`;
    return format_date;
};

const Userimage = styled.img`
    width: 5vw;
    height: auto;
    margin-right: 1vw;
`;

const Bigcard = styled.div`
    display:flex;
    flex-direction: row;
    height: 15vh;
    border-bottom: 1px solid black;
    align-items: center;
`;

const Columninner = styled.div`
    display: flex;
    flex-direction: column;
    width: 73%;
    font-size: 1.4vmax;
    margin: auto 0;
`;

const Detailinner = styled.div`
    display:flex;
    flex-direction: row;
    margin: auto 0;
`;

const DetailP = styled.p`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 10px 0;
`;

const Nump = styled.p`
    margin: 10px 2vw 10px 0;
    white-space: nowrap
`;

const CommnetBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5vmax;
    margin: auto;
`;


export default Card;