import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function Appbar() {
    return (
        <AppBar position="sticky">
            <Toolbar variant="dense">
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Tictactoe
                </Typography>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Avatar sx={{ width: 24, height: 24 }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
