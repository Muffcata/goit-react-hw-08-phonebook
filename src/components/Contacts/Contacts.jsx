import { React } from 'react';

import style from '../Contacts/Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/tasks/operations';

export const Contacts = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.list} key={id}>
      <div className={style.text}>
        <p className={style.name}>{`${name}: ${number}`}</p>
        <button
          className={style.button}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contacts;
