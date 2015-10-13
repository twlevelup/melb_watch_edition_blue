'use strict';

var PageView = require('../framework/page');
var FactDetailView = require('../views/factDetail');

var DetailView = PageView.extend({

  id: 'detail',
  template: require('../../templates/pages/factDetail.hbs'),

  buttonEvents: {
    left: 'back',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  initialize: function() {

  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  createDetail: function() {
    var view = new FactDetailView({ model: this.model });
    return view.render().el;
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.append(this.createDetail());

    return this;
  }

});

module.exports = DetailView;
