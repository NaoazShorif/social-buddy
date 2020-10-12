import { Button, Card, CardActionArea, CardActions, CardContent, Typography, makeStyles, CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      background: "linear-gradient(to right, #CACFD2,#BDC3C7 )",
      fontSize: 20,
      boxShadow: "0px 0px 10px #a7d3fc"
    },
    content: {
        minHeight: 300,
    },
    link: {
        textDecoration: "none",
        fontWeight: 700,
    }
  });
const Posts = (props) => {
    const {title , body ,id}= props.post;
    const classes = useStyles();
    return (
        <Grid item xs="12" sm="6" md="4">
            <Card className={classes.root}>
                <CardActionArea className={classes.content}>
                <CardContent>
                    <Typography variant="h4" component="h4">Post No. {id}</Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                    {title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    {body}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
               <Link to='/detail' className={classes.link}>
                    <Button variant="contained" color="primary" onClick={()=>props.showDetail(id) }>
                        Show Detail
                    </Button>
               </Link>
                </CardActions>
            </Card>
      </Grid>
    );
};

export default Posts;