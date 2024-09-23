export type Scoreable = {
  readonly totalScore: number
  render(): void
}

export type Foodable = {
  element: HTMLDivElement
  clickEvenetHandler(): void
}

export type Foodsable = {
  elements: HTMLDivElement[]
  readonly activeElements: HTMLDivElement[]
  readonly activeElementScores: number[]
}
