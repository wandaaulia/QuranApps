import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const allData = "https://quran-api.santrikoding.com/api/surah";
  try {
    const result = await fetch(allData);
    const dataJson = await result.json();
    res.status(200).send({ data : dataJson })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}