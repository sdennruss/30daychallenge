import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import NavBar from './components/navbar/navbar';
import Home from "./components/home/home"
import Resources from './components/resources/resources';
import Food from './components/food/food';
import NotFound from "./components/notfound/notfound"
import {challenges} from "./components/calendar/challenges"
import Calendar from './components/calendar/calendar';
import MenuItems from './components/menu/menuItems';
import './App.css';
import Contact from './components/contact/contact';

class App extends Component {
  state = {
    navigations: ["home", "resources", "food", "contact"],
    expand: false,
    challenges: [],
    item: 1
  }
// Will add approp color / design after completing the funnctionality part :)
  componentDidMount() {
  this.setState({ challenges })
  }

  handleDaysClicked = (challenge) =>{
    const item = Math.round(challenge.days / 30 * 100)
    this.setState({item})
    console.log(item)
  }

  render() {
    const {navigations, challenges, item: data}=this.state

    return (
    <React.Fragment>

    <NavBar
    navigations={navigations}
    />

    <Calendar
    challenges={challenges}
    onDaysClicked={this.handleDaysClicked}
    />

      <div className="routing">
      <Switch>
        <Route path="/calendar/:breakfast/:lunch/:dinner/:days" render = {(props) => <MenuItems value={data} item={this.state.item} challenge={challenges} {...props}/> }/>
        <Route path="/resources" component={Resources} />
        <Route path="/food" component={Food} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/home" render={(props) => <Home challenges={challenges} onDaysClicked={this.handleDaysClicked} {...props} />} />
        <Route path="/contact" component={Contact} />
        <Route path='/' render={(props) => <Home challenges={challenges} onDaysClicked={this.handleDaysClicked} {...props} />} />
        <Redirect to="/notfound" />
        </Switch>
      </div>

      <Contact />

    </React.Fragment>

     );
  }
}

export default App;
