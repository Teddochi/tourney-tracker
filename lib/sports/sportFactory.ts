import { Sport } from './sport'
import { Melee } from './melee'
import { Golf } from './golf'

export class SportFactory {
  static createObject(sportName: string): Sport {
    if (sportName === 'Melee') {
      return new Melee();
    } else if (sportName === 'Golf') {
      return new Golf();
    } else {
      throw "Invalid sport object requested."
    }
  }
}