import React from 'react';
import { Contacts } from 'components/Contacts/Contacts';
import { selectContacts, selectFilter } from 'redux/tasks/selectors';
import { useSelector } from 'react-redux';
import style from 'components/Contacts/Contacts.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterSt = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toString().toLowerCase().includes(filterSt)
  );

  return (
    <ul className={style.wrapper}>
      {filteredContacts.map(contact => (
        <Contacts
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
