import React from 'react';
import { Button, Paper, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './teaching.css'
import { FaSpotify } from "react-icons/fa";
import Grid from '@mui/material/Unstable_Grid2';
import { CardActionArea } from '@mui/material';
import awd from '../../assets/awd.png'
import cs from '../../assets/cs.png'
import os from '../../assets/os.png'
import ai from '../../assets/ai.png'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


export default function Teaching() {
    return (
        <div class='background_page'>
            <Paper className="t_bar" elevation={3}>
                <span className='teaching_text'>Teaching Library</span>
            </Paper>
            <FaSpotify className='spotify_icon' />
            <Typography className="playlist_text">
                Playlist
            </Typography>


            <Box >

                <Grid className="grid" container spacing={2}>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Card elevation={5} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={awd}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Adaptive Web Design
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Adaptive Web Design is a design approach that involves creating a website that can adjust and optimize its layout and content for different devices and screen sizes.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Card elevation={5}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={cs}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Computer Science
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Computer Science course is a course that covers the fundamental principles and techniques of computer science, as well as its applications in various fields.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Card elevation={5} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={ai}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Artificial Inteligence
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Artificial Intelligence (AI) course is a course that covers the fundamental principles and techniques of AI, as well as its applications in various fields.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <Card elevation={5} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={os}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Operative Systems
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Operating Systems (OS) course is a course that covers the fundamental principles and techniques of operating systems, as well as their applications in various fields.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Paper className="player" elevation={8}>
                <span className="play_info">Click the albums to know more about each course</span>
                <Stack spacing={3} direction="row" className='play_buttons' >
                    <SkipPreviousIcon fontSize="large" />
                    <PlayCircleIcon fontSize="large" />
                    <SkipNextIcon fontSize="large" />
                </Stack>
            </Paper>



        </div >
    );
}