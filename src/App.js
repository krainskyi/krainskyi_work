import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Link } from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper' >
        <Header />
        <Route render={() => <Navbar state={props.state.dialogsPage} />} />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage}
          dispatch={props.dispatch} 
          UpdateNewPost={props.UpdateNewPost} />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
          dispatch={props.dispatch} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/profile' render={() => <Header />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
