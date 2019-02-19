import React from 'react'
import styled from 'styled-components'

const StyledCounter = styled.div`
  /* ... */
  margin-top:10px;
`
const Paragraph = styled.p`
  /* ... */
  color:white;
  margin:0;
  padding:0;
`
const Button = styled.button`
  /* ... */
  color:#000;
`

export default class Counter extends React.Component {
  state = { count: 0 }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    )
  }
}