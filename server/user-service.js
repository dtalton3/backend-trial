const User = require('./user-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
    const docquery = User.find({}).read(ReadPreference.NEAREST);
    docquery.exec()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

function create(req, res) {
    const { username, password } = req.body;

    const user = new User({username, password});
    user.save()
    .then(() => {
        res.json(user);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

module.exports = {
    get,
    create
};