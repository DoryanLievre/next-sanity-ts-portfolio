"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import {Social} from "@/typings";

type Props = {
    socials: Social[];
}
export default function Header({socials}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl-items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        aria-label="mon compte linkedin"
                        url={social.url}
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        className="hover:scale-125 transition-all duration-500 ease-in-out"
                    />
                ))}
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-gray-300"
            >
                <SocialIcon
                    className="cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                    href="#contact"

                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                    Contactez-moi
                </p>
            </motion.div>
        </header>
    );
}
