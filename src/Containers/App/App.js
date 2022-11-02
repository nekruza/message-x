import React from 'react';
import "./App.css";
import Main from '../../Components/Main/Main';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { contacts } from '../../data/userData';
import _ from 'lodash';
import store from '../../store/index'

const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;