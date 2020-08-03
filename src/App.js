import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Resources from "./components/resources/resources";
import NotFound from "./components/notfound/notfound";
import { challenges } from "./components/calendar/challenges";
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
    transitionColor: "#faf8f2",
    challengeDivColor: "#60bea0",
    resources: [],
    imageIndex: "",
  };

  componentDidMount() {
    this.setState({ challenges });
  }

  handleDaysClicked = (challenge, transitionColor, challengeDivColor) => {
    const { challenges } = this.state;

    const item = Math.round((challenge.days / 30) * 100);
    const newChallenge = [...challenges];
    const imageIndex = newChallenge.indexOf(challenge);
    console.log("This is the image index", imageIndex);
    this.setState({ item, transitionColor, challengeDivColor, imageIndex });
    console.log(item);
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
      resources,
      item: data,
      expand,
      showCalendar,
      hideLanding,
      challengeDivColor,
      transitionColor,
      imageIndex,
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
                  challengeDivColor={challengeDivColor}
                  transitionColor={transitionColor}
                  imageIndex={imageIndex}
                  {...props}
                />
              )}
            />
            <Route
              path="/resources"
              render={(props) => <Resources resourcs={resources} {...props} />}
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
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
