import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Button } from 'react-bootstrap';

class WorkOrder extends Component {
  handleEdit = () => {
    this.props.onEdit(this.props.wo._id);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.wo._id);
  };

  render() {
    const { subject, details } = this.props.wo;

    return (
      <React.Fragment>
        <Panel>
          <Panel.Heading>
            <Button bsStyle="link" onClick={this.handleEdit}>
              {subject}
            </Button>

            <Button
              className="pull-right"
              bsStyle="danger"
              bsSize="xsmall"
              onClick={this.handleDelete}
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
  wo: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default WorkOrder;
