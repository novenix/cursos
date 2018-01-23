'use strict'
var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var userSchema=Schema({
    name:String,
    password:String,
    //roles:[]
});
module.exports=mongoose.model('user',userSchema);