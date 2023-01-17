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
import './contact.css';
import { Link } from 'react-router-dom';
import profileAvatar from '../../assets/profile_avatar.png'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
export default function Contact() {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <div>

            <Paper className="contacts_bar" elevation={3}>
                <Typography className='contacts_text'>Contacts</Typography>

            </Paper>
            <StyledBadge
                className='badge'
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar className='profile_avatar' src={profileAvatar} />
            </StyledBadge>
            <Typography variant="h4"><span className='contact_name'>Professor Vera</span></Typography>
            <List sx={{ left: '100px', width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ height: '70px', width: '70px', marginRight: '10px' }}>
                            <PhoneIphoneIcon sx={{ height: '50px', width: '50px' }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="PHONE" secondary="+4193495483" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ height: '70px', width: '70px', marginRight: '10px' }}>
                            <EmailIcon sx={{ height: '50px', width: '50px' }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="MAIL" secondary="cmafprofessor@gmail.com" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ height: '70px', width: '70px', marginRight: '10px' }}>
                            <WorkIcon sx={{ height: '50px', width: '50px' }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="WORK ADDRESS" secondary="Av. Fita Cola Preta, 4100-134, Romania" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ height: '70px', width: '70px', marginRight: '10px' }}>
                            <LinkedInIcon sx={{ height: '50px', width: '50px' }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="LINKEDIN" secondary="@professorcmaf" />
                </ListItem>
            </List>
        </div>
    );
}