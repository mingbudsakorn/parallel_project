import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import logo from './FakeLine2.png';
import axios from 'axios';
import { loadBalancer } from '../ip';
import { withRouter } from 'react-router-dom';

const Login = ({ changeUid, history, setName }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const result = await axios.post(loadBalancer + '/auth', {
        name: username,
      });
      const { data, status } = result;
      if (status === 200) {
        changeUid(data.uid);
        setName(username);
        history.push('/main');
      }
    } catch (e) {
      setError('Can not access database');
    }
  };

  const theme = createMuiTheme({
    palette: {
      background: {
        default: 'black',
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <container fixed>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '80vh' }}
        >
          <img
            src={logo}
            style={{ margin: 24, marginTop: 64 }}
            className="App-logo"
            alt="logo"
          />
          <Typography
            style={{ color: '#FCF250', margin: 15, marginTop: 36 }}
            component="h1"
            variant="h4"
          >
            Login
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            InputProps={{
              style: {
                color: 'black',
                background: '#FCF250',
                marginTop: 10,
                width: 400,
              },
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              style={{
                color: 'black',
                marginTop: 16,
                backgroundColor: 'yellow',
                width: 160,
              }}
            >
              Login
            </Button>
          </div>
          {error !== '' && <div style={{ color: 'red' }}>{error}</div>}
        </Grid>
      </container>
    </MuiThemeProvider>
  );
};

export default withRouter(Login);
