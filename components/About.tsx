"use client";
import { motion } from "framer-motion";
import {PageInfo} from "@/typings";
import {urlForImage} from "@/sanity/lib/image";

type Props = {
    pageInfo: PageInfo | null;
}
export default function about({pageInfo}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-[100px]"
        >
            <h3 className="absolute top-24 md:top-7 uppercase tracking-[20px] text-gray-500 text-2xl">
                À Propos
            </h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={pageInfo && pageInfo.profilePic ? urlForImage(pageInfo.profilePic).url() : ""}
                alt="Image de profil de l'auteur"
                className="-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
            />

            <div className="space-y-8 md:px-10">
                <h4 className="text-2xl md:text-4xl font-semibold ">Qui suis-je ?</h4>
                <p className="text-sm md:text-base text-justify">
                    {pageInfo && pageInfo.backgroundInformation }
                </p>
            </div>
        </motion.div>
    );
}
