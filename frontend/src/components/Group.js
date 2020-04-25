import React, { useState, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Link } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { loadBalancer } from '../ip';

const Group = ({ uid }) => {
  const [newGname, setNewGname] = useState('');

  const handleCreateGroup = async () => {
    try {
      const result = await axios.post(loadBalancer + '/group/create', {
        gname: newGname,
        uid,
      });
      const { data, status } = result;
      if (status === 200) {
        setNewGname('');
        // TODO : fetchdata
      }
    } catch (e) {
      console.log('Can not access database');
    }
  };

  return (
    <Grid container spacing={0}>
      <Grid
        xs={9}
        style={{
          height: '89vh',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          style={{ backgroundColor: 'white', borderRadius: '12px' }}
          value={newGname}
          onChange={(e) => setNewGname(e.target.value)}
        />
      </Grid>
      <Grid xs={3}>
        <Button
          style={{ color: 'black', backgroundColor: 'yellow', marginLeft: 25 }}
          onClick={handleCreateGroup}
        />
      </Grid>
    </Grid>
  );
};

export default Group;
