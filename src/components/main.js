import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import Card from './card';

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
function Main() {
    const [word, setWord] = useState(null);
    console.log("Searched keyword = ", word);
    return (
        <center>
            <Box>
                <MySearch enterButton onSearch={e => { setWord(e) }} placeholder="search AR models" />
                <br /><br />
                <Options hidden={word === null ? false : true}>
                    <button> FREE </button>
                    <button> PAID </button>
                    <button> CUSTOMIZED </button>
                </Options>
                <Card text={word} />
                <br /><br />
            </Box>
        </center>
    )
}

export default Main;
