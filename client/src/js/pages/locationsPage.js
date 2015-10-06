'use strict';

var PageView = require('../framework/page');
var Locations = require('../collections/locations');
LocationView = require('../views/location');

var LocationsView = PageView.extend({

  id: 'locations',
  template: require('../../templates/pages/locations.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    left: 'back'
  },

  events: {
    'click .clickable': 'selectSuburb'
  },

  selectSuburb: function(event) {
    $(event.currentTarget).addClass('selected');
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
    var list = document.createElement('ul');
    this.locations.each(function(location) {
      list.appendChild(new LocationView({
        model: location
      }).render().el);
    }, this);

    $(locationsHTML).append(list);
    this.$el.append(locationsHTML);

    return this;
  }

});

module.exports = LocationsView;
