import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Panel, Button } from 'react-bootstrap';
import axios from 'axios';

import EditModal from './EditModal';

class WorkOrder extends Component {
  state = {
    editMode: false
  };

  _onClick = () => {
    this.props.onDelete(this.props.id);
  };

  toggleEditMode = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }));
  };

  handleSubmit = values => {
    const id = this.props.id;
    axios.put(`/api/workorders/${id}`, values).then(() => {
      this.toggleEditMode();
    });
  };

  render() {
    const { subject, details } = this.props;

    const editing = this.state.editMode ? (
      <EditModal
        show={this.state.editMode}
        data={this.props.wo}
        fetchState={this.props.fetchState}
        onClose={this.toggleEditMode}
        onSubmit={this.handleSubmit}
      />
    ) : null;

    return (
      <React.Fragment>
        {editing}
        <Panel>
          <Panel.Heading>
            <Button bsStyle="link" onClick={this.toggleEditMode}>
              {subject}
            </Button>

            <Button
              className="pull-right"
              bsStyle="danger"
              bsSize="xsmall"
              onClick={this._onClick}
            >
              Delete
            </Button>
          </Panel.Heading>
          <Panel.Body>{details}</Panel.Body>
        </Panel>
      </React.Fragment>
    );
  }
}

WorkOrder.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default WorkOrder;
