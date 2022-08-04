const Data = require('../models/data');

exports.addData = (req, res) => {
    const newData = new Data(req.body);
    newData.save().then(data => {
        res.json(data);
    }
    ).catch(err => {
        res.json({
            error:err
        });
    }
    );
}

exports.getUserData = (req, res) => {

    // console.log(req.params.userId);
    Data.find()
        .populate({
            path: 'user',
            select:'name id'
        })
        .then(data => {

            const userData = data.filter(data => {
                data.updatedAt = undefined;
                data.createdAt = undefined;
                return data.user.id === req.params.userId;
        });
            
        res.json(userData);
    }
    ).catch(err => {
        res.json({
            error: err
        });
    }
    );
}