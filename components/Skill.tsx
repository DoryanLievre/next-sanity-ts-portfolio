"use client";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import {urlForImage} from "@/sanity/lib/image";

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};
export default function Skill({
                                  skill,
                                  directionLeft,
                              }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0,
                }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={skill && urlForImage(skill.image).url()}
                className="rounded-full border border-gray-500 w-14 h-14 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 trnasition duration-500 ease-in-out group-hover:bg-white w-14 h-14 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex items-center justify center h-full">
                    <p className="text-center text-sm md:text-2xl pb-2 xl:pb-0 xl:pl-1 font-bold text-black opacity-100">
                        {skill && skill.numberOfProjectsDone} projets
                    </p>
                </div>
            </div>
        </div>
    );
}
