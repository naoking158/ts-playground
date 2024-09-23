import type { Foodable } from './types'
import { Score } from './score'

export class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEvenetHandler.bind(this))
  }
  clickEvenetHandler() {
    this.element.classList.toggle('food--active')

    const score = Score.getInstance()
    score.render()
  }
}
