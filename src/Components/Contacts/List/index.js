import { useState } from 'react'

function List({ contacts }) {
  const [filterText, setfilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item)
      .some((key) => item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase()))
  })

  return (
    <div id="container">
      <h1>Contacts</h1>
      <input placeholder="Filter Contact" 
      value={filterText} 
      onChange={(e) => setfilterText(e.target.value)}></input>
      <ul className='List'>
        {filtered.map((contact, i) => 
        (<li key={i}>
        <span>{contact.fullname}</span>
        <span>{contact.phone_number}</span>
        </li>))}
      </ul>
      <p>Total Contacts {(filtered.length)}</p>
    </div>
  )
}

export default List;