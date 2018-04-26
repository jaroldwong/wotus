import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import axios from 'axios';

class FormNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      submitter: '',
      status: '',
      details: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createWorkOrder = formData => {
    axios
      .post('/api/workorders', formData)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.createWorkOrder(this.state);
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
        <FormGroup controlId="formStatusSelect">
          <ControlLabel>Status</ControlLabel>
          <FormControl
            componentClass="select"
            name="status"
            type="text"
            placeholder="Status"
            value={this.state.status}
            onChange={this.handleChange}
          >
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="Complete">Complete</option>
          </FormControl>
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

        <Button type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default FormNew;
