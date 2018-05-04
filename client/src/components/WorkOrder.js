import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Panel, Button } from 'react-bootstrap';

class WorkOrder extends Component {
  _onClick = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { path, subject, details } = this.props;
    return (
      <Panel>
        <Panel.Heading>
          <Link to={path}>{subject}</Link>
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
