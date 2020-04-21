import React from 'react';
import Button from '@material-ui/core/Button';

const GrouupBox = () => {
  //status
  const [status1, setStatus1] = React.useState(false);
  const [status2, setStatus2] = React.useState(true);
  const [status3, setStatus3] = React.useState(true);
  const [status4, setStatus4] = React.useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {!status1 && (
        <div
          style={{
            backgroundColor: status3 ? '#606060' : 'none',
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
            GROUP1
          </div>
          {status2 && (
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
          {status4 && (
            <Button
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
      )}
    </div>
  );
};

export default GrouupBox;
