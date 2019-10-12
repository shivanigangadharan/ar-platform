import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;
const MySearch = styled(Search)`
    width: 20%;
    margin-top:3%;
`
const Box = styled.div`
    box-shadow: 1px 1px 5px 3px lightgray;
    width: 40%;
    margin-top: 5%;
    padding: 3%;
`
function Main() {
    return (
        <center>
            <Box>
                <MySearch enterButton placeholder="search AR models" />
                <br /><br /><br /><br />
            </Box>
        </center>
    )
}

export default Main;
