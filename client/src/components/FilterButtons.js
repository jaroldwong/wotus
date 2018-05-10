import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class FilterButtons extends Component {
  render() {
    return (
      <ButtonGroup justified style={{ marginBottom: '1em' }}>
        <Button href="#active">Active</Button>
        <Button href="#inprogress">In Progress</Button>
        <Button href="#completed">Completed</Button>
      </ButtonGroup>
    );
  }
}

export default FilterButtons;
