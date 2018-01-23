'use strict'
var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var userSchema=Schema({
    nombre:String,
    password:String,
    roles:[]
});
module.exports=mongoose.model('user',userSchema);