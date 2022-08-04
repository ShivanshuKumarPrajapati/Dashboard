const mongoose = require('mongoose');
const ObjectId = mongoose.Schema;

const userDataSchema = new mongoose.Schema({
    creative_thinking: {
        type: Number,
        required: true,
    },
    communication_skills: {
        type: Number,
        required: true,
    },
    influencing_tactics: {
        type: Number,
        required: true,
    },
    problem_solving: {
        type: Number,
        required: true,
    },
    years_of_experience: {
        type: Number,
        required: true,
        unique: true,
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
    }
}, { timestamps: true });

const userData = new mongoose.model('UserData', userDataSchema);

module.exports = userData;