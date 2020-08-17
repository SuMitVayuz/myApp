import {
  Template
} from 'meteor/templating';
import {
  Mongo
} from 'meteor/mongo';

import './main.html';
import './test.html';

const axios = require('axios').default;
const MyCollection = new Mongo.Collection('mycollection');


Template.collections.onRendered(function() {
  fetchNames();
});



Template.collections.helpers({

  getNames: function() {
    return MyCollection.find({}).fetch();
  }

});



function fetchNames() {


  axios.get('/name')
    .then(function(response) {
      // handle success
      var names = response.data.names;
      for (var i = 0; i < names.length; i++) {
        MyCollection.insert({
          name: names[i].name
        });
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
      console.log(MyCollection.find({}).fetch());
    });




}


// Read More/ less text Template


var isReadMore = true;

Template.text.helpers({

  'getText': function(text) {
    if (isReadMore)
      return text.substr(0, Math.min(text.length, 100));

    return text;

  },
  'getIsMore': function(text) {
    if (isReadMore)
      return isReadMore;

  },


});


Template.text.events({


  'click #myBtn': function(e) {
    e.preventDefault();
    console.log("The ID is clicked...");


    if ($("#myBtn").text() == 'Read More') {
      isReadMore = false;
      $("#myBtn").text("Read Less");
      $("#dots").css("display", "none");

    } else {
          isReadMore = true;
      $("#myBtn").text("Read More");
        $("#dots").css("display", "inline");
    }


  },
});
