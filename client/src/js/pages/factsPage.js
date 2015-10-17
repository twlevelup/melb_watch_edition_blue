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
        title: 'Flooding',
        text: 'Victoria has many flood-prone communities with thousands of homes, properties and businesses at risk of flooding. Floods cause more damage per year in terms of dollars and lives lost than any other natural hazard in Australia. Flooding can happen at any time of the year. If you live in, work in or visit areas on low-lying land, close to creeks or rivers, or near major stormwater drains you may be at risk of flooding. A well prepared community can reduce the impact of flooding by up to 80%. People who are prepared are more likely to respond to floods appropriately and safely.<h3 style="color:#F18520">Weather Warnings </h3><p>Flood Watches and Flood Warnings are issued by the Bureau of Meteorology (BoM) to tell people about possible flooding. <br>Flood Watches mean there is there is a developing weather pattern that might cause floods in one or two days. Flood Warnings mean flooding is about to happen or is already happening. <br>Flood Warnings are classified into Minor, Moderate and Major depending on the expected size and impact of the flood. SES will provide information about how the floodwater might affect people and properties. <br>Severe Weather Warnings or Severe Thunderstorm Warnings are issued when heavy rain fall that could lead to flash flooding is expected. Flash flooding happens quickly. There may be little or no warning. The arrival time and depth of a flash flood can not usually be predicted. Remember that you may not receive any official warning. If you think you are at risk, do not wait for an official warning to act.</p><h3 style="color:#F18520">Emergency Alert </h3><p>During floods, SES may provide an alert through the National Emergency Alert Telephone Warning System. All Emergency Services can use Emergency Alert to warn communities about dangerous situations by voice message to landline telephones or text message to mobile phones. If you receive an Emergency Alert you should pay attention and act accordingly.</p><h3 style="color:#F18520">Prepare an Emergency Plan</h3> <p>Flooding can happen at any time, with little warning. People who have planned and prepared for emergencies can help to reduce the impact of emergencies on their homes and families and recover faster. </p><p>Your emergency plan should include: <br>Emergencies that might affect you <br>How they might affect you<br>What you will do before, during and after an emergency<br>Where you will go if you evacuate and the safest route to get there <br>A list of contact numbers you may need</p>'
      },
        { id: '2',
        title: 'Earthquake',
        text: '<h3 style="color:#F18520">Preparing for earthquakes</h3> <p>Earthquakes cannot be predicted so it’s important to be prepared and know what to do if an earthquake happens in your area. Victoria State Emergency Service (SES) is a volunteer based emergency service. In a large scale earthquake, SES assistance may not be immediate and you should be prepared to be self-sufficient. Earthquakes can cause disruption to essential services including power, water and telephones. Your best protection is to have an Emergency Kit ready which includes the following:</p> <br/>-A copy of your Home Emergency Plan including essential contacts <br/>-A battery operated or wind up radio and spare batteries if needed <br/>-Important papers such as wills, passports and insurance documents <br/>-First aid kit <br/>-Rubber and strong leather gloves <br/>-Non-perishable food and drinking water for at least three days in case you become isolated. <h3 style="color:#F18520">During an earthquake </h3><p>There is no accepted method to predict an earthquake so it’s vital to know what to do during an earthquake as you will not receive any warning. How you should react in an earthquake depends on where you are at the time.</p><p>If you are indoors during an earthquake:</p> <br/>-Drop to the ground; take cover by getting under a sturdy table or other piece of furniture; and hold on until the shaking stops. If there isn’t a table or desk near you, cover your face and head with your arms and crouch in an inside corner of the building. <br/>-Stay away from glass, windows, outside doors and walls, and anything that could fall, such as lighting fixtures or furniture. <br/>-Do not use a doorway except if you know it is a strongly supported, load-bearing doorway and it is close to you. Many inside doorways are lightly constructed and do not offer protection. <br/>-Stay inside until the shaking stops and it is safe to go outside. Do not exit a building during the shaking. <br/>-Do not use elevators.<p>If you are outdoors during an earthquake:</p><br/>-Move away from buildings, streetlights, and power lines. <br/>-Once in the open, stay there until the shaking stops. The greatest danger exists directly outside buildings, at exits and alongside exterior walls.<p>If you are in a moving vehicle during an earthquake</p> <br/>-Stop as quickly as safety permits and stay in the vehicle. Avoid stopping near or under buildings, trees, overpasses, and power lines. <br/>-Proceed cautiously once the earthquake has stopped. Avoid roads, bridges, or ramps that might have been damaged by the earthquake. After an earthquake Expect aftershocks'
      },
       { id: '3',
        title: 'Bushfire',
        text: '<h3 style="color:#F18520">Your Bushfire Plan</h3><p>You don’t have to live in the country to be at risk of fire. If you live near areas that have significant bush, forest, long grass, or coastal scrub, then you need to plan ahead for the fire season. Not everyone thinks clearly in an emergency. A written, and preferably well-practised plan, will help you remember what needs to be done during a crisis.</p><h3 style="color:#F18520">Why should I leave early?</h3><p>Because fires can start and spread very quickly in some conditions, leaving early is by far the safest option for anyone in a high-risk bushfire area. Many people have died trying to leave their homes at the last minute. Even a fire that is kilometres away could be at your door in minutes. In certain conditions, embers can travel many kilometres in front of a fire and a grassfire can travel faster than you can run. Wind changes are unpredictable and can rapidly change the direction or size of a fire.Driving in a bushfire is extremely dangerous, and potentially life threatening. A drive that would normally take five minutes could take two hours.  In a bushfire, people may be confused, disoriented and physically or psychologically stressed. In these conditions, making good decisions becomes very difficult.</p><h3 style="color:#F18520">What leaving early means</h3><p>Leaving early means being away from high-risk areas before there are any signs of fire.In other words, leaving early is a precaution you take just in case there is a fire – because in some conditions, any fire that starts is likely to be uncontrollable. Leaving early does not mean waiting for a warning or a siren. It does not mean waiting to see or smell smoke. And it certainly does not mean waiting for a knock on the door.</p><h3 style="color:#F18520">Defending Your Property</h3><p>Planning to stay and defend is a big decision. Most homes in high-risk bushfire areas are not defendable on Code Red days. The Defending your property page can help you decide whether or not you are capable of defending your property – and tells you about the risks and preparations involved.  </p><h3 style="color:#F18520">How to plan</h3><p>Just as every family or household is unique, every fire plan will be different. At an absolute minimum, talk through the ten decisions below with your household. Review these points before each fire season and don’t put it off until later:</p><br/>1. Which Fire Danger Rating is your trigger to leave?<br/>2. Will you leave early that morning or the night before?<br/>3. Where will you go?<br/>4. What route will you take – and what is your alternative in the event that a fire is already in the area?<br/>5. What will you take with you?<br/>6. What do you need to organise for your pets or livestock?<br/>7. Who do you need to keep informed of your movements?<br/>8. Is there anyone outside your household who you need to help or check up on?<br/>9. How will you stay informed about warnings and updates?<br/>10. What will you do if there is a fire in the area and you cannot leave?<p>Remember to decide who will do what as part of your plan.</p><h3 style="color:#F18520">Your destination and journey</h3><p>It’s up to you to decide on a suitable place to go when you leave early on a fire risk day. If you do not have friends or relatives in low-risk areas who you can visit, consider community facilities such as libraries, shopping centres, swimming pools or cinemas. If you don’t have a car you will need to plan carefully to organise transport.</p><h3 style="color:#F18520">Why write down your plan?</h3><p>Would you remember a plan that’s just in your head if you’re surrounded by smoke, heat and flames?A written plan will take the pressure off you, and avoid arguments and delays. In Victoria the bushfire season is long, and a written plan will help reduce uncertainty and anxiety.Remember, any bushfire plan – written or not – is better than no plan.</p><h3 style="color:#F18520">Share your bushfire plan</h3><p>Once you have prepared your plan, it is a good idea to share the details of your plan with family, friends and neighbours. Doing so will save them a lot of distress when there is a bushfire, as they will know that you are prepared and where to find you.</p>'
   
      }
    ]);
  },

  previousFact: function() {
    var nextIndex = this.selectedFact - 1;
    if (nextIndex >= 0 && nextIndex < this.facts.length) {
      var lis = this.$el.find('li');
      lis.eq(this.selectedFact).removeClass('selected');
      this.selectedFact = nextIndex;
      lis.eq(this.selectedFact).addClass('selected');
    }
  },

  nextFact: function() {
    var nextIndex = this.selectedFact + 1;
    if (nextIndex < this.facts.length) {
      var lis = this.$el.find('li');
      lis.eq(this.selectedFact).removeClass('selected');
      this.selectedFact = nextIndex;
      lis.eq(this.selectedFact).addClass('selected');
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
    lis.eq(this.selectedFact).addClass('selected');

    return this;
  }

});

module.exports = FactsView;
