'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  LocationsPage = require('./pages/locationsPage'),
  FactsPage = require('./pages/factsPage'),
  DetailPage = require('./pages/detailPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  factsPage = new FactsPage(),
  locationsPage = new LocationsPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    locations: 'locations',
    quickfacts: 'quickfacts',
    'quickfacts/:id': 'factsdetailview'
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
  },

  factsdetailview: function(id) {
    // FIX ME
    var data = factsPage.facts.get(id);

    var detailPage = new DetailPage({ model: data });
    this.renderView(detailPage);
  }

});

module.exports = AppRouter;
