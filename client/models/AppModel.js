// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handle-r will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    //libraryEntryView is clicked
    //SongModel.play() is called
    //triggers 'play' in SongModel
    //but because SongModel is a child of Songs, Songs also triggers 'play'
    //library is an instance of Song
    //vvvvvvvv event listener for 'play'
    params.library.on('play', function(song){
      console.log("AppModel detected the play trigger in it's collection.");
      console.log("AppModel is setting a new 'currentSong");
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      console.log("AppModel detected the enqueue trigger in it's collection.");
      //once the queue trigger is recieved,
      var q = this.get('songQueue');
      q.add(song);
      console.log(this.get('songQueue'));
    }, this);

    this.get('songQueue').on('stop', function(){
      this.set('currentSong', null);
    }, this);

  }

});
