import React, { Component } from 'react'
import styled from 'styled-components'
import MainHeading from '../../components/MainHeading/MainHeading';
import Tabs from '../../components/Tabs/Tabs'

const ChatContainer = styled.div`
margin-top:-150px;
height: 600px;
width: 320px;
background-color:#e8e8e8;
`;


export default class ChatApp extends Component {
    
    render() {
        
        return (
            <ChatContainer>
                <MainHeading/>
                <Tabs/>
            </ChatContainer>
        )
    }
}
