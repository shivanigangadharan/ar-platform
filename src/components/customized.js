import React from 'react';
import styled from 'styled-components';
import { Button, Input, Checkbox, Icon, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import background from '../images/background.jpg';

const Card = styled.div`
    box-shadow: 0.2px 0.2px 5px 0.2px lightgray;
    width: 30%;
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 5%
    padding: 1%;
`
const Main = styled.div`
    background-image: url(${background});
    padding-top: 6%;
    background-size: cover;
    color:white;
    font-size:150%;
`
const imgs = {
    srcs: ["https://combatrifle.com/wp-content/uploads/2019/09/CROM-USA-Ruger-PC-Carbine-Chassis-400x250.jpg"]
};
const Flex = styled.div`
    display: flex;
`
const Title = styled.text`
    font-size:160%;
    text-align:left;
    margin-top: 2%;
    font-weight: 600;
    `
const Img = styled.img`
    width: 90%;
`
function Customized() {
    return (
        <center>
            <Main>
                <Card>
                    <Link to="/">
                        <Icon type="caret-left" /> </Link>Customized Models</Card>
                <center>
                    <Flex>
                        <Card>
                            <Img src={imgs.srcs[0]} />
                            <br /><br />
                            <Title> Name of your model </Title><br /><br />
                            <Button type="primary"> Order </Button>
                        </Card>

                    </Flex>
                </center>

            </Main>

        </center>
    )
}

export default Customized;

