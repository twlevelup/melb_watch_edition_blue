'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  LocationsPage = require('./pages/locationsPage'),
  FactsPage = require('./pages/factsPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  factsPage = new FactsPage(),
  locationsPage = new LocationsPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    locations: 'locations',
    quickfacts: 'quickfacts'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  locations: function() {
    this.renderView(locationsPage);
  },

  quickfacts: function(){
    this.renderView(factsPage);
  }

});

module.exports = AppRouter;
