import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import NavBar from './components/navbar/navbar';
import Resources from './components/resources/resources';
import Food from './components/food/food';
import NotFound from "./components/notfound/notfound"
import {challenges} from "./components/calendar/challenges"
import Calendar from './components/calendar/calendar';
import MenuItems from './components/menu/menuItems';
import Contact from './components/contact/contact';
import './App.css';

class App extends Component {
  state = {
    navigations: ["home", "resources", "food", "contact"],
    expand: false,
    challenges: [],
    item: 0
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



      <div className="routing">
      <Switch>
        <Route path="/calendar/:breakfast/:lunch/:dinner/:days" render = {(props) => <MenuItems  onDaysClicked={this.handleDaysClicked} value={data} item={this.state.item} challenges={challenges} {...props}/> }/>
        <Route path="/resources" component={Resources} />
        <Route path="/food" component={Food} />
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
