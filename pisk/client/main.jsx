import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import Footer from '../imports/ui/Footer.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-body'));
  render(<Footer />, document.getElementById('render-footer'));
});
