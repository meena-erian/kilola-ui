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
    <ListItemButton>
      <ListItemIcon>
        <AgricultureIcon />
      </ListItemIcon>
      <ListItemText primary="Explore Farms" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalOfferIcon />
      </ListItemIcon>
      <ListItemText primary="My Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </Fragment>
);