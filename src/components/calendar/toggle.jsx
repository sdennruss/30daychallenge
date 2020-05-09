import React, {Component} from 'react';

class Toggle extends Component {
  state = {
    expand: false,
   }

  showMenuList = () => {
    const {expand}=this.state
    this.setState({ expand: !expand});

  }

  render() {
    const {children}=this.props

    return (
      children ({
      expand: this.state.expand,
      toggle: this.showMenuList
    }));
  }
}

export default Toggle;
