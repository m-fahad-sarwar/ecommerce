import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AssistantPhotoOutlinedIcon from '@mui/icons-material/AssistantPhotoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function NestedList(prop) {
    const [open, setOpen] = React.useState(true);


    return (

        <Box style={{backgroundColor : '#f0fcf0', minHeight: '80vh', width: '50px'}}>
            <List
                sx={{bgcolor: 'background.inherit' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                
            >
                <ListItemButton>
                    <ListItemIcon>
                        <WbSunnyIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Day" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <ShoppingCartIcon />

                    </ListItemIcon>
                    <ListItemText primary="Cart" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AssistantPhotoOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Flagged email" />
                </ListItemButton>

            </List>

        </Box>
    );
}