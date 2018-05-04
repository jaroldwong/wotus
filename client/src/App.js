import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

import FormNew from './components/FormNew';
import FormEdit from './components/FormEdit';
import WorkOrders from './components/WorkOrders';

export const ModalContext = React.createContext();

class App extends Component {
  state = {
    showNewModal: false,
    toggleNewModal: () => {
      this.setState(prevState => ({
        showNewModal: !prevState.showNewModal
      }));
    },
    closeAndUpdate: () => {
      this.state.toggleNewModal();
      this.fetchState();
    }
  };

  render() {
    return (
      <BrowserRouter>
        <ModalContext.Provider value={this.state}>
          <React.Fragment>
            <Navbar fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">Work Order Status</Link>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav pullRight>
                {/* <LinkContainer to="/new">
                <NavItem>Report New Issue</NavItem>
              </LinkContainer> */}
                <NavItem onClick={this.state.toggleNewModal}>
                  Report New Issue
                </NavItem>
              </Nav>
            </Navbar>

            <Grid>
              {/* <Route path="/new" component={FormNew} /> */}
              <Route path="/workorders/:id" component={FormEdit} />
              <Route exact path="/" component={WorkOrders} />
            </Grid>
          </React.Fragment>
        </ModalContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
