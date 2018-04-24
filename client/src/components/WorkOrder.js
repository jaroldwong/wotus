import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

const WorkOrder = props => (
  <Panel className="flex-item">
    <Panel.Heading>{props.subject}</Panel.Heading>
    <Panel.Body>{props.details}</Panel.Body>
    <Panel.Footer>Submitted by: {props.submitter}</Panel.Footer>
  </Panel>
);

WorkOrder.propTypes = {
  subject: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  submitter: PropTypes.string.isRequired
};

export default WorkOrder;
