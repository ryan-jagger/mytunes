// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  //click-> calls play() in it's associated model
  //
  events: {
    'click': function() {
      console.log('LibraryEntryView clicked');
      // console.log("LibraryEntryView's model's play function is called")
      // this.model.play();
      console.log("LibraryEntryView calls SongModel's queue function");
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
