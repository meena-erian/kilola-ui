import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Fragment } from 'react';

export function MenuItems(props) {
  const { page, setPage } = props;
  return (
    <Fragment>
      <ListItemButton 
        onClick={() => setPage('dashboard')}
        selected={page === 'dashboard'}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton 
        onClick={() => setPage('myfarms')}
        selected={page === 'myfarms'}
        disabled>
        <ListItemIcon>
          <AgricultureIcon />
        </ListItemIcon>
        <ListItemText primary="My Farms" />
      </ListItemButton>
      <ListItemButton 
        onClick={() => setPage('offers')}
        selected={page === 'offers'}
        disabled>
        <ListItemIcon>
          <LocalOfferIcon />
        </ListItemIcon>
        <ListItemText primary="Customer Offers" />
      </ListItemButton>
      <ListItemButton 
        onClick={() => setPage('settings')}
        selected={page === 'settings'}
        disabled>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </Fragment>
  )
}
