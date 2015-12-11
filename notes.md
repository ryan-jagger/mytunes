

1) Index takes list of music from songData and creates a new collection of songs (library).

2) Index creates new AppModel which takes library as a parameter

3) new AppView is created and appended to the DOM





on song selection:

1) Song is clicked in libraryEntryView and this.model.play() is called.


2) SongModel.play runs this.trigger('play', this)

3) AppModel's event listener hears play and set's song to 'current song'

4) AppView detects change to currentSong and calls this.playerView.setSong

5) PlayerView renders new audio controller with new 


##ToDO

SongQueueEntryView.js
//on click 

SongQueueView.js



A suggested path: Start by examining the Song model, then fill out the Library and its corresponding views. Once you've done that, use the App model & view to hook the library up to the queue. Once your Queue tests pass, get the Player to work the way you expect.


//new control flow should be:
1. click on a LibraryEntryView
2. in the LibraryEntryView, change the onclick event to this.model.queue()
3. SongModel.queue() function, which triggers 'queue' instead of 'play'
4. Because this SongModel triggers 'play,' so does its collection, library
5. add a 'queue' trigger event to AppModel, which then interacts with our SongQueue



// new control flow
1) song is clicked in LibraryEntryView and this.model.queue() is called

2) SongModel.queue  runs this.trigger 'queue'

3) 





