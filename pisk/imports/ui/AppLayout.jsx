import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme.js';
import { blue800 } from 'material-ui/styles/colors';

const style = {
  ...lightBaseTheme,
  palette: {
    ...lightBaseTheme.palette,
    primary1Color: "#ffffff",
    alternateTextColor:"#000000"
  }
};

const AppLayout = ({header, main, footer}) => {
  return (
    <article>
      <MuiThemeProvider muiTheme={getMuiTheme(style)}>
        <div>
          <header>{header}</header>
          <main>{main}</main>
          <footer>{footer}</footer>
        </div>
      </MuiThemeProvider>
    </article>
  );
};

AppLayout.propTypes = {
  header: React.PropTypes.node.isRequired,
  main: React.PropTypes.node.isRequired,
  footer: React.PropTypes.node
};

export default AppLayout;
