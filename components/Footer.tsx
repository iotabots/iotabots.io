
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Album() {

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright ©'}
                <Link
                    href="/"
                    className="link"
                    color="inherit"
                    sx={{ml: 1, mr: 1}}
                >
                    {'iotabots.io'}
                </Link>
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer" className='flex-footer'>
            <Typography variant="h6" align="center" gutterBottom>
                {'*BEE* *BOB* *BOO*'}
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                {'Follow us on '}
                <Link
                    href="https://twitter.com/iotabots"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                    color="inherit">
                    {'Twitter'}
                </Link>
            </Typography>
            <Copyright />
        </Box>
    )
}
