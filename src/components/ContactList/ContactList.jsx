import React from 'react';
import { Contacts } from 'components/Contacts/Contacts';
import { selectContacts, selectFilter } from 'redux/tasks/selectors';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterSt = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toString().toLowerCase().includes(filterSt)
  );

  return (
    <Box noValidate sx={{ mt: 2 }}>
      {filteredContacts.map(contact => (
        <Contacts
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </Box>
  );
};

export default ContactList;
