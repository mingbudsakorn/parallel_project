import React from 'react';
import ChatBox from '../components/ChatBox';
import Bar from '../components/Bar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Test extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Bar />
        <div>Test</div>
        <ChatBox />
        <TextField
          id="standard-textarea"
          label="Create new group"
          placeholder="NAME"
          multiline
          size="small"
          variant="outlined"
          style={{
            backgroundColor: '#EFEFEF',
            width: 250,
            borderRadius: 6,
          }}
        />
        <Button style={{ width: 35 }}>JOIN</Button>
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
    );
  }
}

export default Test;
