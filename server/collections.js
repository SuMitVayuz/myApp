import { Mongo } from 'meteor/mongo';

export const MyCollection = new Mongo.Collection('mycollection');
if (Meteor.isServer) {

    // Meteor.publish('mycollection',  function fetchCollection (){
    //
    //   return MyCollection.find();
    // });
  }
