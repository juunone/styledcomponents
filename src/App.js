import React, { Component } from 'react';
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import theme from './theme';

injectGlobal`
  body{
    padding:0;
    margin:0;
  }
`

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Card = styled.div`
  background-color:white;
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card}{
    background-color : black;
  }
`;

const Button = styled.button`
  border-radius:20px;
  width:100px;
  padding:5px;
  background-color : ${props => props.theme.dangerColor};
`

const SquareButton = styled(Button)`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "tomato" : "white"};
  color: ${props => props.primary ? "white" : "tomato"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${props => props.primary ? '2px solid white' : '2px solid tomato;'}
  border-radius: 3px;
`;

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
    <SquareButton primary>
      tomato
    </SquareButton>
    <SquareButton>
      without tomato
    </SquareButton>
    <Button>
      <Title>
        타이틀.
      </Title>
    </Button>
  </Card>
)

export default App;
