import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';

const ImgCard = styled.div`
    box-shadow: 0.2px 0.2px 5px 0.2px lightgray;
    width: 30%;
    padding: 1%;
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
const imgs = {
    titles: ['Skull', 'Heart', 'Machine', 'Building'],
    srcs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiHrktqbyNE33ilKhfjsv4Evq9lKkfbRZ_Nw5REgSmpqCLvfB5g",
        "https://i.ytimg.com/vi/O9V_vYS9D3c/maxresdefault.jpg",
        "https://img1.cgtrader.com/items/669704/19e3e45cc4/grid/engine-room-devices-3d-model-low-poly-max-obj-3ds-fbx-mtl-unitypackage.jpg",
        "https://cdn.graphicha.xyz/2018/12/Buildings-Pack_post1.jpg"]
};

const ReqBox = styled.div`
    box-shadow: 1px 1px 3px 1px lightgray;
    padding: 2%;
    width: 50%;
`
const IP = styled(Input)`
    width: 50%;
    margin: 2%;
`
function Card(props) {
    const [keyword, setKeyWord] = useState('Machine');
    const [component, setComponent] = useState(false);
    // const tt = imgs.titles.some(el => el.toLocaleLowerCase() === props.text.toLocaleLowerCase());
    console.log("Searched model = = ", props.text);
    var flag = 0;
    for (var i = 0; i < 4; i++) {
        if (imgs.titles[i] == props.text) {
            return (
                <ImgCard>
                    <Img src={imgs.srcs[i]} />
                    <br /><br />
                    <Title> {props.text} </Title><br /><br />
                    <Button type="primary" onClick={e => setComponent(true)}> Buy </Button>
                </ImgCard>
            )
            flag = flag + 1;
        }
    }
    if (props.text != null && flag == 0) {
        return (
            <ReqBox>
                <h2> The model you searched for is unavailable. You can request for the same, here: </h2>
                <form>
                    <IP type="text" placeholder="Enter your name" />
                    <IP type="text" placeholder="Enter email id" /><br />
                    <Button type="submit"> Request model </Button>
                </form>
            </ReqBox>
        )
    }


    return (
        <div>
        </div>
    )
}

export default Card;
