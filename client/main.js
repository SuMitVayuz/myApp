import {  Template} from 'meteor/templating';
import {  HTTP} from 'meteor/http'
import './main.html';

Template.hello.onCreated(function helloOnCreated() {

});

Template.hello.helpers({

  result() {
    return 'Su Mit';
  },
});

Template.hello.events({
  'click button'(event, instance) {

    HTTP.post('https://leaderbridge.herokuapp.com/fetch_expertise', {
      'headers': {
        'Content-Type': 'application/json'
      },
    }, (error, result) => {
      console.log('Error = ' + error);
      console.log('Result = ' + result);

    });




  },
});
