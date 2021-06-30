import { gql, useQuery } from '@apollo/client';

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField"
import InfiniteScroll from "react-infinite-scroller"



function Component() {

  const useStyles = makeStyles(theme => ({
      gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px"
      },
      title: {
          fontSize: 18,
      },
      pos: {
          marginBottom: 12,
          fontSize: 12,
      },
      pane :{
        display: "inline-block",
        overflowY: "scroll",
        maxHeight: "400px",
      },
      button: {
        color: "white",
        [theme.breakpoints.down("xs")]: {
          '&:hover': {
            background: "red",
          },
          backgroundColor: "pink"
        },
        [theme.breakpoints.between("sm", "md")]: {
          '&:hover': {
            background: "red",
          },
          backgroundColor: "blue"
        },
        "@media (min-width: 1280px)": {
          '&:hover': {
            background: "white",
          },
          backgroundColor: "purple"
        }
      }
  }));

  const classes = useStyles();



  const query = gql`
  query info {
    dummyUserList
  }
`

  const [searchText, setSearchText] = useState("");
  const [infiniteScrollLst, setInfiniteScrollLst] = useState([]);

  const { loading, error, data} = useQuery(query);
  if (loading) return (<span>loading...</span>)
  if(error) return (<span>error</span>)
    function handleFetch() {   
      console.log("handlefetch") 
      fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query info {
          dummyUserList
        }
      `
        }),
      })
      .then(res => res.json())
      .then(res => (
        setInfiniteScrollLst(infiniteScrollLst.concat(JSON.parse(res.data.dummyUserList)))
      ));
    }

  return(
    <div>
      <div className={classes.pane}>
        <Button className={classes.button} variant="contained">
          Hello World!
        </Button>
        <TextField
          id="outlined-basic"
          label="search name"
          variant="outlined"
          value={searchText}
          style={{width: 300, marginLeft: "10px" }}
          onChange={(event) => {setSearchText(event.target.value)}}
        />
        <InfiniteScroll
          pageStart={0}
          loadMore={() =>handleFetch()}
          hasMore={true}
          useWindow={false}
          loader={
            <div key="loading" className="loader">
              Loading ...AAA
            </div>
          }
        >
          <Grid style={{ marginTop: "20px" }} className={classes.gridContainer} container spacing={4} justify="center">    
            {infiniteScrollLst.filter(user => (
            user.name.startsWith({searchText}.searchText))).map(user => (
                <Grid item xs={12} sm={6} md={4} xl={3} key={user.name}>
                  <Card className={classes.button} variant="outlined" >
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textPrimary"
                        gutterBottom
                      >
                        NAME - {user.name}  
                        <br/>
                        PHONE - {user.phone}
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        ADDRESS - {user.address}
                      </Typography>
                      <Typography variant="body2" component="p">
                        EMAIL - {user.email}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
      </InfiniteScroll>
      </div>
      <div>number of elements : {infiniteScrollLst.length}</div>
    </div>
  )}

export default Component;