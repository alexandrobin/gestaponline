// Define schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  pseudo:{type:String,required:true},
  political:String, //Liberal or Fascist
  isHitler: Boolean, //0 == Not Hitler / 1 == is Hitler
  isPresident:Boolean, //0 == Not President / 1 == is President
  isFirstMinister:Boolean, //0 == Not 1st Minister / 1 == is 1st Minister
  session:{type:Schema.Types.ObjectId, ref:'session'},
  updated:{type:Date,default:Date.now()}
});

// Compile model from schema
var User = mongoose.model('User', UserSchema );

export default User