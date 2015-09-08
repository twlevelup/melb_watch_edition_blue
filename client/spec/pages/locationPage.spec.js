'use strict';

var LocationsPage = require('../../src/js/pages/locationsPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');

global.App = App;

describe('The Locations Page', function() {

  var locationsPage;

  beforeEach(function() {
    locationsPage = new LocationsPage();
  });

  describe('rendering', function() {
    it('returns the view object', function() {
      expect(locationsPage.render()).toEqual(locationsPage);
    });

    it('displays location header', function() {
      locationsPage.render();
      expect(locationsPage.$el).toContainHtml('<h1>Locations</h1>');
    });
  });

  describe('button events', function() {

    beforeEach(function() {
      locationsPage.setButtonEvents();
    });

    describe('right', function() {
      it('should take the user to the home page', function() {
        spyOn(global.App, 'navigate');
        locationsPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });
  });
});
