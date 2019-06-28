import React, { Component } from 'react'
import styled from 'styled-components'

const Name = styled.strong`
  font-size: 16px;
`;

const Time = styled.span`
  font-size: 15px;
  color: #A2A2A0;
  padding-left: 5px;
`;

const Message = styled.p`
  font-size: 14px;
  margin-top: 2px;
  cursor: pointer;
`;

const SngMessage = styled.p`

`;

const EditBox = styled.input`
  width: 150px;
`;

export default class SingleMessage extends Component {
  state = {
    isEditMode: false,
    value: this.props.message,
    isDelete: false
  }


  changeEditMode = () => {
    this.setState({
      isEditMode: !this.state.isEditMode
    })
  }

  removeMessage = () => {
    this.setState({
      isDelete: true
    })
  }

  renderEditView = () => {
    return <div>
        <EditBox
         type="text"
         defaultValue={this.state.value}
         ref="theTextInput"
        />
        <button onClick={this.removeMessage}>X</button>
        <button onClick={this.updateComponentValue}>OK</button>
      </div>
  }

  renderDefaultView = () => {
    return <Message onDoubleClick={this.changeEditMode}>{this.state.value}</Message>
  }

  updateComponentValue = () => {
    this.setState({
      isEditMode: false,
      value: this.refs.theTextInput.value
    })
    
  }

  render() {
    let message = 
    this.state.isEditMode ?
    this.renderEditView() :
    this.renderDefaultView()

    if(this.state.isDelete === false) {
      return <SngMessage 
      style={{marginTop:"0px"}}>
        <Name>{this.props.name}</Name>  <Time>{this.props.time}</Time>
        <br/>
       {message} 
      </SngMessage>
    } else {
      return null
    }

  }
}

 