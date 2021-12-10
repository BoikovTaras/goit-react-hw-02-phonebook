import Input from './Components/Input/Input';
import Title from './Components/Title/Title';

function App() {
  // state = {
  //   contacts: [],
  //   name: ''
  // };

  return (
    <div>
      <Title title="Phonebook" />
      <Input />
      <Title title="Contacts" />
    </div>
  );
}

export default App;
