import React, { Component } from 'react'
import styled from 'styled-components'

const InputMsg = styled.input`
display:flex;
margin-top: 1px;
    width:100%;
    height: 40px;
    border-radius: 4px;
`;

export default class MessageBox extends Component {
    constructor(){
        super();
        this.state = {
            message: '',
          }
        
    }
    render() {
        return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <InputMsg
          type="text"
          placeholder={'  Enter message... + Click Enter'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
      </form>
        )
    }
}
