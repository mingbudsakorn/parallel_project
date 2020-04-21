import React from 'react';

const GrouupBox = () => {
  //status
  const [status1, setStatus1] = React.useState(false);
  const [status2, setStatus2] = React.useState(true);
  const [status3, setStatus3] = React.useState(true);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {!status1 && (
        <div
          style={{
            backgroundColor: status3 ? '#606060' : 'none',
            width: '44vh',
            height: '56px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              color: '#EFEFEF',
              fontSize: '20px',
              marginLeft: 35,
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
                marginRight: 35,
                borderRadius: '100%',
                backgroundColor: '#FF8258',
                height: '12px',
                width: '12px',
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default GrouupBox;
