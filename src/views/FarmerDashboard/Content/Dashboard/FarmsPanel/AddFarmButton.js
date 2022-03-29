import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import { api } from "../../../../../constants/api";
import { client } from '../../../../../auth';
import { useState } from 'react';
import LocationInput from '../../../../../components/LocationInput';


export default function AddFarmButton() {
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState();

    const openForm = () => {
        setOpen(true);
    };

    const closeForm = () => {
        setOpen(false);
    };

    const saveForm = async (event) => {
        event.preventDefault();
        setSaving(true);
        const data = new FormData(event.currentTarget);
        var farm = await client.POST(
            api.user_farm,
            {
                name: data.get('name'),
                size: data.get('size'),
                location: data.get('location')
            }
        );
        if ('id' in farm) {
            window.location.reload();
        }
        else {
            alert(JSON.stringify(farm));
        }
        setSaving(false);
        setOpen(false);
    }

    return (
        <div>
            <Button onClick={openForm}>Add Farm</Button>
            <Dialog
                open={open}
                onClose={closeForm}
                scroll={"paper"}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add Farm Details</DialogTitle>
                <DialogContent dividers={true}>
                    <Box component="form" id="add-farm-form" noValidate onSubmit={saveForm} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Farm Name (How you refer to this farm?)"
                                    autoFocus
                                    disabled={saving}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    autoComplete="size"
                                    name="size"
                                    required
                                    fullWidth
                                    id="size"
                                    label="Size (in acres)"
                                    disabled={saving}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="location-input"
                                    label="Location"
                                    name="location"
                                    autoComplete="location"
                                    disabled={false}
                                />
                                <LocationInput
                                    center={{ lat: -34.397, lng: 150.644 }}
                                    zoom={4}
                                    style={{ height: '200px' }}
                                    onChange={
                                        loc => {
                                            let inp = document.querySelector('#location-input');
                                            inp.focus();
                                            inp.value = `Lat:${loc.lat} Lng:${loc.lng}`;
                                        }
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LoadingButton
                                    loading={saving}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >Save</LoadingButton>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button disabled={saving} onClick={closeForm}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}