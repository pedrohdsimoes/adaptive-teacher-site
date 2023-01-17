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

        <Paper className='t_wallpaper'>
            <Stack spacing={16} direction="row" className='t_menuStack' >
                <Link to="/contact" >
                    <Button className="t_tab_button" variant="contained" color="success" size="small">
                        <LocalPhoneIcon fontSize="large" />
                    </Button>
                </Link>
                <Link to="/teaching" >
                    <Button className="t_tab_button" variant="contained" size="small">
                        <SchoolIcon fontSize="large" />
                    </Button>
                </Link>
                <Link to="/info" >
                    <Button className="t_tab_button" variant="contained" color="warning" size="small">
                        <Person2Icon fontSize="large" />
                    </Button>
                </Link>


            </Stack>

        </ Paper >

    );
}