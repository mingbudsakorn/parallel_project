var express = require('express');
var router = express.Router();
var axios = require('axios');
var ip = require('../../ip')
const { primaryBackend, secondaryBackend } = ip

const getPaths = [
  '/user-group',
  '/group/all',
  '/message/all',
  '/message/unread',
];

getPaths.map(i => {
  router.get(i, (req, res, next) => {
    const param = { params: req.query }
    axios.get(primaryBackend + i, param)
      .then((response) => {
        console.log('From: primary backend');
        res.send(response.data);
      })
      .catch(err => {
        axios.get(secondaryBackend + i, param)
          .then(response => {
            console.log('From: secondary backend');
            res.send(response.data);
          })
          .catch(err => {
            console.error(err);
            res.send('ERROR');
          });
      });
  });
})

const postPaths = [
  '/auth',
  '/group/create',
  '/group/join',
  '/group/leave',
  '/message/send',
  '/message/read',
];

postPaths.map(i => {
  router.post(i, (req, res, next) => {
    axios.post(primaryBackend + i, req.body)
      .then((response) => {
        console.log('From: primary backend');
        res.send(response.data);
      })
      .catch(err => {
        axios.post(secondaryBackend + i, req.body)
          .then(response => {
            console.log('From: secondary backend');
            res.send(response.data);
          })
          .catch(err => {
            console.error(err);
            res.send('ERROR');
          });
      });
  });
})

module.exports = router;
