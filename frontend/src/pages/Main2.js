import React from 'react';
import Bar from '../components/Bar';
import { Paper } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatBox from '../components/ChatBox';
import GroupBox from '../components/GroupBox';
import { Button, Grid, Link } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Main = () => {
  const [status1, setStatus1] = React.useState(true);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Bar />
      <div style={{ display: 'flex', height: '100vh' }}>
        <Paper
          square
          elevation={0}
          width="20vw"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: '#424242',
          }}
        >
          <div>
            <div
              style={{
                color: '#EFEFEF',
                fontSize: '20px',
                marginLeft: 16,
                padding: '20px 15px 20px 15px',
              }}
            >
              GROUPS
            </div>
            <div style={{ border: '0.5px solid #606060' }} />
            <GroupBox />
          </div>
          <div
            style={{
              padding: '20px 15px 30px 15px',
            }}
          >
            <div
              style={{
                color: '#A8A8A8',
                fontSize: '12px',
                margin: '0 0 2px 6px',
              }}
            >
              Create new group
            </div>
            <div
              style={{
                display: 'flex',
                alignSelf: 'center',
              }}
            >
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
          </div>
        </Paper>
        <Paper
          square
          elevation={0}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
          }}
        >
          <div
            style={{
              backgroundColor: '#606060',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <div style={{ display: 'flex', flexGrow: 3 }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexGrow: 2,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ color: '#EFEFEF', fontSize: '20px' }}>GROUP1</div>
                <IconButton style={{ color: '#979797' }}>
                  <CloseIcon />
                </IconButton>
              </div>

              <Button
                style={{
                  display: 'flex',
                  alignSelf: 'center',
                  backgroundColor: 'yellow',
                  padding: '1px 8px 1px 8px',
                }}
              >
                LEAVE GROUP
              </Button>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              padding: '20px 20px 30px 20px',
              height: '100%',
            }}
          >
            <div>
              <ChatBox />
              {status1 && ( // TODO set status
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '5px 0 5px 0',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      color: '#606060',
                      fontSize: '14px',
                      height: '22px',
                      width: '55px',
                      borderRadius: '10%',
                      textAlign: 'center',
                      textAlignVertical: 'center',
                    }}
                  >
                    unread
                  </div>
                </div>
              )}
            </div>
            <TextField
              variant="outlined"
              placeholder="Message.."
              size="small"
              style={{
                display: 'flex',
                alignSelf: 'center',
                backgroundColor: '#EFEFEF',
                width: '100%',
                borderRadius: 6,
                marginLeft: 4,
              }}
            />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Main;
