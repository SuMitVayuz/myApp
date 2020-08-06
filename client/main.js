import {  Template} from 'meteor/templating';
import { Mongo } from 'meteor/mongo';

import './main.html';
import './test.html';


Template.collections.onCreated(function collectionsOnCreated() {

 Meteor.subscribe('mycollection');

});

Template.collections.helpers({


  showCollections() {

  },
});
//
// Template.hello.events({
//   'click button'(event, instance) {
//
//     console.log('Error = ');
//
//
//     HTTP.post('https://leaderbridge.herokuapp.com/fetch_expertise', {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     }, (error, result) => {
//       console.log('Error = ' + error);
//       console.log('Result = ' + result);
//
//     });
//
//
//
//
//   },
// });
