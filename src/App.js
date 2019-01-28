import React, { Component } from 'react';
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import Count from './Count';
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
  background-color: #999;
  ${Card}{
    background-color : black;
  }
`;

const Button = styled.button`
  border-radius:20px;
  width:100px;
  padding:5px;
  margin-bottom:5px;
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

const ALink = styled.a`
  color:white;
  font-size:1.3em;
  font-weight:normal;
  margin:0 5px;
`

const Link = ({ className, children }) => (
  <ALink className={className}>
    {children}
  </ALink>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;


// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
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

    <Card>
      <Button>
        <Title>
          타이틀.
        </Title>
      </Button>
    </Card>

    <Card>
      <Link>unstyled link</Link>
      <StyledLink>styled link</StyledLink>
    </Card>

    <Card>
      <SquareButton primary>
        tomato
      </SquareButton>
      <SquareButton 
      as="a"
      onClick={() => {alert('do u like tomato?')}}
      >
        without tomato
      </SquareButton>
    </Card>

    <Card>
      <Input defaultValue="@mono" type="text" />
      <Input defaultValue="@colorful" type="text" inputColor="rebeccapurple" />
    </Card>

    <Card>
      <Count />
    </Card>
    
  </Card>
)

export default App;
