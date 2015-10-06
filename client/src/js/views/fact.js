'use strict';

var FactView = Backbone.View.extend({

  tagName: 'li',

  template: require('../../templates/views/facts.hbs'),
  attributes: {
    class: 'clickable'
  },

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = FactView;
