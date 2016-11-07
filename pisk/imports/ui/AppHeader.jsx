import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LandingPage from './LandingPage.jsx';
import ScrollWithPage from './ScrollWithPage.jsx';
import {FlowRouter} from 'meteor/kadira:flow-router';
import moment from 'moment';
injectTapEventPlugin();

// App component - represents the whole app
const tabs =
[{label:"Hjem", value:0, routeName:'rootview'},
{label:"Hva skjer?", value:1, routeName:'whatsup'},
{label:"Fortran", value:2, routeName:'fortran'},
{label:"Vedtekter", value:3, routeName:'statutes'}];

export default class App extends Component {

  constructor(props) {
    super(props);

    const currentRouteName = FlowRouter.current().route.name;
    const activeTab = tabs.find((tab)=>currentRouteName === tab.routeName);

    this.state = {
      activeTab:activeTab ? activeTab.value : -1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(tabNumber) {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    this.setState({activeTab:tabNumber},()=>{
      FlowRouter.go(tabs[tabNumber].routeName);
    });

  }

  render() {
    return (
      <ScrollWithPage>
        <div className="air-above"/>
        <div style={{display: 'flex', alignItems: 'space-between'}}>
          <div style={navBarStyles}>PI:SK</div>
          <Tabs
            style={{width:500}}
            onChange={this.handleChange.bind(this)}
            value={this.state.activeTab}>
            {tabs.map((tab, index)=>{
              return (<Tab
                label={tab.label}
                value={tab.value}
                key={index}/>);
            })}
          </Tabs>
        </div>
      </ScrollWithPage>
    );
  }
}

const navBarStyles = {
  fontSize:38,
  fontFamily:"Roboto, sans-serif",
  marginTop:5
}
