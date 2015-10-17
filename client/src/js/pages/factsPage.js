'use strict';

var PageView = require('../framework/page');
var FactsCollection = require('../collections/facts'),
FactView = require('../views/fact');

var FactsView = PageView.extend({

  id: 'facts',
  template: require('../../templates/pages/facts.hbs'),

  buttonEvents: {
    top: 'previousFact',
    right: 'selectFact',
    left: 'back',
    bottom: 'nextFact'
  },

  initialize: function() {
    this.selectedFact = 0;
    this.facts = new FactsCollection();
    this.facts.push([
      { id: '1',
        heading: 'Flooding',
        text: 'Victoria has many flood-prone communities with thousands of homes properties and businesses at risk of flooding. Floods cause more damage per year in terms of dollars and lives lost than any other natural hazard in Australia. Flooding can happen at any time of the year. If you live in, work in or visit areas on low-lying land, close to creeks or rivers, or near major stormwater drains you may be at risk of flooding. A well prepared community can reduce the impact of flooding by up to 80%. People who are prepared are more likely to respond to floods appropriately and safely.'
      },
      {
        id:'2',
        heading: 'Weather Warnings',
        text: 'Flood Watches and Flood Warnings are issued by the Bureau of Meteorology (BoM) to tell people about possible flooding.Flood Watches mean there is there is a developing weather pattern that might cause floods in one or two days. Flood Warnings mean flooding is about to happen or is already happening.Flood Warnings are classified into Minor, Moderate and Major depending on the expected size and impact of the flood. SES will provide information about how the floodwater might affect people and properties. Severe Weather Warnings or Severe Thunderstorm Warnings are issued when heavy rain fall that could lead to flash flooding is expected. Flash flooding happens quickly. There may be little or no warning. The arrival time and depth of a flash flood can not usually be predicted. Remember that you may not receive any official warning. If you think you are at risk, do not wait for an official warning to act.'
      },
      {
        id: '3',
        heading: 'Emergency Alert',
        text: 'During floods, SES may provide an alert through the National Emergency Alert Telephone Warning System. All Emergency Services can use Emergency Alert to warn communities about dangerous situations by voice message to landline telephones or text message to mobile phones. If you receive an Emergency Alert you should pay attention and act accordingly.'
      },
      {
        id: '4',
        heading: 'Prepare an Emergency Plan',
        text: 'Flooding can happen at any time, with little warning. People who have planned and prepared for emergencies can help to reduce the impact of emergencies on their homes and families and recover faster.'
      }
    ]);
  },

  previousFact: function() {
    var nextIndex = this.selectedFact - 1;
    if (nextIndex >= 0 && nextIndex < this.facts.length) {
      var lis = this.$el.find('li');
      lis.eq(this.selectedFact).removeClass('highlight');
      this.selectedFact = nextIndex;
      lis.eq(this.selectedFact).addClass('highlight');
    }
  },

  nextFact: function() {
    var nextIndex = this.selectedFact + 1;
    if (nextIndex < this.facts.length) {
      var lis = this.$el.find('li');
      lis.eq(this.selectedFact).removeClass('highlight');
      this.selectedFact = nextIndex;
      lis.eq(this.selectedFact).addClass('highlight');
    }
  },

  selectFact: function() {
    var id = this.facts.at(this.selectedFact).attributes.id;
    global.App.navigate('/quickfacts/' + id);
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

    var lis = this.$el.find('li');
    lis.eq(this.selectedFact).addClass('highlight');

    return this;
  }

});

module.exports = FactsView;
