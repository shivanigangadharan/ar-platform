import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { Radio } from 'antd';

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
    const [radio, setRadio] = useState('');
    const [label, setLabel] = useState();

    // const tt = imgs.titles.some(el => el.toLocaleLowerCase() === props.text.toLocaleLowerCase());

    console.log("Label = ", label);
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
                    <IP type="text" placeholder="Enter your name" required />
                    <IP type="text" placeholder="Enter email id" required /><br />
                    <IP type="number" required placeholder="Enter phone number" required /><br />
                    <IP type="text" placeholder="Organization name" required /><br />
                    <h3> Project details </h3>
                    <ul>
                        <li>
                            <IP type="text" placeholder="Model name" required />
                        </li>
                        <li><IP type="text" placeholder="Brief description of the project" required />
                        </li>
                        <li>
                            <IP type="text" placeholder="Animation details (if any)" />
                        </li>
                        <li><IP type="text" placeholder="Tutorial details (if any)" required />
                        </li>
                        <li>
                            <Radio.Group onChange={e => { setRadio(e.target.value) }}>
                                <Radio value="Marker"> Marker </Radio>
                                <Radio value="Markerless"> Markerless </Radio>
                            </Radio.Group>
                        </li>
                        <li>
                            <Checkbox onChange={e => { setLabel(e.target.checked) }}>
                                Labels </Checkbox>
                        </li>
                    </ul>

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
