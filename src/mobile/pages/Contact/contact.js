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
import { Button, Divider, Paper, Typography } from '@mui/material';
import './contact.css';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import profileAvatar from '../../assets/profile_avatar.png'
import { Link } from 'react-router-dom';


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

export default function Contact() {
    return (
        <div>

            <Paper className="contacts_bar" elevation={3}>
                <Typography className='contacts_text'>Contacts</Typography>
                <Link className="link" to="/" >
                    <Button className="m_button" color="error" size="small" >Cancel</Button>
                </Link>
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

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <PhoneIphoneIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="PHONE" secondary="+4193495483" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="MAIL" secondary="cmafprofessor@gmail.com" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="WORK ADDRESS" secondary="Av. Fita Cola Preta, 4100-134, Romania" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LinkedInIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="LINKEDIN" secondary="@professorcmaf" />
                </ListItem>
            </List>
        </div>
    );
}