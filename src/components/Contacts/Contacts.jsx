import { React } from 'react';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/tasks/operations';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

export const Contacts = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="xs">
      <Box component="form" noValidate sx={{ mt: 3 }} key={id}>
        <Typography variant="h5" sx={{ textAlign: 'left' }}>
          {`${name}: ${number}`}
        </Typography>

        <Button
          variant="contained"
          size="small"
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>

        {/* <button
          className={style.button}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button> */}
      </Box>
      {/* </div> */}
    </Container>
  );
};

export default Contacts;
