import React from 'react';
import Main from './components/main';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Buy from './components/buy';
import { Card } from 'antd';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Free from './components/free';
import Paid from './components/paid';
import Customized from './components/customized';
import styled from 'styled-components';

const Footer = styled.div`
    background: black;
    color: white;
    padding: 3%;
`
function App() {
  const client = new ApolloClient({
    uri: "https://ar-platform.herokuapp.com/v1/graphql",
    headers: {
      'x-hasura-admin-secret': 'ar-platform'
    }
  });
  const MyApolloProvider = styled(ApolloProvider)`
  font-family: 'Poppins', sans-serif;

`
  return (
    <MyApolloProvider client={client}>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/buy" component={Buy} />
            <Route path="/card" component={Card} />
            <Route path="/free" component={Free} />
            <Route path="/paid" component={Paid} />
            <Route path="/customized" component={Customized} />

          </Switch>
        </Router>
      </div>
      <Footer>
        Developed by:- <br /><br /> &copy; Team Clifford 2020 | Bharati Vidyapeeth's College of Engineering
      </Footer>
    </MyApolloProvider>
  );
}

export default App;
