import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/tasks/operations';
import { selectIsLoading, selectError } from 'redux/tasks/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Icon from 'images/685cceffa93afa89416c4345481bf834.png';
import Typography from '@mui/material/Typography';
import Loader from 'components/Loader/Loader';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h5" align="center" mb={6}>
        <img src={Icon} alt="phonebook icon" width="130" height="130" />
        <p>Add your contacts</p>
      </Typography>
      <ContactForm />
      <Filter />
      <ContactList />

      {isLoading && !error && <Loader />}
    </>
  );
};

export default ContactsPage;
