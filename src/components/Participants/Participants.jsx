import React from 'react'
import styled from 'styled-components'

const PartContainer = styled.div`
    margin-top: 20px;
    margin-left: 15px;
    line-height: 40px;
`;

export default function Participants(props) {
    return (
        <PartContainer>
            {props.parts.map(s => <React.Fragment>{s}<br/><hr style={{color:"#e7e7e7", width:"320px", marginLeft:"-30px"}}/></React.Fragment>)}
        </PartContainer>
    )
}
