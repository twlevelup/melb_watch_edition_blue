'use strict';

var PageView = require('../framework/page');
var FactsCollection = require('../collections/facts'),
FactView = require('../views/fact');

var FactsView = PageView.extend({

  id: 'facts',
  template: require('../../templates/pages/facts.hbs'),

  buttonEvents: {
    right: 'selectFact',
    left: 'back',
    bottom: 'nextFact'
  },

  initialize: function() {
    this.selectedFact = 0;
    this.facts = new FactsCollection();
    this.facts.push([
      { heading: 'Flooding',
        text: 'Victoria has many flood-prone communities with thousands of homes properties and businesses at risk of flooding. Floods cause more damage per year in terms of dollars and lives lost than any other natural hazard in Australia. Flooding can happen at any time of the year. If you live in, work in or visit areas on low-lying land, close to creeks or rivers, or near major stormwater drains you may be at risk of flooding. A well prepared community can reduce the impact of flooding by up to 80%. People who are prepared are more likely to respond to floods appropriately and safely.'
      }
    ]);
  },

  nextFact: function() {
    var nextIndex = this.selectedFact + 1;
    if (nextIndex < this.facts.length) {
      this.selectedFact = nextIndex;
    }
  },

  selectFact: function() {
    var detail = document.createElement('p');
    detail.textContent = this.facts.at(this.selectedFact).attributes.text;
    this.$el.append(detail);
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());

    var factsHTML = document.createDocumentFragment();
    var list = document.createElement('ul');
    this.facts.each(function(fact) {
      list.appendChild(new FactView({
        model: fact
      }).render().el);
    }, this);

    $(factsHTML).append(list);
    this.$el.append(factsHTML);

    return this;
  }

});

module.exports = FactsView;
