import React, { Component } from 'react';
import CalendarIcon from 'material-ui/svg-icons/action/event';
import {cyan500} from 'material-ui/styles/colors';


export default class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'space-between'}}>
        <CalendarIcon style={{height:100, width:100, color:cyan500}}/>
      </div>);
  }
}
