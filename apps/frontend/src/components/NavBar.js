import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import { Link as RouterLink, Outlet } from 'react-router-dom';


export default function NavBar() {
  return (
    <>
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb" sx={{ m: 2 }}>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            component={RouterLink}
            to="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
        
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Todos
        </Typography>
        </Breadcrumbs>
      </div>
      <Outlet />
    </>
  );
}

