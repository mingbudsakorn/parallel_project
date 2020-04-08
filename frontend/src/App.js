import React, { useState } from 'react';
import Main from './pages/Main'
import Login from './pages/Login'


const App = () => {
  const [uid, setUid] = useState(-1)
  const [gid, setGid] = useState(-1)
  // useState
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {window.location.pathname === '/login' && <Login changeUid={setUid} />}
      {window.location.pathname === '/main' && <Main uid={uid} gid={gid} changeGid={setGid} />}
    </div>
  );
}

export default App;
