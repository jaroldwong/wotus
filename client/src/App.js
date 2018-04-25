import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

import WorkOrderList from './components/WorkOrderList';
import FormNew from './components/FormNew';
import FormEdit from './components/FormEdit';
import WorkOrderIndex from './components/WorkOrderIndex';

import { data } from './seed';
import axios from 'axios';

class App extends Component {
  state = { data };

  createWorkOrder = formData => {
    axios
      .post('/api/workorders', formData)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    this.props.history.push('/');
  };

  updateWorkOrder = formData => {};

  render() {
    return (
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
          <Route
            path="/new"
            render={routeProps => (
              <FormNew onSubmit={this.createWorkOrder} {...routeProps} />
            )}
          />
          <Route
            path="/workorders/:id"
            render={routeProps => (
              <FormEdit onSubmit={this.updateWorkOrder} {...routeProps} />
            )}
          />
          <Route exact path="/workorders" component={WorkOrderList} />
          <Route
            exact
            path="/"
            render={routeProps => (
              <WorkOrderIndex data={this.state.data} {...routeProps} />
            )}
          />
        </Grid>
      </div>
    );
  }
}

export default withRouter(App);
