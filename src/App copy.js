import React, {useState, Fragment} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import MediaQuery from "react-responsive";
import NavBar from './components/navbar/navbar';
import Resources from './components/resources/resources';
import NotFound from "./components/notfound/notfound"
import {challenges} from "./components/calendar/challenges"
import Calendar from './components/calendar/calendar';
import MenuItems from './components/menu/menuItems';
import Contact from './components/contact/contact';
import Toggle from './components/navbar/toggle';
import './App.css';

const App = () => {
  const [navigations, setNavigations]=useState([
    "home", "resources", "connect"
  ])
  const [challenges, setChallenges]=useState([])
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={769}>
        <Toggle
        navigations={navigations}
        />
      </MediaQuery>
    </Fragment>
   );
}

export default App;
