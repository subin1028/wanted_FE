import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Tab = () => {
  const exchange_arr = useSelector((state) => state.redux_slice.exchange_arr);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const firstTab = Object.keys(exchange_arr)[0];
    setActiveTab(firstTab);
  }, [exchange_arr]);

  const handleTabClick = (country) => {
    setActiveTab(country);
  };

  return (
    <>
       <TabContainer>
        {Object.entries(exchange_arr).map(([country, value]) => (
          <TabButton key={country} active={activeTab === country? "true":"false"} onClick={() => handleTabClick(country)}>
            {country}
          </TabButton>
        ))}
      </TabContainer>
      <InnerTab>
        {activeTab && (
          <Textarea>
            <p>{activeTab} {exchange_arr[activeTab].change}</p>
            <p>기준일: {exchange_arr[activeTab].date}</p>
          </Textarea>
        )}
      </InnerTab>
    </>
  );
};

const TabContainer = styled.div`
  display: flex;
  width: 65vw;
`;

const TabButton = styled.button`
  background-color: ${props => props.active == "true" ? 'rgb(#bdbdbd)' : 'white'};
  border: 1px solid black;
  border-bottom: none;
  padding: 1vh;
  width: auto;
  font-size: 1.5vw;
  line-height: 1.5vw;
  margin-left: -1px;
`;

const InnerTab = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  width: 65vw;
  font-size: 2.5vw;
`;

const Textarea = styled.div`
  margin-left: 2vw;
`

export default Tab;
