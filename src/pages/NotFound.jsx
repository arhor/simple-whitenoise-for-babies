import { useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NotFound = () => {
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate('/');
    };

    return (
        <Box sx={{
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            textAlign: 'center',
        }}>
            <Box mb={0}>
                <Typography variant="h4">
                    {'Ups, page not found'}
                </Typography>
            </Box>
            <Box mb={2}>
                <Typography variant="body1">
                    {'Please, try to find somewhere else'}
                </Typography>
            </Box>
            <Button variant="outlined" onClick={navigateToHomePage}>
                {'Bring me home'}
            </Button>
        </Box>
    );
};

export default NotFound;
