import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Resources from "./components/resources/resources";
import NotFound from "./components/notfound/notfound";
import { challenges } from "./components/calendar/challenges";
import MenuItems from "./components/menu/menuItems";
import Toggle from "./components/navbar/toggle";
import Contact from "./components/contact/contact";
import ContactUs from "./components/contact/contactUs";
import "./App.css";
import HomePage1 from "./components/homepage/homepage-1";
import Calendar from "./components/calendar/calendar";

class App extends Component {
  state = {
    challenges: [],
    meals: [],
    challengeIndex: 0,
    progressPercentage: 3,
  };

  componentDidMount() {
    this.setState({ challenges });
  }

  handleDaysClicked = (challenge, food) => {
    const percentage = Math.round((challenge.days / 30) * 100);
    const newChallenge = [...challenges];
    const imageIndex = newChallenge.indexOf(challenge);
    console.log(
      `Percentage: ${percentage}, Image Index: ${imageIndex}, Breakfast ${food}`
    );
    this.setState({
      challengeIndex: imageIndex,
      progressPercentage: percentage,
      openBreaky: food,
    });
  };

  render() {
    const {
      challenges,
      challengeIndex,
      progressPercentage,
      openBreaky,
    } = this.state;

    return (
      <React.Fragment>
        <Toggle />

        <div className="routing-container">
          <Switch>
            <Route
              path="/calendar/:breakfast/:lunch/:dinner/:days"
              render={(props) => (
                <MenuItems
                  challenges={challenges}
                  openBreaky={openBreaky}
                  challengeIndex={challengeIndex}
                  progressPercentage={progressPercentage}
                  onDaysClicked={this.handleDaysClicked}
                  {...props}
                />
              )}
            />
            <Route
              path="/calendar"
              render={(props) => (
                <Calendar
                  challenges={challenges}
                  onDaysClicked={this.handleDaysClicked}
                  {...props}
                />
              )}
            />
            <Route
              path="/resources"
              render={(props) => <Resources {...props} />}
            />
            <Route path="/notfound" component={NotFound} />
            <Route path="/connect" component={ContactUs} />
            <Route path="/home" exact component={HomePage1} />
            <Route path="/" exact component={HomePage1} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
