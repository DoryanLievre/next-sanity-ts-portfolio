import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import {Skill} from "@/typings";

const query = groq`
*[_type == "skill"]
`
type Data = {
    skills: Skill[];
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(client.fetch(query, {}))
    const skills =  await client.fetch(query);
    res.status(200).json({ skills });
}