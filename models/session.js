// Define schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  state: {type:Number, default:0}, //0 Lobby - 1 Ongoing - 2 Completed
  name:String,
  numberOfPlayers: Number,
  turn:{type:Number,default:0},
  numberOfLiberalCards:{type:Number,default:6},
  numberOfFascistCards:{type:Number,default:12},
  isAdmin: {type:Schema.Types.ObjectId, model:'user'},
  created: {type:Date,default:Date.now()},
  updated:{type:Date,default:Date.now()}
});

// Compile model from schema
var Session = mongoose.model('Session', SessionSchema );

export default Session
