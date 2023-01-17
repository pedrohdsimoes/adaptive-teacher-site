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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';




export default function Teaching() {
    return (
        <div class='background_page'>
            <Paper className="t_bar" elevation={3}>
                <Link className="link" to="/" >
                    <Button className="t_ios_button" size="small" ><ArrowBackIosIcon /></Button>
                </Link>
                <span className='teaching_text'>Teaching Library</span>
            </Paper>
            <FaSpotify className='spotify_icon' />
            <Typography className="playlist_text">
                Playlist
            </Typography>
            <div class='teaching_body'>

                <Box >
                    <Grid container className="grid" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
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
                                            Click here to know more about the course
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
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
                                            Click here to know more about the course
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card elevation={5} >
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
                                            Click here to know more about the course
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card elevation={5} >
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
                                            Click here to know more about the course
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>

                </Box>
                <Paper className="player" elevation={8}>
                    <Stack spacing={3} direction="row" sx={{ marginTop: '15px' }} className='play_buttons' >
                        <SkipPreviousIcon fontSize="large" />
                        <PlayCircleIcon fontSize="large" />
                        <SkipNextIcon fontSize="large" />
                    </Stack>
                </Paper>


            </div>
        </div >
    );
}