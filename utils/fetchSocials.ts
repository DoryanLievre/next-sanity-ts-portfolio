import { Social } from "@/typings";

export const fetchSocials = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

        if (!res.ok) {
            throw new Error(`Error fetching Socials: ${res.status} - ${res.statusText}`);
        }

        const data = await res.json();
        const socials: Social[] = data.socials;

        return socials;
    } catch (error) {
        console.error("An error occurred while fetching Socials:", error);
        throw error;
    }
};
