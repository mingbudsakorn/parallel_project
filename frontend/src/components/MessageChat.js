import React from 'react';
import ChatBox from './ChatBox';

const MessageChat = ({ focusedMessage }) => {
  return (
    <div
      id="chat"
      style={{
        height: '100%',
        overflow: 'scroll',
        position: 'relative',
      }}
    >
      {focusedMessage.readMessage.map((i, index) => (
        <ChatBox data={i} key={index} />
      ))}
      {/* {focusedMessage.unreadMessage.length > 0 && ( // TODO set status */}
      <div
        id="unread-chat"
        style={{
          justifyContent: 'center',
          margin: '5px 0 5px 0',
          display: focusedMessage.unreadMessage.length <= 0 ? 'none' : 'flex',
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
      {/* )} */}
      {focusedMessage.unreadMessage.map((i, index) => (
        <ChatBox data={i} key={index} />
      ))}
    </div>
  );
};

export default MessageChat;
