import React from 'react';
import ChatBox from '../components/ChatBox';
import Bar from '../components/Bar';
import TextField from '@material-ui/core/TextField';

class Test extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Test;
