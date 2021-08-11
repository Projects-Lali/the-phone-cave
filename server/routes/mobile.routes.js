const router = require("express").Router()
const Mobile = require('../models/Mobile.model')


router.get("/", (req, res) => {
    Mobile
        .find()
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

router.get("/:mobile_id", (req, res) => {
    const { mobile_id } = req.params
    Mobile
        .findById(mobile_id)
        .then(response => res.json(response))
        .catch(err => console.log(err))
});

module.exports = router;