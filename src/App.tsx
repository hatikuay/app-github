import React from 'react';
import Header from './components/Header/Header';
import Profile from './container/Profile';
import "./App.css"

const App = () => {
  return (
    <div className='GlobalStyle AppWrapper'>
      <Header />
      <Profile />
    </div>
  );
}


export default App;
