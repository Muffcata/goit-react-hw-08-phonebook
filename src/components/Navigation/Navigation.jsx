import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import Link from '@mui/material/Link';

import { Box } from '@mui/material';

const styles = {
  link: {
    marginLeft: '15px',
    position: 'relative',
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
