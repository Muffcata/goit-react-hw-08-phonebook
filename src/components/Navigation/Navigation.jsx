import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { styles } from 'components/AuthNav/AuthNav';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Link component={NavLink} to="/" sx={styles.link}>
          Home
        </Link>
        {isLoggedIn && (
          <Link component={NavLink} to="/contacts" sx={styles.link}>
            PhoneBook
          </Link>
        )}
      </Box>
    </nav>
  );
};
