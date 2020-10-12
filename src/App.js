import { Grid , makeStyles, Button } from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import React, {  useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import Detail from './Components/Detail/Detail';

const useStyles = makeStyles({
   gridContainer: {
     padding: "20px",
     margin:"20px",
   },
});
 

function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res=>res.json())
    .then (data => {
      setPosts(data);
    })
  },[]);
  const showDetail =(id) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then (res => res.json())
    .then (data => setDetail(data));

      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(data => setComments(data))
  }
  return (
      <div>
        <Router >
           <Header> </Header>
            <Switch>
              <Route exact path='/'>
                <Grid container justify='center' alignItems="center" className={classes.gridContainer} spacing={2}>
                {
                    posts.map(post =><Posts post={post} key={post.id} showDetail={showDetail}>
        
                    </Posts>)
                  }
                </Grid>
              </Route>
              <Route path='/detail'>
                <Detail detail={detail} comments={comments}></Detail>
              </Route>
            </Switch>   
         </Router>
      </div>
  )
}

export default App;
