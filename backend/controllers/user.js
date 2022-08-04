const User = require('../models/user');
const {validationResult} = require('express-validator')


exports.getAllUsers = (req, res) => {
    User.find().then(users => {
        res.json(users);
    }
    ).catch(err => {
        res.json(err);
    }
    );
};

exports.getUser = (req, res) => {
    User.find({name:req.body.name}).then(user => {
        res.json(user);
    }
    ).catch(err => {
        res.json({
            error:err
        });
    }
    );
}


exports.addUser = (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array()[0].msg });
    }

    const newUser = new User(req.body);
    newUser.save().then(user => {
        res.json(user);
    }
    ).catch(err => {
        res.json({
            error:err
        });
    }
    );
}