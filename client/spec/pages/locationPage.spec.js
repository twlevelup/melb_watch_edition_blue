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

    it('Should move the slected suburb index', function() {
      expect(locationsPage.selectedSuburb).toEqual(0);
      locationsPage.nextSuburb();
      expect(locationsPage.selectedSuburb).toEqual(1);
    });

    describe('left', function() {
      it('should take the user to the home page', function() {
        spyOn(global.App, 'navigate');
        locationsPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('right', function() {
      it('Should select a suburb', function() {
        expect(locationsPage.selected.length).toEqual(0);
        locationsPage.selectSuburb();
        expect(locationsPage.selected.length).toEqual(1);
      });

      it('Should deselect a suburb', function() {
        locationsPage.selectSuburb();
        expect(locationsPage.selected.length).toEqual(1);

        locationsPage.deSelectSuburb();
        expect(locationsPage.selected.length).toEqual(0);
      });

      // it('Should select 2 suburbs then remove the first', function() {
      //   locationsPage.selectSuburb();
      //   locationsPage.nextSuburb();

      //   locationsPage.selectSuburb();
      //   locationsPage.previousSuburb();
      //   locationsPage.selectSuburb();
      
      //   expect(locationsPage.selected.at(0).attributes.name).toEqual('Altona');
      // });
    });
  });

  describe('JSON Suburb List', function(){
    it('should not be an empty list', function(){
      expect(locationsPage.locations.length > 0).toBeTruthy();
    });
  });
});
