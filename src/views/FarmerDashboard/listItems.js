import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Fragment } from 'react';

export const mainListItems = (
  <Fragment>
    <ListItemButton selected>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton disabled>
      <ListItemIcon>
        <AgricultureIcon />
      </ListItemIcon>
      <ListItemText primary="My Farms" />
    </ListItemButton>
    <ListItemButton disabled>
      <ListItemIcon>
        <LocalOfferIcon />
      </ListItemIcon>
      <ListItemText primary="Customer Offers" />
    </ListItemButton>
    <ListItemButton disabled>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </Fragment>
);