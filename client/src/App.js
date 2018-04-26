import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

import FormNew from './components/FormNew';
import FormEdit from './components/FormEdit';
import WorkOrders from './components/WorkOrders';

class App extends Component {
  updateWorkOrder = formData => {};

  render() {
    return (
      <BrowserRouter>
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
            {/* <Route path="/new" component={FormNew} /> */}
            <Route path="/new" component={FormNew} />
            <Route
              path="/workorders/:id"
              render={routeProps => (
                <FormEdit onSubmit={this.updateWorkOrder} {...routeProps} />
              )}
            />
            <Route exact path="/" component={WorkOrders} />
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
