import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, Paper, Typography } from '@mui/material';
import './google.css';
import { Link } from 'react-router-dom';
import profileAvatar from '../../assets/profile_avatar.png'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
export default function Google() {


    return (
        <div>



            <Typography className='g_text'><span className='blue_letter'>P</span><span className='red_letter'>r</span><span className='yellow_letter'>o</span><span className='blue_letter'>f</span><span className='green_letter'>e</span><span className='red_letter'>s</span><span className='yellow_letter'>s</span><span className='blue_letter'>o</span><span className='green_letter'>r </span> <span className='blue_letter'>V</span><span className='red_letter'>e</span><span className='yellow_letter'>r</span><span className='green_letter'>a</span></Typography>
            <Paper className='search' variant="outlined"  >
                <span className='s_text'>Computer Science teacher adpative website</span>
                <SearchIcon className='s_icon' />
            </Paper>
            <Paper className='search_sugest' variant="outlined"  >
                <span className='s_text'>Computer Science teacher Contacts</span>
                <span className='s_text'>Computer Science teacher Teaching</span>
                <span className='s_text'>Computer Science teacher Personal Info</span>

            </Paper>


        </div>
    );
}