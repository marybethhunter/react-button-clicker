import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
  color: white;
  font-size: 60px;
  font-family: Arial;
  text-align: center;
`;

export default function Header() {
  return <HeaderStyle>BUTTON CLICKER!</HeaderStyle>;
}
