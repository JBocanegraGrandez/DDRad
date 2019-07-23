import Song from './song'
import moves from './afronova_hard'
import { runInThisContext } from 'vm';

export default class SongManager {
  constructor(song) {
    this.setup()
    this.nextSong = this.allsong[0]
    this.nextSongName = ''
    this.nextSongDifficulty = ''

  }

  setup() {
      this.songSetup();
      this.movesSetup();
  }

  setNextSongName(name) {
    this.nextSongName = name
  }

  setNextSongDifficulty(difficulty) {
      this.nextSongDifficulty = difficulty
  }

  movesSetup(){
   
  }

  songSetup() {
      this.allsong = [
          new Song('afronova', 300, 'hard', moves),
          new Song('afronova', 300, 'easy', moves),
          new Song('capjack', 300, 'easy', moves)
      ]
  }

  
}
