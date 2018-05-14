import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class FilterButtons extends Component {
  handleClick = event => {
    this.props.updateFilter(event.target.name);
  };
  render() {
    return (
      <ButtonGroup justified style={{ marginBottom: '1em' }}>
        <Button href="#all" name="all" onClick={this.handleClick}>
          All
        </Button>
        <Button href="#active" name="active" onClick={this.handleClick}>
          Active
        </Button>
        <Button href="#completed" name="completed" onClick={this.handleClick}>
          Completed
        </Button>
      </ButtonGroup>
    );
  }
}

export default FilterButtons;
