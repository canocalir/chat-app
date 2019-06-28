import React, { Component } from 'react'
import styled from 'styled-components'
import MessageBox from '../MessageBox/MessageBox'
import SingleMessage from '../SingleMessage/SingleMessage'



const ScrollChat = styled.div`
display:flex;
flex-direction: column;
position: relative;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: auto;
  word-wrap: break-word
  width: 290px;
  height: 570px;
`;

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
  `;

const URL = 'ws://localhost:3030'

export default class ChatScrollBox extends Component {
        state = {
            name: ['John Wayne','Sally Goodman','Jack Sparrow','Lenny Kravitz'],
            messages: [],
        }

        ws = new WebSocket(URL)

        componentDidMount() {
            this.ws.onopen = () => {
              console.log('connected')
            }
        
            this.ws.onmessage = evt => {
              const message = JSON.parse(evt.data)
              this.addMessage(message)
               
            }
        
            this.ws.onclose = () => {
              console.log('disconnected')
              this.setState({
                ws: new WebSocket(URL),
              })
            }
          }

          addMessage = (message) => {
            
    this.setState(state => ({ messages: [message, ...state.messages] }))
  }

  submitMessage = (messageString) => {
    const message = { name: this.pickName(), message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

    getCurrentTime = () => {
        let today = new Date();
       return (today.getHours() < 10 ? '0' : '') + today.getHours() + ':' + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    }

    pickName = () => {
      let pickRandom = this.state.name[Math.floor(Math.random()*this.state.name.length)];
      return pickRandom;
    }
    

    render() {
        let dummymessages = 
      <p>
        <Name>John Wayne </Name>  <Time>{this.getCurrentTime()}</Time>
        <br/>
        <Message>Hello</Message>
        <Name>Sally Goodman</Name>  <Time>{this.getCurrentTime()}</Time>
        <br/>
        <Message>How its going?</Message>
      </p>
        return (
            <div>
            <ScrollChat>
            {dummymessages}
            {this.state.messages.map((message, index) =>
                <SingleMessage
                url={URL}
                key={index}
                message={message.message}
                name={message.name}
                time={this.getCurrentTime()}
                />
            )}
            </ScrollChat>
            <MessageBox 
            ws={this.ws}
            onSubmitMessage={messageString =>
            this.submitMessage(messageString)}
            />
            </div>
            
        )
    }
}