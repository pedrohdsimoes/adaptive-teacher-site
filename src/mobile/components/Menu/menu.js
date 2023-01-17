import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SchoolIcon from '@mui/icons-material/School';
import Person2Icon from '@mui/icons-material/Person2';
import './menu.css'
import { Link } from "react-router-dom";



export default function Menu() {
    return (

        <Paper className='wallpaper'>
            <Stack spacing={6} direction="row" className='menuStack' >
                <Link to="/contact" >
                    <Button variant="contained" color="success" size="small">
                        <LocalPhoneIcon fontSize="large" />
                    </Button>
                </Link>
                <Link to="/teaching" >
                    <Button variant="contained" size="small">
                        <SchoolIcon fontSize="large" />
                    </Button>
                </Link>
                <Link to="/info" >
                    <Button variant="contained" color="warning" size="small">
                        <Person2Icon fontSize="large" />
                    </Button>
                </Link>


            </Stack>

        </ Paper >

    );
}