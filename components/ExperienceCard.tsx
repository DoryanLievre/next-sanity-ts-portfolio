// @flow
"use client";
import { motion } from "framer-motion";
import * as React from "react";
import {Experience, Study} from "@/typings";
import {urlForImage} from "@/sanity/lib/image";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

type Props = {
    experience?: Experience;
    study?: Study;
}
export default function ExperienceCard({ experience, study }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-40 cursor-pointer transition-opacity duration-200 hover:opacity-100">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src={experience ? urlForImage(experience.companyImage).url() : study ? urlForImage(study.schoolImage).url() : ""}
                alt="Logo de l'entreprise Yes We Dev"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-2xl font-light">{experience ? experience.jobTitle : study ? study.diplomaTitle : "" }</h4>
                <p className="font-bold text-1xl mt-1">{experience ? experience.company : study ? study.schoolName : ""}</p>
                <div className="flex space-x-2 my-2">
                    {experience?.technologies?.map((technology) => (
                        <img
                            className={`w-10 h-10 rounded-full object-cover object-center`}
                            key={technology._id}
                            src={experience ? urlForImage(technology.image).url() : ""}
                            alt={technology.title}
                        />
                    ))}

                    {study?.technologies?.map((technology) => (
                        <img
                            className={`w-10 h-10 rounded-full object-cover object-center`}
                            key={technology._id}
                            src={study ? urlForImage(technology.image).url() : ""}
                            alt={technology.title}
                        />
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300 ">
                    {experience ? (
                        experience.isCurrentlyWorkingHere
                            ? `${format(new Date(experience.dateStarted), 'dd MMMM yyyy', { locale: fr })} - Aujourd'hui`
                            : `${format(new Date(experience.dateStarted), 'dd MMMM yyyy', { locale: fr })} - ${format(new Date(experience.dateEnded), 'dd MMMM yyyy', { locale: fr })}`
                    ) : ""}

                    {study ? (
                        study.isCurrentlyStudyingHere
                            ? `${format(new Date(study.dateStarted), 'dd MMMM yyyy', { locale: fr })} - Aujourd'hui`
                            : `${format(new Date(study.dateStarted), 'dd MMMM yyyy', { locale: fr })} - ${format(new Date(study.dateEnded), 'dd MMMM yyyy', { locale: fr })}`
                    ) : ""}
                </p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {experience?.points?.map((point ,index) => (
                        <li key={index}>{point}</li>
                    ))}
                    {study?.whatILearned?.map((point ,index) => (
                        <li key={index}>{point}</li>
                    ))}

                </ul>
            </div>
        </article>
    );
}
