// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { SportFactory } from '../../lib/factories/sportFactory'

async function getDates(sport: string) {
  try {
    let sportObject = SportFactory.createObject(sport);
    return sportObject.getDates();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
};

type DatesBySport = {
  [key: string]: string | string[]
};

type Data = {
  data: DatesBySport
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  let datesBySport: DatesBySport = {};

  await Promise.all(SportFactory.allSports.map(async (sport: string) => {
    datesBySport[sport] = await getDates(sport);
  }));

  res.status(200).json({ data: datesBySport })
}
