import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { BadgeProps } from '@mui/material/Badge';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StyleUtil from '../util/style.util';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#2B9677',
    color : 'white',
    top: 2,

  },
}));

const AppbarMain = () => {
  return (
    <AppBar sx={{backgroundColor: 'white', border: 'none', zIndex:"10000000"}} className="appBar-main" elevation={0}>
       <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <MenuIcon sx={{color:'black'}}/>
        <Typography sx={{color: '#456D5F', fontWeight: '700'}}>  Quran Mazid </Typography>
       
        <IconButton aria-label="cart">
      <StyledBadge badgeContent={4}>
        <NotificationsNoneIcon color="action" />
      </StyledBadge>
    </IconButton>
       </Toolbar>
    </AppBar>
  )
}

export default AppbarMain