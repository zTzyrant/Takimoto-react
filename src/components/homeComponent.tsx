import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card3md1sm, type slideType } from "./carousel/Card3md1sm";
import DataProject from "assets/data/projects.json";

interface sectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<sectionProps> = ({ className, children, id }) => {
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    document.addEventListener("resize", () => {
      setInnerHeight(window.innerHeight);
    });

    return () => {
      document.removeEventListener("resize", () => {
        setInnerHeight(window.innerHeight);
      });
    };
  }, []);
  return (
    <motion.section
      id={id}
      className={`relative z-[2] mx-auto !w-full overflow-hidden px-4 pt-[112px] sm:px-12 lg:px-16 ${className ? className : ""}`}
      style={{
        minHeight: `${innerHeight ? innerHeight : window.innerHeight}px`,
      }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const projectData: slideType[] = DataProject;

export const HomeComponent = ({ setSection }: { setSection: Function }) => {
  return (
    <>
      <Section className="flex w-full flex-col justify-end" id="home">
        <h1 className="md:7xl font-monument text-2xl uppercase sm:text-[5vw] sm:leading-[5.5vw]">
          Welcome to my space,
        </h1>
        <h1 className="md:7xl font-monument text-2xl uppercase sm:text-[5vw] sm:leading-[5.5vw]">
          where I share my
        </h1>
        <div className="flex flex-col sm:flex-row">
          <h1 className="md:7xl font-monument text-2xl uppercase sm:text-[5vw] sm:leading-[5.5vw]">
            experiences.
          </h1>
          <div className="flex sm:items-center sm:justify-center">
            <button
              className="h-fit w-fit rounded-full bg-taki-primary p-2 font-monument text-xl uppercase text-white sm:p-[1vw] sm:text-[2.5vw]"
              onClick={() => setSection(1)}
            >
              Get started
            </button>
          </div>
        </div>
      </Section>
      <Section className="flex w-full" id="about">
        <div className="flex h-full w-full items-center">
          <div className="flex h-full w-full flex-col justify-end">
            <div className="clip-border-container w-fit">
              <div className="clip-border h-fit w-fit bg-taki-primary">
                <h2 className="py-0.5 pl-1.5 pr-3.5 font-mono text-sm font-bold uppercase text-white md:text-xl">
                  About me
                </h2>
              </div>
            </div>
            <div className="taki-bg-container group relative h-fit w-full border-2 border-black p-2 md:w-2/3 lg:w-1/2">
              <span className="font-mono text-base text-white">
                My name is <b>Muhammad Zein Akbar</b>, and on GitHub, I’m{" "}
                <b className="hover:bg-black hover:text-white">
                  <a href="https://github.com/zTzyrant" target="_blank" rel="noopener noreferrer">
                    ztzyrant
                  </a>
                </b>
                . I am a full-stack website developer with a GPA of 3.6 from ITB STIKOM BALI in
                Information Systems and a GPA of 3.15 from HELP University Malaysia in Information
                Technology.
                <br />
                <br />
                <b>What can I do?</b> I can create websites, build bots, and perform penetration
                tests.
                <br />
                <br />
                <b>This Website?</b> This portfolio site is built on <b>React 18</b> and inspired by{" "}
                <i className="hover:bg-black hover:text-white">
                  <a
                    href="https://www.youtube.com/watch?v=pGMKIyALcK0&list=PLpepLKamtPjguLKYT7c66998iTaWvqSRe"
                    target="_blank"
                  >
                    @WawaSensei
                  </a>
                </i>
                . In the future, I plan to add many features for my learning needs and showcase all
                my completed projects.
                <br />
                <br />
                <b>Experience?</b> I’ve worked with web frameworks like Angular, Vue, React, and
                Express to create dynamic user experiences. I’ve also explored Python, Go, C#, and
                Java, enhancing my skills with each project.
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section className="flex w-full flex-col justify-between pb-4" id="projects">
        <div className="flex h-fit w-full flex-col">
          <div className="flex w-full flex-row items-center justify-start gap-2">
            <hr className="h-1 w-10 rounded border-0 bg-taki-primary" />
            <h2 className="font-mono text-base font-bold uppercase text-taki-primary md:text-xl">
              Projects
            </h2>
          </div>
          <div className="flex">
            <p className="inline-flex flex-col gap-0 font-monument text-base font-thin uppercase md:text-4xl">
              <span>Some projects</span>
              <span>I've worked on</span>
            </p>
          </div>
        </div>
        <div className="flex h-full w-full justify-end">
          <Card3md1sm data={projectData} />
        </div>
      </Section>
      <Section className="flex w-full flex-col justify-end" id="contact">
        Contact
      </Section>
    </>
  );
};
