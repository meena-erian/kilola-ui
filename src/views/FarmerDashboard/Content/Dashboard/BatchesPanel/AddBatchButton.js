import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { api } from "../../../../../constants/api";
import { client } from '../../../../../auth';
import { useState } from 'react';


export default function AddBatchButton(props) {
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState();
    const { farms } = props;

    const openForm = () => {
        if (!farms.length) {
            alert("You have not added any farms yet. Please add at least one form first");
            return;
        }
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
            api.user_batch,
            {
                crop: 1,
                farm: data.get('farm'),
                area: data.get('area'),
                weight: data.get('weight'),
                planting_date: data.get('planting_date'),
                harvesting_date: data.get('harvesting_date'),
                description: data.get('description')
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
            <Button onClick={openForm}>Add Batch</Button>
            <Dialog
                open={open}
                onClose={closeForm}
                scroll={"paper"}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add Batch Details</DialogTitle>
                <DialogContent dividers={true}>
                    <Box component="form" id="add-farm-form" noValidate onSubmit={saveForm} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="farm-select-label">Farm</InputLabel>
                                    <Select
                                        labelId="farm-select-label"
                                        id="farm"
                                        name="farm"
                                        label="Farm"
                                    >
                                        <MenuItem value="">
                                        </MenuItem>
                                        {farms.map(farm => (
                                            <MenuItem key={farm.id} value={farm.id}>{farm.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="crop-select-label">Crop</InputLabel>
                                    <Select
                                        labelId="crop-select-label"
                                        id="crop"
                                        name="crop"
                                        label="Crop"
                                        value={1}
                                    >
                                        <MenuItem value="">
                                        </MenuItem>
                                        <MenuItem value={1}>Pineapple</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="area"
                                    name="area"
                                    defaultValue={1000}
                                    required
                                    fullWidth
                                    id="area"
                                    label="Area (in acres)"
                                    disabled={saving}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="weight"
                                    name="weight"
                                    defaultValue={1}
                                    required
                                    fullWidth
                                    id="weight"
                                    label="Weight (in Kg)"
                                    disabled={saving}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="planting_date"
                                    name="planting_date"
                                    required
                                    fullWidth
                                    value={'2022-3-25'}
                                    id="planting_date"
                                    label="Planting Date"
                                    disabled={saving}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="harvesting_date"
                                    name="harvesting_date"
                                    required
                                    fullWidth
                                    value={'2023-3-25'}
                                    id="harvesting_date"
                                    label="Harvesting Date"
                                    disabled={saving}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    multiline
                                    autoComplete="description"
                                    value={"This is the best quality fruit in the world"}
                                    disabled={saving}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LoadingButton
                                    loading={saving}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Save
                                </LoadingButton>
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