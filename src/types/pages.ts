import { City } from './city'

export interface Pages {
  items: City[]
  nextPage: number
  hasMore: boolean
}
