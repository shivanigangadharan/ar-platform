import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input, Checkbox, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import { Radio } from 'antd';
import { flowRight as compose } from 'lodash';
import { addFormData } from '../queries/queries';
import { graphql } from 'react-apollo';

const H2 = styled.h2`
    color: white;
    font-weight: 400;
    font-size: 200%;
`
const ImgCard = styled.div`
border: 0.3px solid lightgray;
width: 30%;
    padding: 1%;
    color: white;
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
    titles: ['Skull', 'Heart', 'Machine', 'Building', 'Brain'],
    srcs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiHrktqbyNE33ilKhfjsv4Evq9lKkfbRZ_Nw5REgSmpqCLvfB5g",
        "https://i.ytimg.com/vi/O9V_vYS9D3c/maxresdefault.jpg",
        "https://img1.cgtrader.com/items/669704/19e3e45cc4/grid/engine-room-devices-3d-model-low-poly-max-obj-3ds-fbx-mtl-unitypackage.jpg",
        "https://cdn.graphicha.xyz/2018/12/Buildings-Pack_post1.jpg",
        "https://static.turbosquid.com/Preview/2018/12/11__07_57_08/autodeskmaya2017drabotaanatomiyareliz2.0brain_2.0brain_ba.mb2.jpg77CE8219-F0A8-47E6-B0FC-209F843D9454Default.jpg"],
    code: [1251205, 1251204, 1251202, , 1251201]
};

const ReqBox = styled.div`
    padding: 2%;
    width: 100%;
    color: white;
`
const IP = styled.input`
    width: 50%;
    margin: 2%;
    background: none;
    border: 1px solid white;
    padding: 0.5%;
    font-size: 180%;
    border-radius: 4px;
`

function Card(props) {
    // search bar word:
    const [keyword, setKeyWord] = useState('Machine');
    // card component:
    const [component, setComponent] = useState(false);

    // form value's states:
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [model, setModel] = useState('');
    const [description, setDescription] = useState('');
    const [animation, setAnimation] = useState('');
    const [tutorial, setTutorial] = useState('');
    const [marker, setMarker] = useState('');
    const [label, setLabel] = useState();

    function handleSubmit() {
        console.log("handle submit called");
        console.log("Name = ", name);
        console.log("email = ", email);
        console.log("phone = ", phone);
        console.log("org = ", organization);
        console.log("model = ", model);
        console.log("desc = ", description);
        console.log("anim = ", animation);
        console.log("tuto = ", tutorial);
        console.log("marker = ", marker);
        console.log("label = ", label);
        props.addFormData({
            variables: {
                Tutorial: tutorial,
                PhoneNumber: phone,
                Organization: organization,
                Name: name,
                ModelName: model,
                Marker: marker,
                Label: label,
                Email: email,
                Description: description,
                // Code: code,
                Animation: animation,
            }
        });

    }
    // const tt = imgs.titles.some(el => el.toLocaleLowerCase() === props.text.toLocaleLowerCase());

    console.log("Label = ", label);
    const min = 1;
    const max = 7;
    // var code = Math.random() * (max - min);
    // var code = 125;
    var flag = 0;
    for (var i = 0; i < 4; i++) {
        if (imgs.titles[i] == props.text) {
            return (
                <ImgCard>
                    <Img src={imgs.srcs[i]} />
                    <br /><br />
                    <Title> {props.text} </Title><br /><br />
                    <Button type="primary" onClick={e => setComponent(true)}> Buy </Button><br /><br />
                    <div hidden={!component}>Your unique code is : {imgs.code[i]} </div>


                </ImgCard>
            )
            flag = flag + 1;
        }
    }



    if (props.text != null && flag == 0) {
        return (
            <ReqBox>
                <H2> The model you searched for is unavailable. You can request for the same, here: </H2>
                <form onSubmit={handleSubmit}>
                    <IP type="text" placeholder="Enter your name" onChange={e => { setName(e.target.value) }} required />
                    <IP type="text" placeholder="Enter email id" onChange={e => { setEmail(e.target.value) }} required /><br />
                    <IP type="number" required placeholder="Enter phone number" onChange={e => { setPhone(e.target.value) }} required /><br />
                    <IP type="text" placeholder="Organization name" onChange={e => { setOrganization(e.target.value) }} /><br />
                    <H2> Project details :</H2>

                    <IP type="text" onChange={e => { setModel(e.target.value) }} placeholder="Model name" required />
                    <IP type="text" onChange={e => { setDescription(e.target.value) }} placeholder="Brief description of the project" required />


                    <IP type="text" onChange={e => { setAnimation(e.target.value) }} placeholder="Animation details (if any)" />

                    <IP type="text" onChange={e => { setTutorial(e.target.value) }} placeholder="Tutorial details (if any)" />

                    <br />
                    <Radio.Group onChange={e => { setMarker(e.target.value) }}>
                        <Radio value="Marker"> <span style={{ 'color': 'white' }}> Marker </span></Radio>
                        <Radio value="Markerless"> <span style={{ 'color': 'white' }}> Markerles </span> </Radio>
                    </Radio.Group>


                    <Checkbox onChange={e => { setLabel(e.target.checked) }}>
                        <span style={{ 'color': 'white' }}> Labels </span> </Checkbox>

                    <br /><br />

                    <Button type="submit" htmlType="submit"> Request model </Button>
                </form>
            </ReqBox>
        )
    }


    return (
        <div>
        </div>
    )
}

export default compose(
    graphql(addFormData, { name: "addFormData" }),
)(Card);
