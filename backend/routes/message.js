var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Group = require('../models/group.js');
var Message = require('../models/message.js');
var Join = require('../models/join.js');

router.get('/all', (req, res) => {
    Message.find({ gid: req.query.gid }, (err, messages) => {
        if (err) res.send('FAIL');
        else {
            const promises = messages.map(message => {
                return new Promise((resolve, reject) => {
                    User.findById(message.uid, (err, user) => {
                        if (err) {
                            reject()
                        } else {
                            message._doc.user = user;
                            resolve();
                        }
                    });
                });
            });

            Promise.all(promises).then(() => {
                res.send({ messages: messages });
            }).catch((err) => {
                res.send('FAIL');
            });
        }
    });
});

router.get('/unread', (req, res) => {
    const { uid, gid } = req.query;
    Join.find({ uid, gid }, function (err, join) {
        if (err) {
            throw err;
        } else if (join.length) {
            const read_at = join[0].read_at;
            const query = { send_at: { $gt: read_at }, gid }
            Message.find(query).sort('send_at').exec((err, messages) => {
                if (err) throw err
                else {
                    const promises = messages.map(message => {
                        return new Promise((resolve, reject) => {
                            User.findById(message.uid, (err, user) => {
                                if (err) {
                                    reject()
                                }
                                else {
                                    message._doc.user = user;
                                    resolve();
                                }
                            });
                        });
                    });

                    Promise.all(promises).then(() => {
                        res.send({ messages: messages });
                    }).catch((err) => {
                        res.send('FAIL');
                    });
                }
            });
        }
    });
});

router.post('/send', (req, res) => {
    const { gid, uid, content } = req.body
    var query = Group.findOne({ gid }).select('gid');
    query.exec((err, group) => {
        if (err) throw err;
        else {
            const message_model = new Message({ uid, gid, content, send_at: Date.now() });
            message_model.save((err, result) => {
                if (err) {
                    res.send("ERROR");
                    throw err
                } else {
                    User.find({ _id: message_model.uid }, (err, users) => {
                        let message = result._doc;
                        message.user = users[0];
                        Message.find({}).then(allMessages => {
                            res.send({ message: message, messageOrder: allMessages.length });
                        });
                    });
                }
            })
        }
    })
});

router.post('/read', (req, res) => {
    const { uid, gid } = req.body
    Join.findOne({ uid, gid }, (err, joins) => {

        if (err) throw err
        else if (joins == null) return res.send("ERROR");
        else {
            joins.set({ read_at: Date.now() });
            joins.save(function (err, update) {
                if (err) throw err
                else {
                    return res.send("SUCCESS");
                }
            });
        }
    });
});

module.exports = router;
