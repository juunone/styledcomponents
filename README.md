## What is styled-components ?

태그가 추가 된 템플릿 리터럴 (JavaScript에 최근 추가 된 기능)과 CSS의 강력한 기능을 활용하여 실제 CSS 코드를 작성하여 구성 요소의 스타일을 지정 할 수 있는 유틸입니다.
스타일 구성 요소는 React 및 React Native와 호환되어 범용성이 넓습니다.

자세한 정보는 [styled-component](https://www.styled-components.com/docs)
를 참조해주세요.

### Examples

```javascript
import React, { Component } from "react";
import styled, {
  injectGlobal,
  ThemeProvider,
  css,
  keyframes
} from "styled-components";
import Count from "./Count";
import theme from "./theme";

injectGlobal`
  body{
    padding:0;
    margin:0;
  }
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Card = styled.div`
  background-color: white;
  margin: 10px 0;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #999;
  ${Card} {
    background-color: black;
  }
`;

const Button = styled.button`
  border-radius: 20px;
  width: 100px;
  padding: 5px;
  margin-bottom: 5px;
  background-color: ${props => props.theme.mainColor};
`;

class App extends Component {
  render() {
    return (
      <div>
        <Button>without provider</Button>
        <Button theme={{ mainColor: "yellow" }}>theme prop</Button>
        <ThemeProvider theme={theme}>
          <Container>
            <Form />
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
```

### Implementation

- 해당 데모버전은 styled-components 의 basic 튜토리얼입니다.

```
yarn install

yarn start
```
