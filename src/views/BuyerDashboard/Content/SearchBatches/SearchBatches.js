import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import Copyright from '../../../../components/Copyright';
import SearchPanel from './SearchPanel/SearchPanel';
import { client } from '../../../../auth';
import { api } from '../../../../constants/api';

export default function SearchBatches(props) {
    const [loading, setLoading] = useState(true);
    const [batches, setBatches] = useState();

    useEffect(() => {
        (async () => {
            var batches_res = await client.GET(api.search_batch);
            setBatches(batches_res);
            setLoading(false);
        })();
    }, []);

    if(loading){
        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <CircularProgress />
            </Container>
        )
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: 450,
                        }}
                    >
                        <SearchPanel batches={batches}/>
                    </Paper>
                </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
        </Container>
    )
}