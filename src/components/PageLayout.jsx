import React from 'react'
import DrawerAppBar from './Header'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

function PageLayout() {
  return (
    <>
    <DrawerAppBar/>
    <main>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
    </>
    
  )
}

export default PageLayout