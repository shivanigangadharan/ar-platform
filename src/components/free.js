import React from 'react';
import styled from 'styled-components';
import { Button, Input, Icon, Checkbox, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import background from '../images/background.jpg';

const Card = styled.div`
    box-shadow: 0.2px 0.2px 5px 0.2px lightgray;
    width: 30%;
    margin: 2%;
    padding: 1%;
    color: white;
    font-size: 150%;
`
const imgs = {
    titles: ['Skull', 'Heart', 'Machine', 'Building', 'Dino',],
    srcs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiHrktqbyNE33ilKhfjsv4Evq9lKkfbRZ_Nw5REgSmpqCLvfB5g",
        "https://i.ytimg.com/vi/O9V_vYS9D3c/maxresdefault.jpg",
        "https://img1.cgtrader.com/items/669704/19e3e45cc4/grid/engine-room-devices-3d-model-low-poly-max-obj-3ds-fbx-mtl-unitypackage.jpg",
        "https://cdn.graphicha.xyz/2018/12/Buildings-Pack_post1.jpg",
        "https://image.winudf.com/v2/image/Y29tLlRpbnlHLkRpbm9zdWFyM0RBcmNvcmVfc2NyZWVuXzRfMTUzNTkwNjY3N18wOTE/screen-3.jpg?h=355&fakeurl=1&type=.jpg"]
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
const Main = styled.div`
    background-image: url(${background});
    padding-top: 6%;
    background-size: cover;
`
function Free() {
    return (
        <center>
            <Main>
                <Card>                 <Link to="/">
                    <Icon type="caret-left" /></Link>Free Models</Card>
                <Flex>
                    <Card>
                        <Img src={imgs.srcs[0]} />
                        <br /><br />
                        <Title> {imgs.titles[0]} </Title><br /><br />
                        <Button type="primary"> Buy </Button>
                    </Card>
                    <Card>
                        <Img src={imgs.srcs[4]} />
                        <br /><br />
                        <Title> {imgs.titles[4]} </Title><br /><br />
                        <Button type="primary"> Buy </Button>
                    </Card>
                    <Card>
                        <Img src={imgs.srcs[2]} />
                        <br /><br />
                        <Title> {imgs.titles[2]} </Title><br /><br />
                        <Button type="primary"> Buy </Button>
                    </Card>
                </Flex>

            </Main>
        </center>
    )
}

export default Free;
