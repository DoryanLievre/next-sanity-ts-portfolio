"use client";
import { motion } from "framer-motion";
import {Project} from "@/typings";
import {urlForImage} from "@/sanity/lib/image";
import Link from "next/link";

type Props = {
    projects: Project[];
}
export default function Projects({projects}: Props) {
    const sortedProjects = projects.sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        return nameA.localeCompare(nameB);
    });
        return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 pt-[50px]">
            <h3 className="absolute top-24 md:top-7 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projets
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-corner-gray-400/20 scrollbar-thumb-[#22d3ee]/80 scrollbar-thin">
                {sortedProjects.map((project, index) => (
                    <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p44 h-screen">
                        <Link href={project?.linkToProject} target="_blank" className="cursor-pointer hover:scale-105 focus:scale-105 transition-all duration-100 ease-in-out">
                            <motion.img
                                className="w-[300px] max-h-32 md:w-[600px] xl:w-[900px] md:max-h-[27rem] xl:max-h-[34rem] object-cover shadow-2xl border-2 border-[#22d3ee]/50 rounded-2xl cursor-pointer"
                                key={project?._id}
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                src={project.image ? urlForImage(project.image).url() : "" }
                                alt="Image du projet"
                            />
                        </Link>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <div className="flex flex-col md:flex-row items-center justify-center">
                                <div className="flex items-center space-x-3.5 justify-center">
                                    {project?.technologies.map((technology) => (
                                        <img
                                            className="w-7 h-7 md:w-10 md:h-10 rounded-full inline-block mb-5 md:mb-0"
                                            key={technology?._id}
                                            src={urlForImage(technology?.image).url()}
                                            alt=""
                                        />
                                    ))}
                                </div>
                                <h4 className="flex flex-col md:flex-row items-center justify-center text-center md:text-2xl md:pl-5">
                        <span className="border-2 border-[#22d3ee]/50 font-semibold px-2 rounded-2xl text-[#22d3ee]/80 md:mr-3 mb-3 md:mb-0 ">
                          <span className="text-white">{index + 1}</span> -{" "}
                            {projects.length}
                        </span>
                                    {project?.title}
                                </h4>

                            </div>
                            <p className="text-lg text-center max-h-40 md:max-h-12 xl:max-h-28 overflow-auto scrollbar-thin">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#22d3ee]/20 left-0 h-[400px] -skew-y-12" />
        </div>
    );
}
