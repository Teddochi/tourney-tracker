import * as sports from '../sports';

const sportMap: any = {};
Object.keys(sports).forEach(sportName => {
  if(sportName !== 'Sport') {
    sportMap[sportName] = sports[sportName as keyof typeof sports];
  }
});

export class SportFactory {
  static createObject(sportName: string): sports.Sport {
    const SportType = sportMap[sportName];
    return new SportType();
  };

  static allSports: string[] = Object.keys(sportMap);
}