import { useEffect, useState } from 'react'
import List from './List';
import Form from './Form';

function Contacts() {

  const [contacts, setContacts] = useState([
  {fullname: "Mehmet", phone_number: 123123},
   { fullname: "İrem", phone_number: 234234 }, 
   { fullname: "Deniz", phone_number: 456456 }]);

  useEffect(() => { console.log(contacts) }, [contacts])
  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;
