const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({

  candidate_name:{
     type:String,
     required: true
  },
  candidate_email:{
    type:String,
    required: true
 },
 candidate_score_Firstround:{
    type:Number,
    required: true
 },
 candidate_score_Secondround:{
    type:Number,
    required: true
 },
 candidate_score_Thirdround:{
    type:Number,
    required: true
 }
});

module.exports  = mongoose.model('Users',UserSchema);