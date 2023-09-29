import React, { Component } from 'react';

import { Form, Text, Input, Button} from './ContactForm.styled'

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  // handleSubmit (evt) => {
  //     evt.preventDefault();
  //     const { name, number} = this.state
  //     form.reset();
  // }
  render() {
    const { name, number } = this.state;
    return (
      <div>
        Contact Form
        <Form onSubmit={this.handleSubmit}>
          <label>
            <Text>Name</Text>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="name"
              value={this.state.name}
            />
          </label>
          <label>
            <Text>Number</Text>
            <Input
              onChange={this.handleInputChange}
              type="tel"
              name="number"
              value={this.state.number}
            />
          </label>

          <Button type="submit">Add contacts</Button>
        </Form>
      </div>
    );
  }
}
