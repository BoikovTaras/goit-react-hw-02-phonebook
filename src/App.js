import { render } from '@testing-library/react';
import React, { Component } from 'react';

import Input from './Components/Input/Input';
import Title from './Components/Title/Title';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  AddContactName = event => {
    this.setState({ name: event.currentTarget.value });
  };

  AddContact = event => {
    this.setState(prevState => ({
      contacts: (prevState.contacts += this.state.name),
    }));
  };

  render() {
    const { contacts } = this.state;
    const { name } = this.state;
    return (
      <div>
        <Title title="Phonebook" />
        <Input
          name={name}
          AddContactName={this.AddContactName}
          AddContact={this.AddContact}
        />
        <Title title="Contacts" />
      </div>
    );
  }
}

export default App;
