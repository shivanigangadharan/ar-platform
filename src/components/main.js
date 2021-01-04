import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import Card from './card';
import { Link } from 'react-router-dom';
import background from '../images/background.jpg';

const { Search } = Input;
const MySearch = styled(Search)`
    width: 100%;
    background: transparent;
    font-size: 200%;
`
const Box = styled.div`
    width: 85%;

    `
const Options = styled.div`
z-index: 100;
`
const Btns = styled.button`
    font-size: 150%;
    padding-left: 3%;
    padding-right: 3%;
    padding-top:1%;
    padding-bottom: 1%;
    margin: 10%;
    font-weight: 400;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    text-align:center;
    vertical-align:middle;
    background: none;
`
const Center = styled.div`
background-image: url(${background});
background-size:cover;
background-repeat: none;
z-index: -10;
`
const Heading = styled.text`
    color: white;
    font-size: 700%;
    float: left;
    margin-left: 7%;
    margin-bottom: 5%;
    margin-top: 6%;
    font-weight: 100
`
const P = styled.text`
    color: white;

`
function Main() {
    const [word, setWord] = useState(null);
    console.log("Searched keyword = ", word);
    return (
        <Center>
            <center>
                <Heading> SearchAR </Heading>

                <Box><br />

                    <MySearch enterButton onSearch={e => { setWord(e) }} placeholder="search Heart, Machine, Skull, Brain, etc" />
                    <br /><br />
                    <Options hidden={word === null ? false : true}>
                        <Link to="/free">
                            <Btns type="primary"> Free </Btns>
                        </Link>
                        <Link to="/paid">
                            <Btns type="primary"> Paid </Btns>
                        </Link><Link to="/customized">
                            <Btns type="primary"> Customized </Btns>
                        </Link>

                    </Options>
                    <Card text={word} />
                    <br /><br /><br /><br />
                </Box>
            </center>
        </Center>
    )
}

export default Main;
