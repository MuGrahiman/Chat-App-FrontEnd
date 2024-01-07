import React from 'react'
import { useContacts } from '../Contexts/ContactsProvider'
import { ListGroup } from 'react-bootstrap'

const Contacts = () => {
  const {contacts}=useContacts()
  return (
    <ListGroup variant='flush'>
      {contacts.map(contact =>
        <ListGroup.Item key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}

export default Contacts