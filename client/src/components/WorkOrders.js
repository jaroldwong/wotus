import React, { Component } from 'react';
import axios from 'axios';

import WorkOrder from './WorkOrder';

class WorkOrders extends Component {
  state = { data: [] };

  componentDidMount() {
    this.fetchState();
  }

  fetchState = () => {
    axios.get('/api/workorders').then(res => {
      this.setState({ data: res.data });
    });
  };

  deleteWorkOrder = id => {
    this.setState(prevState => {
      return { data: prevState.data.filter(wo => wo._id !== id) };
    });
    axios.delete(`/api/workorders/${id}`);
    //.then(() => {this.fetchState();});
  };

  render() {
    return this.state.data.map(wo => (
      <WorkOrder
        key={wo._id}
        id={wo._id}
        path={`/workorders/${wo._id}`}
        subject={wo.subject}
        details={wo.details}
        onDelete={this.deleteWorkOrder}
      />
    ));
  }
}

export default WorkOrders;
