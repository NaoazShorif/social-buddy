import { Card, CardContent, CardHeader, Grid, Avatar, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    comment: {
        padding: "30px",
        margin: "10px",
    }
})

const Comments = (props) => {
    const {name, email, body} = props.comment;
    const classes = useStyles();

    return (
          <Grid item xs='12' sm='6' md='4' className={classes.comment}>
              <Card>
                    <CardHeader
                        avatar={
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        }
                        title={name}
                    />
                  <CardContent>
                  <Typography  color="textSecondary">
                        {email}
                  </Typography>
                  <Typography variant="body2" component="p">
                      "{body}"
                   </Typography>
                  </CardContent>
              </Card>
          </Grid>
    );
};

export default Comments;