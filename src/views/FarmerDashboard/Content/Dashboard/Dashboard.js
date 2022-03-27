import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FarmsPanel from './FarmsPanel';
import BatchesPanel from './BatchesPanel';
import ReservationsPanel from './ReservationsPanel';
import CircularProgress from '@mui/material/CircularProgress';
import { api } from "../../../../constants/api";
import { client } from "../../../../auth";
import Copyright from '../../../../components/Copyright';
import { useEffect, useState } from 'react';



export default function Dashboard(props) {
    //const { user } = props;
    const [loading, setLoading] = useState(true);
    const [farms, setFarms] = useState();
    const [batches, setBatches] = useState();


    useEffect(() => {
        (async () => {
            var farms_res = await client.GET(api.user_farm);
            var batches_res = await client.GET(api.user_batch);
            setFarms(farms_res);
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
                        <FarmsPanel farms={farms} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: 450,
                        }}
                    >
                        <BatchesPanel batches={batches} farms={farms} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <ReservationsPanel />
                    </Paper>
                </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
        </Container>
    )
}