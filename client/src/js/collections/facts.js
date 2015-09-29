'use strict';
var Fact = require('../models/fact');

var Facts = Backbone.Collection.extend({
  model: Fact
});

module.exports = Facts;
