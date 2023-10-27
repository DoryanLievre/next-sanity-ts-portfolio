import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social, Study } from "@/typings";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import StudyExperience from "@/components/StudyExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import {fetchSkills} from "@/utils/fetchSkills";
import {fetchSocials} from "@/utils/fetchSocials";
import {fetchStudies} from "@/utils/fetchStudies";
import {fetchExperiences} from "@/utils/fetchExperiences";
import {fetchPageInfo} from "@/utils/fetchPageInfo";
import {fetchProjects} from "@/utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  studies: Study[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};
export default function Home({ pageInfo, experiences, studies, skills, socials, projects }: Props) {
  return (
      <div>
        <Head>
          <title>Doryan Lièvre - Portfolio</title>
          <meta name="description" content="Voici mon portfolio pour découvrir mes compétences et projets !" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-scroll z-o scrollbar-track-gray-400/20 scrollbar-corner-gray-400/20 scrollbar-thumb-[#22d3ee]/80 scrollbar-thin scroll-smooth ">
          <Header socials={socials} />

          <section id="hero" className="snap-start">
            <Hero pageInfo={pageInfo} />
          </section>

          <section id="about" className="snap-center">
            <About pageInfo={pageInfo}/>
          </section>

          <section id="experience" className="snap-center">
            <WorkExperience experiences={experiences} />
          </section>

          <section id="study" className="snap-center">
            <StudyExperience studies ={studies}/>
          </section>

          <section id="skills" className="snap-start">
            <Skills skills={skills} />
          </section>

          <section id="project" className="snap-start">
            <Projects projects={projects} />
          </section>
          <section id="contact" className="snap-start">
            <ContactMe pageInfo={pageInfo} />
          </section>

          <Link href="#hero">
            <div className="fixed bottom-5 right-5 cursor-pointer hidden md:block z-50">
              <img className="h-12 w-12 xl:w-16 xl:h-16 bg-[#22d3ee]/50 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="/images/noun-arrow-top.png" alt="" />
            </div>
          </Link>
          <footer className="sticky w-screen flex items-center justify-center bg-gray-500/20 snap-center ">
            <p className="text-2xl text-[#22d3ee]/50 font-semibold tracking-[2px]  py-10">Merci d&apos;avoir scroller jusqu&apos;ici !</p>
          </footer>
        </main>
      </div>
  );
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const studies: Study[] = await fetchStudies();
  const experiences: Experience[] = await fetchExperiences();
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      skills,
      socials,
      studies,
      experiences,
      pageInfo,
      projects
    },
    revalidate:10
  };
};
