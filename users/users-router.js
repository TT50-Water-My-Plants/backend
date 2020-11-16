const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/auth-middleware.js");
const e = require("express");

router.get("/", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ users, jwt: req.jwt });
        }) .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
    Users.findById(req.id)
    .then(user => {
        if(!user){
            res.status(404).json({ message: "Can't find user with provided id." })
        } else{
            res.status(200).json({ user, jwt:req.jwt })
        }
    }) .catch(err => res.status(500).json({ err: "err.message" }))
})

module.exports = router;