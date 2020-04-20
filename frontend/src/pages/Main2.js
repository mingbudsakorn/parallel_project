import React from 'react';
import Bar from '../components/Bar';
import { Paper } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Main = () => {
  return (
    <div>
      <Bar />
      <div style={{ display: 'flex' }}>
        <Paper
          square
          elevation={0}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: '#424141',
            width: '40vh',
            height: '80vh',
            padding: '20px 10px 30px 10px',
          }}
        >
          <div style={{ color: '#EFEFEF', fontSize: '20px', marginLeft: 16 }}>
            GROUPS
          </div>
          <div>
            <div
              style={{
                color: '#A8A8A8',
                fontSize: '12px',
                margin: '0 0 2px 6px',
              }}
            >
              Create new group
            </div>
            <TextField
              placeholder="  NAME"
              style={{
                backgroundColor: '#EFEFEF',
                width: 250,
                borderRadius: 6,
              }}
            />
            {/* <IconButton color="#FFF100">add_circle</IconButton> */}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Main;
