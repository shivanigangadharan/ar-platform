import React from 'react';
import styled from 'styled-components';
const Card = styled.div`
    box-shadow: 0.2px 0.2px 5px 0.2px lightgray;
    width: 30%;
    margin-top: 4%;
    padding: 1%;
    `

function Paid() {
    return (
        <center>
            <Card> Paid Models </Card>
        </center>
    )
}

export default Paid;
