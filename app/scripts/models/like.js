var Backbone = require('backbone');
var $ = require('jquery');

var Like = Backbone.Model.extend({
    defaults: {
      likesValue: 0
    },

    addOne: function(){
      this.set('likesValue', this.get('likesValue') + 1)
    },

    toJSON: function(){
      if(this.get('likesValue') === 1){
        $('.likes-text').html('like');
      } else{
          $('.likes-text').html('likes');
      }
    }


});





module.exports = {
  'Like': Like
};
