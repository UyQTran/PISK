import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import {mount} from 'react-mounter';
import AppLayout from '../ui/AppLayout.jsx';
import NavBar from '../ui/NavBar.jsx';
import LandingPage from '../ui/LandingPage.jsx';
import WhatsUpPage from '../ui/WhatsUpPage.jsx';
import FortranPage from '../ui/FortranPage.jsx';
import StatutesPage from '../ui/StatutesPage.jsx';
import Footer from '../ui/Footer.jsx';
import React from 'react';

FlowRouter.route('/', {
  name: 'rootview',
  action(props, {goToUrl}) {
    mount(AppLayout, {
      header: (<NavBar/>),
      main: (<LandingPage/>)
    });
  }
});

FlowRouter.route('/whatsup', {
  name: 'whatsup',
  action(props, {goToUrl}) {
    mount(AppLayout, {
      header: (<NavBar/>),
      main: (<WhatsUpPage/>)
    });
  }
});

FlowRouter.route('/fortran', {
  name: 'fortran',
  action(props, {goToUrl}) {
    mount(AppLayout, {
      header: (<NavBar/>),
      main: (<FortranPage/>)
    });
  }
});

FlowRouter.route('/statutes', {
  name: 'statutes',
  action(props, {goToUrl}) {
    mount(AppLayout, {
      header: (<NavBar/>),
      main: (<StatutesPage/>)
    });
  }
});

FlowRouter.notFound = {
  action() {
    mount(AppLayout, {
      header: (<NavBar />),
      main: (<p>404 siden finnes ikke</p>),
      footer:('')
    });
  }
};
