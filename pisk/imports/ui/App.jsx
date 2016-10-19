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
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div>
        <div className="air-above"/>
        <div style={{display: 'flex', alignItems: 'space-between'}}>
          <p>PISK</p>
          <Tabs
            style={{width:600}}
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
