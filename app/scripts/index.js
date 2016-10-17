// console.log("Hello World!");

var $ = require('jquery');
var Like = require('./models/like.js').Like;

var like = new Like();

$(document).on('click', '.like-button', function(){
  like.addOne();
  console.log('like value', like.get('likesValue'));

});
