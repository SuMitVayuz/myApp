import {
  Meteor
} from 'meteor/meteor';
import {
  MyCollection
} from './collections.js';
import {
  WebApp
} from 'meteor/webapp';
import express from 'express';

// Meteor.startup(() => {
//   // code to run on server at startup
//
//
// });




WebApp.connectHandlers.use('/hello', (req, res, next) => {

  console.log(req);

  res.writeHead(200);
  res.end('Hi! there');

});


const app = express();
WebApp.connectHandlers.use(app);

app.get('/name', (req, res) => {


  if (req.query.name != null)
    MyCollection.insert({
      name: req.query.name
    }, (err, id) => {

      if (err) res.status(200).json({
        error: err
      });
      else res.status(200).json({
        data: MyCollection.find({}).fetch(),
        query: req.query
      });
    });

  else
    res.status(200).json({
      names: MyCollection.find({}).fetch()
    });
});
