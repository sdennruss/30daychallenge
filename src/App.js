import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Resources from "./components/resources/resources";
import NotFound from "./components/notfound/notfound";
import { challenges } from "./components/calendar/challenges";
import Calendar from "./components/calendar/calendar";
import MenuItems from "./components/menu/menuItems";
import Contact from "./components/contact/contact";
import Toggle from "./components/navbar/toggle";
import "./App.css";
import ContactUs from "./components/contact/contactUs";
import HomePage from "./components/homepage/homepage";

class App extends Component {
  state = {
    navigations: ["home", "resources", "connect"],
    challenges: [],
    meals: [],
    navBarClass: "",
    desktopNavClass: "",
    item: 0,
    expand: false,
    close: false,
  };

  componentDidMount() {
    this.setState({ challenges });
  }

  handleDaysClicked = (challenge) => {
    const item = Math.round((challenge.days / 30) * 100);
    this.setState({ item });
  };

  handleToggle = (expand, close) => {
    this.setState({ expand, close });
    console.log(close);
    console.log("Label has been clicked");
  };

  handleNavigationSelection = (title) => {
    this.setState({
      navBarClass: `navbar-${title}`,
      desktopNavClass: `desktop-${title}`,
    });
    console.log(title);
  };

  handleRightArrow = () => {
    console.log("Right arrow clicked");
  };

  render() {
    const {
      navigations,
      challenges,
      item: data,
      expand,
      clicked,
      navBarClass,
      desktopNavClass,
      close,
    } = this.state;

    return (
      <React.Fragment>
        <Toggle
          close={close}
          clicked={clicked}
          navigations={navigations}
          expand={expand}
          clicked={clicked}
          onClick={this.handleToggle}
          navBarClass={navBarClass}
          onNavSelected={this.handleNavigationSelection}
        />

        <div className="routing-container">
          <Switch>
            <Route
              path="/calendar/:breakfast/:lunch/:dinner/:days"
              render={(props) => (
                <MenuItems
                  onDaysClicked={this.handleDaysClicked}
                  value={data}
                  item={this.state.item}
                  challenges={challenges}
                  {...props}
                />
              )}
            />
            <Route
              path="/resources"
              render={(props) => (
                <Resources onClick={this.handleRightArrow} {...props} />
              )}
            />
            <Route path="/notfound" component={NotFound} />
            <Route
              path="/home"
              render={(props) => (
                <Calendar
                  challenges={challenges}
                  onDaysClicked={this.handleDaysClicked}
                  value={data}
                  item={this.state.item}
                  {...props}
                />
              )}
            />
            <Route path="/connect" component={ContactUs} />
            <Route path="/" render={(props) => <HomePage {...props} />} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
