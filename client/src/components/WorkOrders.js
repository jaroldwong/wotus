import React, { Component } from 'react';
import axios from 'axios';

import FilterButtons from './FilterButtons';
import NewModal from './NewModal';
import EditModal from './EditModal';
import WorkOrder from './WorkOrder';

class WorkOrders extends Component {
  state = { data: [], currentWO: null, isEditing: false };

  componentDidMount() {
    this.fetchState();
  }

  fetchState = () => {
    axios.get('/api/workorders').then(res => {
      this.setState({ data: res.data });
    });
  };

  toggleEdit = id => {
    const currentWO = this.state.data.find(wo => {
      return wo._id === id;
    });

    this.setState(prevState => ({
      currentWO,
      isEditing: !prevState.isEditing
    }));
  };

  //TODO: error checking for failed update
  updateWorkOrder = (id, formData) => {
    axios
      .put(`/api/workorders/${id}`, formData)
      .then(res => {
        const index = this.state.data.findIndex(wo => {
          return wo._id === id;
        });
        let newData = [...this.state.data];
        newData[index] = { ...newData[index], ...formData };

        this.setState({ data: newData });
        this.toggleEdit();
      })
      .catch(error => {
        console.log(error);
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

        {this.state.isEditing && (
          <EditModal
            show={this.state.isEditing}
            data={this.state.currentWO}
            onClose={this.toggleEdit}
            onSubmit={this.updateWorkOrder}
          />
        )}

        {workorders.map(wo => (
          <WorkOrder
            key={wo._id}
            wo={wo}
            onEdit={this.toggleEdit}
            onDelete={this.deleteWorkOrder}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default WorkOrders;
