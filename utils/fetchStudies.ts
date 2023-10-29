import { Study } from "@/typings";

export const fetchStudies = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getStudies`);
        if (!res.ok) {
            throw new Error("Failed to fetch studies");
        }
        const data = await res.json();
        const studies: Study[] = data.studies;
        return studies;
    } catch (error) {
        console.error("Error while fetching studies:", error);
        return [];
    }
};
