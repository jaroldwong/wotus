import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import WorkOrder from './WorkOrder';

class WorkOrders extends Component {
  state = { data: [] };

  componentDidMount() {
    this.fetchState();
  }

  fetchState = () => {
    axios.get('/api/workorders').then(res => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  };

  deleteWorkOrder = event => {
    const id = event.target.id;
    this.setState(prevState => {
      return { data: prevState.data.filter(wo => wo._id !== id) };
    });
    axios.delete(`/api/workorders/${id}`);
    //.then(() => {this.fetchState();});
  };

  render() {
    return (
      <ListGroup>
        {this.state.data.map(wo => (
          <ListGroupItem key={wo._id}>
            <Link to={`/workorders/${wo._id}`}>{wo.subject}</Link>
            <Button
              className="pull-right"
              bsStyle="danger"
              bsSize="xsmall"
              id={wo._id}
              onClick={this.deleteWorkOrder}
            >
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default WorkOrders;
