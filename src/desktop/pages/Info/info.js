import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Paper } from '@mui/material';
import profilePhoto from '../../assets/profilePhoto.png';
import './info.css';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import FacebookIcon from '@mui/icons-material/Facebook';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function Info() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);





    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <FacebookIcon />
                        <Typography><span className='info_main_title'>Professor Vera Profile</span></Typography>

                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton size="large" color="inherit">
                            <AccountCircleIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>

            </Box>
            <Paper className='d_profilePhotoPaper'>
                <img class="d_img" src={profilePhoto} />
            </Paper>





            <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="About Me" {...a11yProps(0)} />
                        <Tab label="Curriculum Vitae" {...a11yProps(1)} />
                        <Tab label="Hobbies" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>

                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid xs={12}>
                                    <Card className='info_title' >
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                <span className='title_font'>PROFESSIONAL SUMMARY</span>
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card >
                                        <CardContent>
                                            <Typography variant="body2">
                                                <ul class='uli'>
                                                    <li>  <span className='text_font'>Experienced computer science teacher with over 10 years of experience in education.</span>  </li>
                                                    <li>   <span className='text_font'>Skilled in curriculum development, classroom management, and student engagement.</span>  </li>
                                                    <li> <span className='text_font'>Passionate about using technology to enhance learning and help students reach their full potential.</span> </li>
                                                </ul>
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card className='info_title' >
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                <span className='title_font'>EDUCATION</span>
                                            </Typography>

                                        </CardContent>

                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card >
                                        <CardContent>
                                            <Typography variant="body2">
                                                <ul class='uli'>
                                                    <li>      <span className='text_font'> Bachelor of Science in Computer Science, XYZ University, 2004-2008</span>  </li>
                                                    <li>    <span className='text_font'> Master of Education in Technology and Education, ABC College, 2008-2010</span>  </li>
                                                </ul>
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>

                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>

                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid xs={12}>
                                    <Card className='info_title' >
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                <span className='title_font'>CERTIFICATIONS</span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card >
                                        <CardContent>
                                            <Typography variant="body2">
                                                <ul class='uli'>
                                                    <li >  <span className='text_font'> Teaching Certificate in Computer Science, State of California, 2010-present</span>  </li>
                                                    <li>  <span className='text_font'> Certified Computing Professional (CCP), Computing Technology Industry Association (CompTIA), 2014-present</span>  </li>
                                                </ul>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card className='info_title' >
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                <span className='title_font'>EXPERIENCE</span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card >
                                        <CardContent>
                                            <Typography variant="body2">
                                                <ul class='uli'>
                                                    <li>    <span className='text_font'> Computer Science Teacher, DEF High School, 2010-present </span> </li>
                                                    <li>    <span className='text_font'> Developed and implemented a new computer science curriculum for high school students</span>  </li>
                                                    <li>   <span className='text_font'>Taught courses in computer programming, computer hardware, and computer networks</span> </li>
                                                    <li>  <span className='text_font'>Mentored students in robotics club and organized annual robotics competition</span> </li>
                                                    <li> <span className='text_font'>Led professional development workshops for teachers on using technology in the classroom</span> </li>
                                                    <li>  <span className='text_font'>Computer Science Tutor, XYZ Learning Center, 2008-2010 </span> </li>
                                                </ul>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card className='info_title' >
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                <span className='title_font'>SKILLS</span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card >
                                        <CardContent>
                                            <Typography variant="body2">
                                                <ul class='uli'>
                                                    <li>     <span className='text_font'>Proficient in Python, Java, and C++ programming languages </span> </li>
                                                    <li>    <span className='text_font'> Experience with computer hardware and networking</span>  </li>
                                                    <li>    <span className='text_font'>Proficient in Microsoft Office and Google Suite</span> </li>
                                                    <li>   <span className='text_font'>Experience with learning management systems (LMS) such as Blackboard and Canvas</span> </li>
                                                </ul>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card className='info_title' >
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                <span className='title_font'>REFERENCES</span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card >
                                        <CardContent>
                                            <Typography variant="body2">
                                                <ul class='uli'>
                                                    <li>     <span className='text_font'>Available upon request </span> </li>
                                                </ul>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir={theme.direction}>


                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid xs={12}>
                                    <Card className='info_title'>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                <span className='title_font'>SNOWBOARD</span>
                                            </Typography>

                                        </CardContent>

                                    </Card>
                                </Grid>
                                <Grid xs={12}>
                                    <Card >
                                        <CardContent>
                                            <Typography variant="body2">
                                                <span className='text_font'> It was a cold winter day in the mountains when I first tried snowboarding. My friends had been begging me to join them on the slopes for years, but I had always been hesitant. I wasn't sure if I was ready for the challenge, or if I would even enjoy it.

                                                    But on that day, something inside me just clicked. As I strapped on my snowboard and stood at the top of the mountain, I felt a sense of excitement and anticipation that I had never experienced before.

                                                    The first few runs were rough. I fell a lot and my muscles ached from the exertion. But as I gained more confidence and learned how to control my board, I began to feel a sense of freedom and joy that I had never known.

                                                    Before I knew it, the day was over and it was time to go home. But as I packed up my gear, I knew that I had found a new hobby that I was passionate about.

                                                    Over the years, I returned to the slopes again and again, each time feeling more and more comfortable and confident on my snowboard. I learned new tricks and explored different trails, always pushing myself to be better and have more fun.

                                                    Now, snowboarding is an integral part of my life. It's a hobby that brings me joy, challenges me to be my best, and helps me to escape the stresses of everyday life. I can't imagine my life without it.</span>

                                            </Typography>


                                        </CardContent>

                                    </Card>
                                </Grid>

                            </Grid>
                        </Box>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div >
    );
}