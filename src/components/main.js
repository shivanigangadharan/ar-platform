import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import Card from './card';
import { Link } from 'react-router-dom';

const { Search } = Input;
const MySearch = styled(Search)`
    width: 50%;
    margin-top:3%;
`
const Box = styled.div`
    width: 90%;
    border: 0.5px solid lightgray;
    margin-top: 5%;
    padding: 3%;
`
const Options = styled.div`

`
const Btns = styled(Button)`
    font-size: 130%;
    padding: 1%;
    padding-top:1%;
    padding-bottom: 1%;
    margin: 3%;
    text-align:center;
    vertical-align:middle;
`
function Main() {
    const [word, setWord] = useState(null);
    console.log("Searched keyword = ", word);
    return (
        <center>
            <Box>
                <MySearch enterButton onSearch={e => { setWord(e) }} placeholder="search AR models" />
                <br /><br />
                <Options hidden={word === null ? false : true}>
                    <Link to="/free">
                        <Btns type="primary"> FREE </Btns>
                    </Link>
                    <Link to="/paid">
                        <Btns type="primary"> PAID </Btns>
                    </Link><Link to="/customized">
                        <Btns type="primary"> CUSTOMIZED </Btns>
                    </Link>

                </Options>
                <Card text={word} />
                <br /><br />
            </Box>
        </center>
    )
}

export default Main;
