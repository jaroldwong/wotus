import React, { Component } from 'react';
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import { ModalContext } from '../App';
import axios from 'axios';

class NewModal extends Component {
  state = {
    subject: '',
    submitter: '',
    status: '',
    details: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createWorkOrder = formData => {
    axios
      .post('/api/workorders', formData)
      .then(res => {
        this.setState = {};
        this.props.context.toggleNewModal();
        this.props.fetchState();
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = () => {
    // e.preventDefault();
    this.createWorkOrder(this.state);
  };

  render() {
    const { showNewModal, toggleNewModal } = this.props.context;

    return (
      <Modal show={showNewModal}>
        <Modal.Header>
          <Modal.Title>Report New Issue</Modal.Title>
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
          <Button onClick={toggleNewModal}>Close</Button>
          <Button bsStyle="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default props => (
  <ModalContext.Consumer>
    {context => <NewModal {...props} context={context} />}
  </ModalContext.Consumer>
);
