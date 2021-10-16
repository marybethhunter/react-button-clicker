import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonStyle = styled.button`
  display: flex;
  width: 100px;
  height: 75px;
  font-size: 48px;
  background-color: black;
  justify-content: center;
  color: white;
  margin: 200px 15px 200px 15px;
  border-radius: 10px;
`;

const NumberStyle = styled.h2`
  font-size: 60px;
  font-family: Arial;
  color: white;
  text-align: center;
  margin: 200px 15px 200px 15px;
`;

function Initialize() {
  const [count, setCount] = useState(0);

  const Decrement = () => {
    setCount(count - 1);
  };

  const Increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <ContainerStyle>
        <Header />
        <ButtonStyle onClick={Decrement} type="button">
          -
        </ButtonStyle>
        <NumberStyle>{count}</NumberStyle>
        <ButtonStyle onClick={Increment} type="button">
          +
        </ButtonStyle>
      </ContainerStyle>
    </>
  );
}

export default Initialize;
