var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Group = require('../models/group.js');
var Join = require('../models/join.js');

router.post('/auth', (req, res) => {
  var query = { name: req.body.name };
  User.find(query, (err, users) => {
    if (err) {
      throw err
    } else if (users.length == 0) {
      var user_model = new User(query);
      user_model.save(function (err, new_user) {
        if (err) throw err
        res.send({ "uid": new_user.id });
      });
    } else {
      res.send({ "uid": users[0].id });
    }
  });
});

router.get('/user-group', (req, res) => {
  Join.find({ uid: req.query.uid }, (err, joins) => {
    if (err) {
      res.send({ groups: [] });
    } else {
      const result = [];
      const promises = joins.map((join, index) =>
        Group.find({
          _id: join.gid
        }).then(function (groups) {
          if (groups.length) result.push(groups[0]);
        })
      );

      Promise.all(promises).then(() => {
        res.send({
          groups: result
        });
      });
    }

  });
});

module.exports = router;
