'use strict';

var FactDetailView = Backbone.View.extend({

  tagName: 'p',

  template: require('../../templates/views/factDetail.hbs'),

  initialize: function(text) {
    this.text = text;
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = FactDetailView;
