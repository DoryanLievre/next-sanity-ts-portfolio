"use client";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import {Experience} from "@/typings";

type Props = {
    experiences: Experience[];
};
export default function WorkExperience({ experiences }: Props) {
    experiences.sort((experienceA, experienceB) => {
        const dateA = new Date(experienceA.dateStarted);
        const dateB = new Date(experienceB.dateStarted);

        return dateB.getTime() - dateA.getTime();
    });
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center pt-[100px]"
        >
            <h3 className="absolute top-24 md:top-7 uppercase tracking-[20px] text-gray-500 text-2xl">
                Expérience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scroll-smooth scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#22d3ee]/80 scrollbar-thin ">
                {experiences?.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))
                }
            </div>
        </motion.div>
    );
}