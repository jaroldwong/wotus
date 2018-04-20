import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

import WorkOrderList from './components/WorkOrderList';
import FormNew from './components/FormNew';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
            <Route path="/workorders" component={WorkOrderList} />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
