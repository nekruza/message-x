import React from 'react';
import "./App.css";
import Main from './pages/Main/Main';
import Sidebar from './pages/Sidebar/Sidebar';


const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;