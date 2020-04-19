import React, { useState, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Link } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const Group = () => {

  const handleSubmit = () => {
    console.log('TODO');
  };

  return (
    
    <Grid container spacing={0}>
        <Grid xs={9} style={{height:'89vh', flexDirection:'column', justifyContent:'center'}}>
            <TextField variant='outlined' size='small' fullWidth style={{backgroundColor:'white', borderRadius:"12px"}}/>
        </Grid>
        <Grid xs={3}>
            <Button style={{color:'black', backgroundColor:'yellow', marginLeft:25}} />
        </Grid>
    </Grid>
    
  );
};

export default Group;
