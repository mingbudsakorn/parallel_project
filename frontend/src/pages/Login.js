import React, { useState, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Link } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';  
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import logo from './FakeLine2.png'
const Login = () => {

    const [username, setUsername] = useState('')

    const handleSubmit = () => {
        console.log('TODO')
    }

    const theme = createMuiTheme({
        palette: {
          background: {
            default: "black"
          }
        }
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
            <img src={logo} className="App-logo" alt="logo" />
            <Typography style={{color:"yellow", margin:15}} component="h1" variant="h4" >  
                Login  
            </Typography>  
            <form>  
            <TextField  
                variant="outlined"  
                margin="normal"  
                fullWidth  
                label="Username"
                InputProps={{
                    style: {
                        color: "black",
                        background: "yellow"
                    }
                }}
            />  
            <TextField  
                variant="outlined"  
                margin="normal"  
                fullWidth  
                label="Password"  
                type="password"
                InputProps={{
                    style: {
                        color: "black",
                        background: "yellow"
                    }
                }}  
            />  
            <Button  
                type="submit"  
                fullWidth
                variant="contained"  
                style={{color:"black", marginTop:30, backgroundColor:"yellow"}}
                
            >       
                Login  
            </Button>  
            </form>  
        </Grid>
        </container>
        </MuiThemeProvider>
    );
    
    

}

export default Login