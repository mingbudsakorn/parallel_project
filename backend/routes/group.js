var express = require('express');
var router = express.Router();
var Group = require('../models/group.js');
var Join = require('../models/join.js');

router.post('/create', (req, res) => {
    const { gname, uid } = req.body;
    Group.find({ name: gname }, (err, groups) => {
        if (err) {
            throw err
        } else if (groups.length == 0) {
            const group_model = new Group(query);
            group_model.save((err, group) => {
                if (err) throw err;
                const join_model = new Join({ uid, gid: group.id, read_at: 0 });
                join_model.save((err) => {
                    if (err) throw err;
                    res.send({ gid: group.id });
                })
            })
        } else {
            res.send({ gid: groups[0].id });
        }
    })
});

router.post('/join', (req, res) => {
    const { gid, uid } = req.body
    Group.find({ _id: gid }, (err, groups) => {
        if (err) {
            throw err
        } else if (groups.length == 0) {
            res.send("NOT FOUND GROUP");
        } else {
            Join.findOne({ uid, gid }, (err, join) => {
                if (join) {
                    res.send('EXISTED');
                } else {
                    const join_model = new Join({ uid, gid, read_at: 0 });
                    join_model.save((err) => {
                        if (err) throw err;
                        else res.send("EXISTED");
                    })
                }
            });
        }
    })
});

router.post('/leave', (req, res) => {
    const query = { uid: req.body.uid, gid: req.body.gid };
    Join.remove(query, (err, joins) => {
        if (err) return res.send("ERROR");
        else return res.send("SUCCESS");
    });
});

router.get('/all', (req, res) => {
    Group.find({}, (err, groups) => {
        if (err) {
            throw err;
        } else {
            res.send(groups);
        }
    });
});

module.exports = router;
