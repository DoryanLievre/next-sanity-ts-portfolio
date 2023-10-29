"use client";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import { Study } from "@/typings";

type Props = {
    studies: Study[];
};

export default function WorkExperience({ studies }: Props) {
    studies.sort((studyA, studyB) => {
        const dateA = new Date(studyA.dateStarted);
        const dateB = new Date(studyB.dateStarted);

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
                Formations
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scroll-smooth scrollbar-track-gray-400/20 scrollbar-thumb-[#22d3ee]/80 scrollbar-thin">
                {studies?.map((study) => (
                    <ExperienceCard key={study._id} study={study} />
                ))}
            </div>
        </motion.div>
    );
}
