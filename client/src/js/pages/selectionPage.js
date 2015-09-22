'use strict';

var PageView = require('../framework/page');
var Locations = require('../collections/locations');
var LocationView = require('../views/location');

var LocationsView = PageView.extend({

  id: 'locations',
  template: require('../../templates/pages/locations.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    left: 'back'
  },

  initialize: function() {
    var suburbs = require('../../json/suburbs.json');
    this.locations = new Locations(suburbs);
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());

    var locationsHTML = document.createDocumentFragment();
    this.locations.each(function(location) {
      $(locationsHTML).append(new LocationView({
        model: location
      }).render().el);
    }, this);

    this.$el.append(locationsHTML);

    return this;
  }

});

module.exports = LocationsView;
