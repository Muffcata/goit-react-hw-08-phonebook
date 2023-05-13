import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const styles = {
  link: {
    marginLeft: '15px',
    position: 'relative',

    '&.active::after': {
      content: '""',
      display: 'block',
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      backgroundColor: '#be4d25',
      position: 'absolute',
      bottom: '0',
      left: '0',
      boxShadow: '0 0 10px 1px #be4d25',
      opacity: 0.2,
    },
  },
};
export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Link component={NavLink} to="/register">
        Register
      </Link>
      <Link component={NavLink} to="/login">
        Login
      </Link>
    </Box>
  );
};

export default AuthNav;
