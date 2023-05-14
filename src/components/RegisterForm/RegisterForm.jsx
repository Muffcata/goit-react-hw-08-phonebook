import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Registration
        </Typography>
        <TextField
          label="Name"
          variant="standard"
          name="name"
          type="text"
          autoComplete="off"
          placeholder="Enter your name"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="standard"
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Enter your email"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="standard"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" type="submit" size="large">
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterForm;
