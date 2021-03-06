import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';

const styles = (theme:any) => ({
    root: {
      padding: theme.spacing.unit,
      [theme.breakpoints.down('sm')]: {
        backgroundColor: theme.palette.secondary.main,
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.primary.main,
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: green[500],
      },
    },
  });

  function MediaQuery(props:any) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Typography variant="subtitle1">{'down(sm): red'}</Typography>
        <Typography variant="subtitle1">{'up(md): blue'}</Typography>
        <Typography variant="subtitle1">{'up(lg): green'}</Typography>
      </div>
    );
  }

  export const Dome =  withStyles(styles)(MediaQuery);