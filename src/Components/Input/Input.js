const Input = ({ name, AddContactName, AddContact }) => {
  return (
    <form>
      <h3>Name</h3>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={AddContactName}
        />
      </label>
      <button type="button" onClick={AddContact}>
        Add contact
      </button>
    </form>
  );
};

export default Input;
