import React, { Component } from 'react';
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import theme from './theme';

injectGlobal`
  body{
    padding:0;
    margin:0;
  }
`

const Card = styled.div`
  background-color:white;
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card}{
    background-color : blue;
  }
`;

const Button = styled.button`
  border-radius:20px;
  width:100px;
  padding:5px;
  background-color : ${props => props.theme.successColor};
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}

const Form = () => ( 
  <Card>
    <Button>
      123
    </Button>
  </Card>
)

export default App;
