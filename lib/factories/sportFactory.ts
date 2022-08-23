import * as sports from '../sports';
import { SportSubclass } from '../sports/sport';

const sportMap: Record<string, SportSubclass> = {};
Object.keys(sports).forEach(sportName => {
  if(sportName !== 'Sport') {
    sportMap[sportName] = sports[sportName as keyof SportSubclass];
  }
});

export class SportFactory {
  static createObject(sportName: string): sports.Sport {
    const SportType = sportMap[sportName];
    return new SportType();
  };

  static allSports: string[] = Object.keys(sportMap);
}