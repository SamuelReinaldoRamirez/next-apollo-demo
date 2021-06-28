import { gql, useQuery } from '@apollo/client';

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Component = () => {

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)",
        },
        title: {
            fontSize: 18,
        },
        pos: {
            marginBottom: 12,
            fontSize: 12,
        },
    });

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
    <Grid style={{ marginTop: "20px" }} container spacing={2}>
          {dummyList.map((user) => (
            <Grid item xs={4} key={user.name}>
              <Card className={classes.root}>
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
  )}

export default Component