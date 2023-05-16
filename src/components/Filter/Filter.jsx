import { React } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/tasks/filterSlice';
import { selectFilter } from 'redux/tasks/selectors';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterHandler = e => {
    dispatch(setContactsFilter(e.target.value));
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <Typography variant="h5" sx={{ textAlign: 'left' }}>
          Contacts finder
        </Typography>

        <TextField
          onChange={filterHandler}
          value={filter}
          fullWidth
          margin="normal"
          placeholder="Enter contact"
          label="Search by name:"
          type="text"
          name="filter"
        ></TextField>
      </Box>
    </Container>
  );
};

export default Filter;
