import { Sport } from "./sport";
import { parse, HTMLElement } from 'node-html-parser';
import axios from 'axios';

export class Melee extends Sport {
  constructor() {
    super()
    this.name = 'Melee'
  }

  async getDates() {
    const { data, status } = await axios.get<string>(
      'https://www.meleemajors.com/',
      {
        headers: {
          Accept: 'application/html',
        },
      },
    );

    const root = parse(data);
    let cards : any[] = root.querySelectorAll('.card');
    let dates: string[] = [];
  
    cards.forEach(card => {
      let date: string = card.querySelector('h4')?.text.trim() || '';
  
      dates.push(date);
    });
  
    return dates;
  }
}