import {Study} from "@/typings";

export const fetchStudies = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getStudies`);
    const data = await res.json();
    const studies: Study[] = data.studies;
    // console.log("fetching",studies);
    return studies;
}