// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    console.log('SongModel play function is being called');
    // Triggering an event here will also trigger the event on the collection
    console.log("SongModel sends itself a trigger of 'play'")
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log('SongModel queue function is called.');
    console.log('SongModel triggers enqueue');
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    console.log('SongModel dequeue function is called.');
    console.log('SongModel triggers dequeue');
    this.trigger('dequeue', this);
  },

  ended: function() {
    console.log('SongModel ended function is called.');
    console.log('SongModel triggers ended');
    this.trigger('ended', this);
  }

});
