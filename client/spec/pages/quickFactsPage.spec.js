'use strict';

var FactsPage = require('../../src/js/pages/factsPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');

global.App = App;

describe('The Quick Facts Page', function() {

  var factsPage;

  beforeEach(function() {
    factsPage = new FactsPage();
  });

  describe('facts data', function() {
    it('should have a facts collection', function() {
      expect(factsPage.facts).toBeDefined();
    });
  });

  describe('rendering', function() {
    it('returns the view object', function() {
      expect(factsPage.render()).toEqual(factsPage);
    });

    it('displays location header', function() {
      factsPage.render();
      expect(factsPage.$el).toContainHtml('<h1>Quick Facts</h1>');
    });
  });
});
