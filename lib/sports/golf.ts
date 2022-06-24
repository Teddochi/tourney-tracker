import { Sport } from "./sport";
import { parse, HTMLElement } from 'node-html-parser';
import axios from 'axios';

export class Golf extends Sport {
  constructor() {
    super()
    this.name = 'Golf'
  }

  async getDates() {
    const { data, status } = await axios.get<string>(
      'https://www.pgatour.com/tournaments/schedule.html',
      {
        headers: {
          Accept: 'application/html',
        },
      },
    );

    const root: HTMLElement = parse(data);
    let dateElements: HTMLElement[] = root.querySelectorAll('.js-tournament-date');
    let dates: string[] = [];
    dateElements.forEach(dateElement => {
      let month: string = dateElement.querySelector('span:nth-child(1)')?.text.trim() || '';
      let days: string = dateElement.querySelector('span:nth-child(2)')?.text.trim() || '';
      let year: string = dateElement.querySelector('span:nth-child(3)')?.text.trim() || '';
      dates.push(`${month} ${days} ${year}`)
    });

    return dates;
  }
}