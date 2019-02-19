import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from './theme'


const Nav = styled.div`
    font-size:1em;
    margin:10px 0;
    border:1px solid #ddd;
`

const Title = styled.h1`
    font-size:2em;
    padding:10px 0;
    color : ${props => props.theme.mainColor};
`

export default class Note extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <Title>Note title</Title>
          <Nav>Navigation</Nav>
        </ThemeProvider>
      );
    }
}