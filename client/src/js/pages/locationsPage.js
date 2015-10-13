'use strict';

var PageView = require('../framework/page');
var Locations = require('../collections/locations');
var LocationView = require('../views/location');

var LocationsView = PageView.extend({

  id: 'locations',
  template: require('../../templates/pages/locations.hbs'),

  buttonEvents: {
    top: 'previousSuburb',
    right: 'selectSuburb',
    left: 'goToHomePage',
    bottom: 'nextSuburb'
  },

  previousSuburb: function() {
    var nextIndex = this.selectedSuburb - 1;
    if (nextIndex >= 0 && nextIndex < this.locations.length) {
      var lis = this.$el.find('li');
      lis.eq(this.selectedSuburb).removeClass('selected');
      this.selectedSuburb = nextIndex;
      lis.eq(this.selectedSuburb).addClass('selected');
    }
  },

  nextSuburb: function() {
    var nextIndex = this.selectedSuburb + 1;
    if (nextIndex < this.locations.length) {
      var lis = this.$el.find('li');
      lis.eq(this.selectedSuburb).removeClass('selected');
      this.selectedSuburb = nextIndex;
      lis.eq(this.selectedSuburb).addClass('selected');
    }
  },

  selectSuburb: function() {
    var suburb = this.locations.at(this.selectedSuburb);
    this.selected.push(suburb);
  },

  initialize: function() {
    var suburbs = require('../../json/suburbs.json');

    this.selectedSuburb = 0;
    this.locations = new Locations(suburbs);
    this.selected = new Locations();
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

    var lis = this.$el.find('li');
    lis.eq(this.selectedSuburb).addClass('selected');

    return this;
  }

});

module.exports = LocationsView;
