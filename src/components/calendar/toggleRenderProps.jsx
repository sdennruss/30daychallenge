import React, {Component} from 'react';

class Toggle extends Component {
  state = {
    expand: false
   }

  handleToggle = () => {
    const {expand}=this.state
    this.setState({ expand: !expand});
  }

  render() {
    const{render}=this.props

    return (
      <div>
      {render({
        expand: this.state.expand,
        toggle: this.handleToggle
      })}
      </div>

    );
  }
}

export default Toggle;
