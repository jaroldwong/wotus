import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

import FormNew from './components/FormNew';
import FormEdit from './components/FormEdit';
import WorkOrders from './components/WorkOrders';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Work Order Status</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
              <LinkContainer to="/new">
                <NavItem>Report New Issue</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>

          <Grid>
            <Route path="/new" component={FormNew} />
            <Route path="/workorders/:id" component={FormEdit} />
            <Route exact path="/" component={WorkOrders} />
          </Grid>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
