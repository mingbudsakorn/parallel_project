import React from 'react';
import Button from '@material-ui/core/Button';

const GroupBox = ({ data, focusGid, handleJoinGroup }) => {
  const { join, gid, unread } = data;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          backgroundColor: focusGid === gid ? '#606060' : '#424242',
          width: '100%',
          height: '56px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            color: '#EFEFEF',
            fontSize: '20px',
            marginLeft: 45,
            marginTop: 15,
          }}
        >
          {data.name}
        </div>
        {focusGid !== gid && unread && (
          <div
            style={{
              display: 'flex',
              alignSelf: 'center',
              marginRight: 30,
              borderRadius: '100%',
              backgroundColor: '#FF8258',
              height: '12px',
              width: '12px',
            }}
          />
        )}
        {!join && (
          <Button
            onClick={() => handleJoinGroup(gid)}
            style={{
              display: 'flex',
              alignSelf: 'center',
              backgroundColor: '#FFF100',
              color: '#606060',
              marginRight: 10,
              padding: '1px 3px 1px 3px',
            }}
          >
            JOIN
          </Button>
        )}
      </div>
    </div>
  );
};

export default GroupBox;
