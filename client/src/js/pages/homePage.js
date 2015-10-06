'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToFacts',
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToLocations'
  },

  goToFacts: function() {
    global.App.navigate('quickfacts');
  },

  goToLocations: function() {
    global.App.navigate('locations');
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = homeScreen;
