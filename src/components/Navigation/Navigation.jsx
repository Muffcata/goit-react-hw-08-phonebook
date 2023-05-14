import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import Link from '@mui/material/Link';

import { Box } from '@mui/material';

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
      backgroundColor: '#6c3c77',
      position: 'absolute',
      bottom: '0',
      left: '0',
      boxShadow: '0 0 10px 1px #6c3c77',
      opacity: 0.2,
    },
  },
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Link component={NavLink} to="/" sx={styles.link}></Link>
        {isLoggedIn && (
          <Link component={NavLink} to="/contacts" sx={styles.link}></Link>
        )}
      </Box>
    </nav>
  );
};
