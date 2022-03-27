import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import { Fragment } from 'react';

export function MenuItems(props) {
  const {page, setPage} = props;
  return (
    <Fragment>
      <ListItemButton 
        onClick={() => setPage('search')}
        selected={page === 'search'}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Explore Farms" />
      </ListItemButton>
      <ListItemButton
        onClick={() => setPage('reservations')}
        selected={page === 'reservations'}>
        <ListItemIcon>
          <LocalOfferIcon />
        </ListItemIcon>
        <ListItemText primary="My Orders" />
      </ListItemButton>
      <ListItemButton
        onClick={() => setPage('dashboard')}
        selected={page === 'dashboard'}
        disabled>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
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