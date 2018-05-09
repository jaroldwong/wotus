import React, { Component } from 'react';
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import axios from 'axios';

class EditModal extends Component {
  state = {
    subject: this.props.data.subject,
    submitter: this.props.data.submitter,
    status: this.props.data.status,
    details: this.props.data.details
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateWorkOrder = formData => {
    const id = this.props.data._id;
    axios
      .put(`/api/workorders/${id}`, formData)
      .then(res => {
        this.setState = {};
        this.props.onClose();
        this.props.fetchState();
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = () => {
    this.updateWorkOrder(this.state);
  };

  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>Edit Issue</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.onClose}>Close</Button>
          <Button bsStyle="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditModal;
