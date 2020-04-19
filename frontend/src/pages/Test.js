import React from 'react';
import ChatBox from '../components/ChatBox';
import appBar from '../components/appBar';
class Test extends React.Component {
  render() {
    return (
      <div>
        <div>Test</div>
        <appBar />
        <ChatBox />
        
      </div>
    );
  }
}

export default Test;
