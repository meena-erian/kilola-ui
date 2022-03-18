import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


export default function Loading() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Please wait.</p>
                <p>The page is loading...</p>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </header>
        </div>
    )
}