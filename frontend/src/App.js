import React, { useState } from 'react';
import Main from './pages/Main';
import Main2 from './pages/Main2';
import Login from './pages/Login';
import Test from './pages/Test';

const App = () => {
  const [uid, setUid] = useState(-1);
  const [gid, setGid] = useState(-1);
  // useState
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {window.location.pathname === '/' && <Login changeUid={setUid} />}
      {window.location.pathname === '/main' && (
        <Main uid={uid} gid={gid} changeGid={setGid} />
      )}
      {window.location.pathname === '/main2' && (
        <Main2 uid={uid} gid={gid} changeGid={setGid} />
      )}

      {window.location.pathname === '/test' && (
        <Test uid={uid} gid={gid} changeGid={setGid} />
      )}
    </div>
  );
};

export default App;
