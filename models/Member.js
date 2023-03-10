const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
    roles: {
        type: String,
        enum: ['admin', 'superAdmin', 'user'],
        required: true,
        default: 'user'
      },
      nationalId:{
        type: String,
        required: true,
        unique: true
      },
      date:{
        type: Date,
        default: Date.now
      }
      
  });

  MemberSchema.virtual('amounts',{
    ref: 'Amount',
    localField: '_id',
    foreignField: 'member'
  })
  module.exports = mongoose.model('Member', MemberSchema, 'members')