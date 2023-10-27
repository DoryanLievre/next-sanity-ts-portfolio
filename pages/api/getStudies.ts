import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import {Study} from "@/typings";

const query = groq`
    *[_type == "study"] {
    ...,
    technologies[]->
    }
`
type Data = {
    studies: Study[];
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const studies =  await client.fetch(query);
    res.status(200).json({ studies });
}