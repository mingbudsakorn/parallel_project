import React, { useState, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Link } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import logo from './FakeLine2.png';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    console.log('TODO');
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
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Username"
              InputProps={{
                style: {
                  color: 'black',
                  background: '#FCF250',
                  marginTop: 10,
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Password"
              type="password"
              InputProps={{
                style: {
                  color: 'black',
                  background: '#FCF250',
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
                style={{
                  color: 'black',
                  marginTop: 38,
                  backgroundColor: 'yellow',
                  width: '70%',
                }}
              >
                Login
              </Button>
            </div>
          </form>
        </Grid>
      </container>
    </MuiThemeProvider>
  );
};

export default Login;
