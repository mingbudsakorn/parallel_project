import React, { useState } from 'react';
import Main2 from './pages/Main2';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [uid, setUid] = useState('');
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Router>
        <Switch>
          <Route path="/main">
            <Main2 uid={uid} changeUid={setUid} />
          </Route>
          <Route path="/">
            <Login changeUid={setUid} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
