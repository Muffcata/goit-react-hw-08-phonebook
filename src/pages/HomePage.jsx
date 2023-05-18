import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhonebookImage from 'images/4298256.png';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '740px',
    width: '100%',
  },
  span: {
    position: 'relative',
    top: 26,
  },
};

export default function HomePage() {
  return (
    <Box style={styles.container}>
      <Typography variant="h4" align="center" mb={8}>
        <span style={styles.span}>
          <img
            src={PhonebookImage}
            alt="phonebook icon"
            width="70"
            height="70"
          />
        </span>
        &nbsp; Hi, this is your Phonebook!
      </Typography>
      <Typography variant="h6" align="center">
        Please, register or log in to continue
      </Typography>
    </Box>
  );
}
