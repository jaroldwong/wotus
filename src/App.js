import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Work Order Status</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem href="#new">Report New Issue</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
