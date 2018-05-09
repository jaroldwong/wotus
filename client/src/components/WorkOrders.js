import React, { Component } from 'react';
import axios from 'axios';

import FilterButtons from './FilterButtons';
import NewModal from './NewModal';
// import EditModal from './EditModal';
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
    const workorders = this.state.data;

    return (
      <React.Fragment>
        <FilterButtons />

        <NewModal fetchState={this.fetchState} />

        {workorders.map(wo => (
          <WorkOrder
            key={wo._id}
            id={wo._id}
            subject={wo.subject}
            details={wo.details}
            wo={wo}
            fetchState={this.fetchState}
            onDelete={this.deleteWorkOrder}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default WorkOrders;
