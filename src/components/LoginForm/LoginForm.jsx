import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
    // alert('Oops, something went wrong! Please, complete all fields');
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            Sign In
          </Typography>
          <TextField
            label="Email"
            variant="standard"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="standard"
            name="password"
            type="password"
            autoComplete="password"
            placeholder="Enter your password"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" type="submit" size="large">
            Log in
          </Button>
        </Box>
      </Container>
    </>
  );
};
