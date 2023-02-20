const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    
    teamName: {
      type: String
    },
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
    },
      date:{
        type: Date,
        default: Date.now
      }
  });

  module.exports = mongoose.model('Team', TeamSchema, 'teams')