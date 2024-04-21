import styled from 'styled-components';
import Dropdown from './Dropdown';
import Input from './Input';
import Tab from './Tab';

const Stylebox = () => {
    return(
       <Outerbox>
            <Inputbox>
                <Input/>
                <Dropdown/>
            </Inputbox>
            <Tabbox>
                <Tab/>
            </Tabbox>
        </Outerbox> 
    )
    
};

const Outerbox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    margin: auto;
`;

const Inputbox = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin: 4vh auto;
`;

const Tabbox = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35vw;
`;

export default Stylebox;