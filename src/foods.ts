import type { Foodsable } from './types'
import { Food } from './food'

export class Foods implements Foodsable {
  private static instance: Foods
  elements = Array.from(document.querySelectorAll<HTMLDivElement>('.food'))

  private _activeElements: HTMLDivElement[] = []
  private _activeElementScores: number[] = []

  get activeElements() {
    this._activeElements = this.elements.filter((elm) =>
      elm.classList.contains('food--active'),
    )
    return this._activeElements
  }

  get activeElementScores() {
    this._activeElementScores = this.activeElements.map((elm) => {
      const foodScore = elm.querySelector('.food__score')?.textContent
      if (foodScore) {
        return Number(foodScore)
      }
      return 0
    })
    return this._activeElementScores
  }

  private constructor() {
    for (const element of this.elements) {
      new Food(element)
    }
  }

  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods()
    }
    return Foods.instance
  }
}
