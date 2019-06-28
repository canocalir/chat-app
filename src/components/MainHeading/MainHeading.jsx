import React from 'react'
import styled from 'styled-components';

const ChatMainTitle = styled.h1`
text-align:center;
font-size:15px;
margin-top: 20px;
font-weight: normal;
`;

export default function MainHeading() {
    return (
        <div>
        <ChatMainTitle>
            Status Meeting Standup
        </ChatMainTitle>
        </div>
    )
}
