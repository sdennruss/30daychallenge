import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Resources from "./components/resources/resources";
import NotFound from "./components/notfound/notfound";
import { challenges } from "./components/calendar/challenges";
import Calendar from "./components/calendar/calendar";
import MenuItems from "./components/menu/menuItems";
import Toggle from "./components/navbar/toggle";
import Contact from "./components/contact/contact";
import ContactUs from "./components/contact/contactUs";
import HomePage from "./components/homepage/homepage";
import "./App.css";

class App extends Component {
  state = {
    navigations: ["home", "resources", "connect"],
    challenges: [],
    meals: [],
    item: 0,
    expand: false,
    showCalendar: "none",
    hideLanding: "flex",
  };

  componentDidMount() {
    this.setState({ challenges });
  }

  handleDaysClicked = (challenge) => {
    const item = Math.round((challenge.days / 30) * 100);
    this.setState({ item });
  };

  handleToggle = (expand) => {
    this.setState({ expand });
    console.log("Expand", expand);
  };

  handleCalendar = (show, hide) => {
    this.setState({ showCalendar: show, hideLanding: hide });
  };

  render() {
    const {
      navigations,
      challenges,
      item: data,
      expand,
      showCalendar,
      hideLanding,
    } = this.state;

    return (
      <React.Fragment>
        <Toggle
          navigations={navigations}
          expand={expand}
          onToggle={this.handleToggle}
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
            <Route path="/connect" component={ContactUs} />
            <Route
              path="/home"
              exact
              render={(props) => (
                <HomePage
                  handleCalendar={this.handleCalendar}
                  showCalendar={showCalendar}
                  hideLanding={hideLanding}
                  challenges={challenges}
                  onDaysClicked={this.handleDaysClicked}
                  value={data}
                  item={this.state.item}
                  {...props}
                />
              )}
            />
            <Route
              path="/"
              exact
              render={(props) => (
                <HomePage
                  handleCalendar={this.handleCalendar}
                  showCalendar={showCalendar}
                  hideLanding={hideLanding}
                  challenges={challenges}
                  onDaysClicked={this.handleDaysClicked}
                  value={data}
                  item={this.state.item}
                  {...props}
                />
              )}
            />
            <Redirect to="/notfound" />
          </Switch>
        </div>
        <Contact showCalendar={showCalendar} />
      </React.Fragment>
    );
  }
}

export default App;
