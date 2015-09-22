'use strict';

var LocationView = Backbone.View.extend({

  tagName: 'li',
  template: require('../../templates/views/location.hbs'),
  attributes: {
    class: 'clickable'
  },

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template({ location: this.model }));
    return this;
  }

});

module.exports = LocationView;
