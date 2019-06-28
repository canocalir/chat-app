import React, { Component } from 'react'
import styled from 'styled-components'
import './Tabs.css'
import Participants from '../Participants/Participants';
import ChatScrollBox from '../ChatScrollBox/ChatScrollBox';

const TabsMain = styled.div`
display: flex;
  flex-wrap: wrap;
  height: 100%;
  background: #e5e5e5;
`;

export default class Tabs extends Component {
  state = {
    participant: ['John Wayne','Sally Goodman','Jack Sparrow','Lenny Kravitz']
}
    render() {
        return (
            <TabsMain>
                <input className="input" name="tabs" type="radio" id="tab-1"  />
                <label className="label" htmlFor="tab-1">Participants({this.state.participant.length})</label>
                <div className="panel">
            <Participants parts={this.state.participant}/>
                </div>
                <input className="input" name="tabs" type="radio" id="tab-2" defaultChecked="checked" />
                <label className="label" htmlFor="tab-2">Chat</label>
                <div className="panel">
            <ChatScrollBox/>
                </div>
            </TabsMain>
        )
    }
}
