// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './App.module.css';

import Input from './Components/Input/Input';
import Title from './Components/Title/Title';
import Contacts from './Components/Contacts/Contacts';
import Filter from './Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  AddContact = event => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, event],
    }));
  };

  DeleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        item => item.id !== e.currentTarget.id,
      ),
    });
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
    const { contacts, filter } = this.state;
    const filteredContacts = this.FilteredContacts();
    return (
      <div className={s.container}>
        <Title title="Phonebook" />
        <Input contacts={contacts} addContact={this.AddContact} />
        <Title title="Contacts" />
        <Filter value={filter} onChange={this.FilterContact} />
        <Contacts
          contacts={filteredContacts}
          deleteContact={this.DeleteContact}
        />
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string,
};

export default App;
