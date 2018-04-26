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
    axios.delete(`/api/workorders/${event.target.id}`).then(() => {
      this.fetchState();
    });
  };

  render() {
    // const grid = (
    //   <div className="flex-container">
    //     {this.state.data.map(wo => (
    //       <WorkOrder
    //         subject={wo.subject}
    //         submitter={wo.submitter}
    //         status={wo.status}
    //         details={wo.details}
    //       />
    //     ))}
    //   </div>
    // );

    const list = (
      <ListGroup>
        {this.state.data.map((wo, index) => (
          <ListGroupItem>
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

    return list;
  }
}

export default WorkOrders;
