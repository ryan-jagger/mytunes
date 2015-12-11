// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  //this.model.artist === 'a'   <td>a</td><td>b</td>
  //this.model.title === 'b'
  events: {

    'click': function(){
      this.model.dequeue();
    }
  },

  render: function() {
    //accesses it's model's attributes, and applies them to the template
    return this.$el.html(this.template(this.model.attributes));
  }
});
