'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Home Page', function() {
  var homePage;

  beforeEach(function() {
    homePage = new HomePage();
  });

  describe('button event handlers', function() {

    describe('right', function() {

      it('should take the user to the facts page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('quickfacts');
      });
    });

    describe('top', function() {
      it('should scroll the watch face up', function() {
        spyOn(homePage, 'scrollUp');
        homePage.setButtonEvents();
        homePage.trigger('top');
        expect(homePage.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', function() {
      it('should scroll the watch face down', function() {
        spyOn(homePage, 'scrollDown');
        homePage.setButtonEvents();
        homePage.trigger('bottom');
        expect(homePage.scrollDown).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function() {

    /*// Changing home page
    it('should contain a link to the facts page', function() {
      homePage.render();
      expect(homePage.$el.find('ul li a').attr("href")).toEqual("/#quickfacts");
    });

    it('should have the title of Facts Page', function() {
      homePage.render();
      expect(homePage.$el.find('ul li a').text()).toEqual("Quick Facts");
    });*/

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

  });

});
