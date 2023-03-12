import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import AccountMenu from './AccountMenu';

export default function App() {
  return (
    <Container maxWidth="sm">
      <AccountMenu />
      <Outlet />
    </Container>
  );
}
