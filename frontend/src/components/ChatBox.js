import React from 'react';
// import axios from 'axios';
// import moment from 'moment';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function stringToColor(string) {
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
}

const useStyles = makeStyles({
  root: {
    color: '#606060',
    fontSize: '16px',
  },
  second: {
    color: '#C6C6C6',
    fontSize: '12px',
  },
});

// const formatter = (date) => moment(date).format('MMMM Do YYYY, h:mm a');
const ChatBox = (name) => {
  const MyAvatar = withStyles({
    root: {
      backgroundColor: stringToColor('Material-UI'),
      // backgroundColor: stringToColor(name),
      size: '77px',
    },
    label: {
      // textTransform: 'capitalize',
      // fontFamily: 'Roboto',
      fontSize: '16px',
    },
  })(Avatar);
  const classes = useStyles();
  return (
    <div style={{ display: 'flex' }}>
      <MyAvatar>N</MyAvatar>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            margin: '0 0 3px 10px',
          }}
        >
          <div
            className={classes.root}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              marginRight: '10px',
            }}
          >
            Name
          </div>
          <div
            className={classes.second}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              marginRight: '10px',
            }}
          >
            date
          </div>
          <div
            className={classes.second}
            style={{ display: 'flex', alignItems: 'flex-end' }}
          >
            time
          </div>
        </div>
        <div className={classes.root} style={{ marginLeft: '20px' }}>
          Hello
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
