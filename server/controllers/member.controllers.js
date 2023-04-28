const Member = require("../models/member.models");
var model = new Member();

exports.getList = async (req, res) => {
    let params = req.query;
    model.getAll(params, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

exports.getMember = async (req, res) => {
    let id = req.params.id;
    model.getOne(id, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else res.status(200).send(data);
    });
};


exports.searchMembers = async (req, res) => {
    model.getMembers(req.body, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

exports.addMember = async (req, res) => {
    model.create(req.body, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

exports.updateMember = async (req, res) => {
    let id = req.params.id;
    console.log(req.body);
    model.update(id, req.body, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

exports.deleteMember = async (req, res) => {
    let id = req.params.id;

    model.delete(id, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};
