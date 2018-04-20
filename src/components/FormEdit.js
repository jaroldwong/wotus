import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import { data } from '../seed';

class FormEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      submitter: '',
      status: '',
      details: ''
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const resource = data[id];

    this.setState(resource);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form>
        <FormGroup controlId="formSubjectLine">
          <ControlLabel>Subject</ControlLabel>
          <FormControl
            name="subject"
            type="text"
            placeholder="Subject"
            value={this.state.subject}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="formNameLine">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            name="submitter"
            type="text"
            placeholder="Name"
            value={this.state.submitter}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="formStatusLine">
          <ControlLabel>Status</ControlLabel>
          <FormControl
            name="status"
            type="text"
            placeholder="Status"
            value={this.state.status}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="formDetails">
          <ControlLabel>Details</ControlLabel>
          <FormControl
            name="details"
            componentClass="textarea"
            placeholder="Details"
            value={this.state.details}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button type="submit" onClick={e => this.props.onSubmit(this.state, e)}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default FormEdit;
