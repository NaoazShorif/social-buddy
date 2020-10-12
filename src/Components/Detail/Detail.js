import { Card, Grid, CardContent,Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import Comments from '../Comments/Comments';
const useStyles = makeStyles({
    detail: {
        padding: '40px',
        margin: '20px'
    },
    bg: {
        backgroundColor:'gray'
    }
})

const Detail = (props) => {
    const classes = useStyles();
    const {title, body} = props.detail;
    return (
        <>
            <Grid container justify='center' alignItems='center' className= {classes.bg}>
                <Grid item xs="12" sm="6" className={classes.detail}>
                    <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">Detail:</Typography>
                        <Typography gutterBottom variant="h4" component="h3">
                        {title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                        {body}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container justify='center' alignItems='center' className= {classes.bg}>
              
                {
                    props.comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
                }
            </Grid>
          

        </>
    );
};

export default Detail;