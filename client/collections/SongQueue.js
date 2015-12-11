// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    console.log('New SongQueue initialized.');

    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    if(this.at(0) === song) { //if we dequeue the first song
      this.playNext();
    } else { //if we dequeue any other song
      this.remove(song);
    }
  },

  playNext: function() {
    this.remove(this.at(0)); //remove first song
    if (this.length > 0) { //if there's still more songs in the queue
      this.playFirst(); //play the first song
    } else { //otherwise
      this.trigger('stop'); //send a stop trigger -> sets currentSong to null
    }
  },

  playFirst: function() {
    this.at(0).play();
  }
});
