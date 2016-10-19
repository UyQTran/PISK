import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LandingPage from './LandingPage.jsx';
injectTapEventPlugin();


// App component - represents the whole app
const tabs =
[{label:"Hva skjer?", value:0, component:(<LandingPage/>)},
{label:"Arrangementer", value:1, component:(<LandingPage/>)},
{label:"Fortran", value:2, component:(<LandingPage/>)},
{label:"Vedtekter", value:3, component:(<LandingPage/>)}];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab:0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(tabNumber) {
    this.setState({activeTab:tabNumber});
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(piskTheme) };
  }

  render() {
    return (
      <div>
        <div className="air-above"/>
        <div style={{display: 'flex', alignItems: 'space-between'}}>
          <div style={{marginRight:20, marginLeft:40, fontSize:38}}>PI:SK</div>
          <Tabs
            style={{width:800}}
            onChange={this.handleChange.bind(this)}
            value={this.state.activeTab}>
            {tabs.map((tab, index)=>{
              return (<Tab
                label={tab.label}
                value={tab.value}
                key={index}>
                {tab.component}
            </Tab>);
            })}
          </Tabs>
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

const piskTheme = {
  fontFamily:"Roboto, sans-serif",
  palette:{
    accent1Color:"#ff4081",
    accent2Color:"#f5f5f5",
    accent3Color:"#9e9e9e",
    alternateTextColor:"#000000",
    borderColor:"#e0e0e0",
    canvasColor:"#ffffff",
    clockCircleColor:"rgba(0, 0, 0, 0.07)",
    disabledColor:"rgba(0, 0, 0, 0.3)",
    pickerHeaderColor:"#00bcd4",
    primary1Color:"#ffffff",
    primary2Color:"#0097a7",
    primary3Color:"#bdbdbd",
    secondaryTextColor:"rgba(0, 0, 0, 0.54)",
    shadowColor:"rgba(0, 0, 0, 1)",
    textColor:"rgba(0, 0, 0, 0.87)"
  },
  spacing:{
    desktopDrawerMenuItemHeight:48,
    desktopDropDownMenuFontSize:15,
    desktopDropDownMenuItemHeight:32,
    desktopGutter:24,
    desktopGutterLess:16,
    desktopGutterMini:8,
    desktopGutterMore:32,
    desktopKeylineIncrement:64,
    desktopSubheaderHeight:48,
    desktopToolbarHeight:56,
    iconSize:24
  }
}
