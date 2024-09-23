import type { Scoreable } from './types'
import { Foods } from './foods'

export class Score implements Scoreable {
  private static instance: Score

  private constructor() {}
  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score()
    }
    return Score.instance
  }

  get totalScore() {
    const foods = Foods.getInstance()
    return foods.activeElementScores.reduce((acc, score) => acc + score, 0)
  }

  render() {
    const scoreNumber = document.querySelector('.score__number')
    if (!scoreNumber) {
      return
    }
    scoreNumber.textContent = String(this.totalScore)
    return
  }
}
