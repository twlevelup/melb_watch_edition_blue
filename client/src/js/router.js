'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  LocationsPage = require('./pages/locationsPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  locationsPage = new LocationsPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    locations: 'locations'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  locations: function() {
    this.renderView(locationsPage);
  }

});

module.exports = AppRouter;
