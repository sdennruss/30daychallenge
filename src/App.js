import React, {Component} from 'react';
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

class App extends Component {
state = {
  navigations: ["home", "resources", "connect"],
  challenges: [],
  meals: [],
  navBarClass: "",
  desktopNavClass: "",
  item: 0,
  expand: false,

}

componentDidMount() {
this.setState({ challenges})
}

handleDaysClicked = (challenge) =>{
  const item = Math.round(challenge.days / 30 * 100)
  this.setState({item})
}

handleToggle = (expand) => {
  console.log(expand)
  this.setState({ expand  });
}

handleNavigationSelection = (title) => {
  this.setState({ navBarClass: `navbar-${title}`, desktopNavClass: `desktop-${title}` });
}

handleRightArrow = () =>{
  console.log("Right arrow clicked")
}

  render() {
    const {navigations, challenges, item: data, expand, clicked, navBarClass, desktopNavClass}=this.state

    return (
    <React.Fragment>

    <MediaQuery maxDeviceWidth={769}>
        <Toggle
        navigations={navigations}
        expand={expand}
        clicked={clicked}
        onClick={this.handleToggle}
        navBarClass={navBarClass}
        onNavSelected = {this.handleNavigationSelection}
        />
      </MediaQuery>

      <MediaQuery minDeviceWidth={769}>
        <NavBar
        navigations={navigations}
        onNavSelected={this.handleNavigationSelection}
        desktopNavClass={desktopNavClass}
        />
      </MediaQuery>



    <div className="routing">
      <Switch>
        <Route path="/calendar/:breakfast/:lunch/:dinner/:days" render = {(props) => <MenuItems  onDaysClicked={this.handleDaysClicked} value={data} item={this.state.item} challenges={challenges} {...props}/> }/>
        <Route path="/resources" render={(props) => <Resources onClick={this.handleRightArrow}{...props} /> } />
        <Route path="/notfound" component={NotFound} />
        <Route path="/home" render={(props) => <Calendar challenges={challenges} onDaysClicked={this.handleDaysClicked} value={data} item={this.state.item} {...props}  />} />
        <Route path='/' render={(props) => <Calendar challenges={challenges} onDaysClicked={this.handleDaysClicked} value={data} item={this.state.item} {...props} />} />
        <Redirect to="/notfound" />
        </Switch>
      </div>

      <Contact />


    </React.Fragment>

     );
  }
}

export default App;
