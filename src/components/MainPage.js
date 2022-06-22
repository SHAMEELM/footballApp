import React from 'react';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

import Header from '../headers/Header';
import Footer from './Footer'



const MainPage = () => {

    const navigate = useNavigate();

    const onOpenTournament = () => {
        navigate('/tournaments');
    }

        return (
            <div>
                <Header/>
                <Grid container spacing={0.5} sx={{padding:10}}>
                    <Grid item xs={4}>

                    <Card >
                    <CardMedia
                        component="img"
                        height="230"
                        image="images (1).jfif"
                        alt="players"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Updates
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Get latest news and updates about different teams and football related articles 
                            across the world
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button align="center" size="small">Open</Button>
                    </CardActions>
                </Card> 
                    </Grid>

                    <Grid item xs={4}>
                    <Card >
                    <CardMedia
                        component="img"
                        height="230"
                        image="images.jfif"
                        alt="players"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Players
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Get informations about players from different teams and different countries 
                            across the world
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button align="center" size="small">Open</Button>
                    </CardActions>
                </Card> 

                    </Grid>
                    <Grid item xs={4}>
                    <Card >
                    <CardMedia
                        component="img"
                        height="230"
                        image="images (3).jfif"
                        alt="players"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Tournaments
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Browse here to know about some of the tournaments conducted recently.
                        </Typography> 
                    </CardContent>
                    <CardActions>
                        <Button onClick={onOpenTournament} align="center" size="small">Open</Button>
                    </CardActions>
                </Card> 

                    </Grid>

                </Grid>
                           
                <Footer/>
                        
            </div>
        )
}

export default MainPage
