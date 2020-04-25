import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../pages/FakeLine2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    fontSize: '24px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  focus: {
    fontSize: '20px',
    marginRight: '10px',
  },
}));

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let colour = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */
  return colour;
};

export default function ButtonAppBar({ changeUid, name }) {
  const classes = useStyles();
  const handleLogout = () => {
    changeUid('');
    window.location.pathname = '/';
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: 'black', boxShadow: 'none' }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img
              src={Logo}
              alt="Logo"
              width="160"
              height="45"
              style={{ marginTop: 10 }}
            ></img>
          </Typography>
          <div
            className={classes.picture}
            style={{ backgroundColor: stringToColor(name) }}
          >
            {name[0]}
          </div>
          <div className={classes.focus}>{name}</div>
          <Button color="inherit" onClick={handleLogout}>
            SIGN OUT
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
