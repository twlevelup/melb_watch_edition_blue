'use strict';
var Location = require('../models/location');

var Locations = Backbone.Collection.extend({
  model: Location
});

module.exports = Locations;
