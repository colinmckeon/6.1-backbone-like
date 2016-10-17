var Backbone = require('backbone');


var Like = Backbone.Model.extend({
    defaults: {
      likesValue: 0
    },

    addOne: function(){
      this.set('likesValue', this.get('likesValue') + 1)
    }


});




module.exports = {
  'Like': Like
};
