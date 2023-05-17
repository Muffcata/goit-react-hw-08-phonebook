import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { addContact } from 'redux/tasks/operations';
import { selectContacts } from 'redux/tasks/selectors';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const foundContant = contacts.find(contact => contact.name === name);

    if (foundContant) {
      return alert(name + 'is already in contacts.');
    } else {
      dispatch(addContact({ name: name, number: number }));
    }
    form.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          type="text"
          placeholder="Enter contact name"
          name="name"
          fullWidth
          margin="normal"
          label="Name"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          type="tel"
          placeholder="Enter contact number"
          fullWidth
          margin="normal"
          label="Number"
          autoComplete="off"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button variant="contained" size="medium" type="submit">
          Add Contact
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
