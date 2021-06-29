import { gql, useQuery } from '@apollo/client';

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


import React from "react";
import { makeStyles } from "@material-ui/core/styles";




const Component = () => {

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
  const { loading, error, data} = useQuery(query);
  if (loading) return (<span>loading...</span>)
  if(error) return (<span>error</span>)
  const dummyList = JSON.parse(data.dummyUserList);
  return(
    console.log(data.dummyUserList),
    <div>
      <Button className={classes.button} variant="contained">
        Hello World!
      </Button>
      <Grid style={{ marginTop: "20px" }} className={classes.gridContainer} container spacing={4} justify="center">    
          {dummyList.map((user) => (
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card className={classes.button} variant="contained">
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
    </div>
  )}

export default Component