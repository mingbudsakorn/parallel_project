import React, { useState, useEffect } from 'react';
import Bar from '../components/Bar';
import { Paper } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MessageChat from '../components/MessageChat';
import GroupBox from '../components/GroupBox';
import { Button, Grid, Link } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import moment from 'moment';
import { loadBalancer, socketServer } from '../ip';
import io from 'socket.io-client';

const socket = io(socketServer);
const Main = ({ uid, changeUid }) => {
  const [newGroup, setNewGroup] = useState('');
  const [allGroup, setAllGroup] = useState([]);
  const [message, setMessage] = useState('');
  const [focusedGroup, setFocus] = useState(null);
  const [focusedMessage, setFocusMessage] = useState(null);

  const handleCreateGroup = async () => {
    if (newGroup !== '') {
      try {
        const result = await axios.post(loadBalancer + '/group/create', {
          gname: newGroup,
          uid,
        });
        const { data, status } = result;
        if (status === 200) {
          setNewGroup('');
          fetchAllGroup();
        }
      } catch (e) {
        console.log('Can not access database');
      }
    }
  };

  const handleOpenGroup = async (index) => {
    if (allGroup[index].join) {
      if (focusedGroup) {
        await handleReadMessage(focusedGroup.gid);
      }
      const new_message = await fetchMessage(allGroup[index].gid);
      setFocus(allGroup[index]);
      handleSetFocusMessage(new_message);
      const new_allGroup = allGroup;
      new_allGroup[index].unread = false;
      setAllGroup(new_allGroup);
    }
  };

  const handleJoinGroup = async (gid) => {
    const result = await axios.post(loadBalancer + '/group/join', {
      gid,
      uid,
    });
    const { data, status } = result;
    if (data === 'EXISTED') {
      fetchAllGroup();
    }
  };

  const handleLeaveGroup = async () => {
    const result = await axios.post(loadBalancer + '/group/leave', {
      uid,
      gid: focusedGroup.gid,
    });
    const { data } = result;
    if (data === 'SUCCESS') {
      setFocus(null);
      handleSetFocusMessage(null);
      await fetchAllGroup();
    }
  };

  const handleSendMessage = async () => {
    if (message !== '') {
      setMessage('');
      const result = await axios.post(loadBalancer + '/message/send', {
        uid,
        gid: focusedGroup.gid,
        content: message,
      });
      const { status } = result;
      if (status === 200) {
        // await handleReadMessage(focusedGroup.gid);
        // const new_message = await fetchMessage(focusedGroup.gid);
        // await fetchAllGroup();
        // setFocus(focusedGroup);
        // handleSetFocusMessage(new_message);
      }
    }
  };

  const handleSetFocusMessage = (new_message) => {
    if (new_message) {
      new_message.readMessage.sort(
        (a, b) => moment(a.send_at).format('x') - moment(b.send_at).format('x')
      );
      new_message.unreadMessage.sort(
        (a, b) => moment(a.send_at).format('x') - moment(b.send_at).format('x')
      );
      setFocusMessage(new_message);
      var objDiv = document.getElementById('chat');
      var objDiv2 = document.getElementById('unread-chat');
      if (new_message && new_message.unreadMessage.length <= 0) {
        objDiv.scrollTop = objDiv.scrollHeight;
      } else if (new_message) {
        objDiv.scrollTop = objDiv2.offsetTop;
      }
    }
  };

  const handleReadMessage = async (gid) => {
    const result = await axios.post(loadBalancer + '/message/read', {
      uid,
      gid,
    });
  };

  const fetchMessage = async (gid) => {
    const result = await axios.post(loadBalancer + '/message/all', {
      gid,
      uid,
    });
    const { data, status } = result;
    if (status === 200) {
      return data;
    } else {
      return [];
    }
  };
  const fetchAllGroup = async () => {
    const result = await axios.get(loadBalancer + '/group/all', {
      params: { uid },
    });
    const new_allGroup = result.data;
    setAllGroup(new_allGroup);
  };

  const handleReceiveMessage = async (data) => {
    // if (data.message.uid !== uid) {
    if (data.message && focusedGroup && data.message.gid === focusedGroup.gid) {
      // await handleReadMessage(focusedGroup.gid);
      const { unreadMessage, readMessage } = focusedMessage;
      readMessage.push(...unreadMessage);
      readMessage.push(data.message);
      handleSetFocusMessage({ readMessage, unreadMessage: [] });
      // const new_message = await fetchMessage(focusedGroup.gid);
      // handleSetFocusMessage(new_message);
    } else {
      await fetchAllGroup();
    }
    // }
  };

  useEffect(() => {
    socket.on('chat', (response) => {
      handleReceiveMessage(response);
    });
    return () => {
      socket.off('chat');
    };
  }, [focusedGroup, focusedMessage]);

  useEffect(() => {
    fetchAllGroup();
    socket.on('group', async (response) => {
      await fetchAllGroup();
    });
    return () => {
      socket.off('group');
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Bar changeUid={changeUid} />
      <div style={{ display: 'flex', height: `calc(100vh - 64px)` }}>
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
            <div style={{ border: '1px solid #606060' }} />
            {allGroup.map((group, index) => (
              <div
                key={index}
                onClick={() => handleOpenGroup(index)}
                style={{ cursor: 'pointer' }}
              >
                <GroupBox
                  data={group}
                  focusGid={focusedGroup && focusedGroup.gid}
                  handleJoinGroup={handleJoinGroup}
                />
              </div>
            ))}
          </div>
          <div style={{ padding: '20px 15px 30px 15px' }}>
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
                value={newGroup}
                onChange={(e) => setNewGroup(e.target.value)}
              />
              <AddCircleIcon
                style={{
                  color: '#FFF100',
                  fontSize: 36,
                  marginLeft: 6,
                  cursor: 'pointer',
                }}
                onClick={handleCreateGroup}
              />
            </div>
          </div>
        </Paper>
        {focusedGroup && focusedMessage && (
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
                  <div style={{ color: '#EFEFEF', fontSize: '20px' }}>
                    {focusedGroup.name}
                  </div>
                  <IconButton
                    style={{ color: '#979797' }}
                    onClick={async () => {
                      setFocus(null);
                      handleSetFocusMessage(null);
                      await handleReadMessage(focusedGroup.gid);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>

                <Button
                  style={{
                    display: 'flex',
                    alignSelf: 'center',
                    backgroundColor: 'yellow',
                    padding: '1px 8px 1px 8px',
                    marginRight: '10px',
                  }}
                  onClick={handleLeaveGroup}
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
                overflow: 'hidden',
              }}
            >
              <MessageChat focusedMessage={focusedMessage} />
              <TextField
                variant="outlined"
                placeholder="Message.."
                size="small"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                style={{
                  display: 'flex',
                  alignSelf: 'center',
                  backgroundColor: '#EFEFEF',
                  width: '100%',
                  borderRadius: 6,
                  marginLeft: 4,
                  position: 'relative',
                  bottom: '0',
                }}
              />
            </div>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default Main;
