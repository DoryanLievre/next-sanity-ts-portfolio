import { Experience } from "@/typings";

export const fetchExperiences = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);
        if (!res.ok) {
            throw new Error("Failed to fetch experiences");
        }
        const data = await res.json();
        const experiences: Experience[] = data.experiences;
        return experiences;
    } catch (error) {
        console.error("Error while fetching experiences:", error);
        return [];
    }
};
