import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const WorkOrderIndex = props => {
  return (
    <ListGroup>
      {props.data.map((wo, index) => (
        <LinkContainer to={`/workorders/${index}`}>
          <ListGroupItem>{wo.subject}</ListGroupItem>
        </LinkContainer>
      ))}
    </ListGroup>
  );
};

export default WorkOrderIndex;
