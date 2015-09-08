'use strict';

var PageView = require('../framework/page');

var LocationView = PageView.extend({

  id: 'locations',
  template: require('../../templates/pages/locations.hbs'),

  render: function() {

    this.$el.html(this.template());

    return this;
  }

});

module.exports = LocationView;
