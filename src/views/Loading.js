import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


export default function Loading(props) {
    const msg = props.msg || 'The page is loading...';
    return (
        <div className="App">
            <header className="App-header">
                <p>Please wait.</p>
                <p>{msg}</p>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </header>
        </div>
    )
}