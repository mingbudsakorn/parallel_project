import React from 'react';
import Bar from '../components/Bar';
import { Paper } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatBox from '../components/ChatBox';

const Main = () => {
  return (
    <div>
      <Bar />
      <div style={{ display: 'flex', height: '92vh' }}>
        <Paper
          square
          elevation={0}
          width="40vh"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: '#424242',
            padding: '20px 15px 30px 15px',
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
              variant="outlined"
              placeholder="NAME"
              size="small"
              style={{
                backgroundColor: '#EFEFEF',
                width: 286,
                borderRadius: 6,
              }}
            />
            <AddCircleIcon
              style={{ color: '#FFF100', fontSize: 36, marginLeft: 6 }}
            />
          </div>
        </Paper>
        <Paper
          square
          elevation={0}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: '20px 20px 30px 20px',
            width: '126vh',
          }}
        >
          <div>
            <ChatBox />
          </div>
          <TextField
            variant="outlined"
            placeholder="Message.."
            size="small"
            style={{
              backgroundColor: '#EFEFEF',
              width: '100%',
              borderRadius: 6,
              marginLeft: 4,
            }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Main;
