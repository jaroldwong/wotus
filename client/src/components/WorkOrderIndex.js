import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

class WorkOrderIndex extends Component {
  state = { data: [] };

  componentDidMount() {
    axios.get('/api/workorders').then(res => {
      this.setState(res);
    });
  }

  render() {
    return (
      <ListGroup>
        {this.state.data.map((wo, index) => (
          <LinkContainer to={`/workorders/${index}`}>
            <ListGroupItem>{wo.subject}</ListGroupItem>
          </LinkContainer>
        ))}
      </ListGroup>
    );
  }
}

export default WorkOrderIndex;
