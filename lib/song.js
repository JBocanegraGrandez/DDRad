export default class song {
  constructor(songId, beatConst, difficulty, movesArr) {
    this.domEl = document.getElementById(songId)
    this.beatConst = beatConst
    this.difficulty = difficulty
    this.movesArr = movesArr
    this.songId
  }
}
