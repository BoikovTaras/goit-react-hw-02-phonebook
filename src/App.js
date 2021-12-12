// import { render } from '@testing-library/react';
import React, { Component } from 'react';

import Input from './Components/Input/Input';
import Title from './Components/Title/Title';
import Contacts from './Components/Contacts/Contacts';
import Filter from './Components/Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  AddContactName = event => {
    this.setState({ name: event.currentTarget.value });
  };

  AddContactNumber = event => {
    this.setState({ number: event.currentTarget.value });
  };

  AddContact = event => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, this.RenderContact()],
      name: '',
      number: '',
    }));
  };

  RenderContact = () => {
    return { id: nanoid(), name: this.state.name, number: this.state.number };
  };

  FilterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  FilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter),
    );
  };

  render() {
    const { contacts, filter, name, number } = this.state;
    const filteredContacts = this.FilteredContacts();
    return (
      <div>
        <Title title="Phonebook" />
        <Input
          name={name}
          number={number}
          AddContactName={this.AddContactName}
          AddContactNumber={this.AddContactNumber}
          AddContact={this.AddContact}
        />
        <Title title="Contacts" />
        <Filter value={filter} onChange={this.FilterContact} />
        <Contacts contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
