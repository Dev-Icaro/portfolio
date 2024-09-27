import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import ExperienceGrid from './_components/experience-grid';
import ProjectCard from '@/components/ui/project-card';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function Home() {
  return (
    <main className="h-full">
      <section className="p-4 text-center flex items-center justify-center bg-black h-4/6 sm:h-3/6">
        <ScrollReveal effect="fade-up" className="flex flex-col gap-10">
          <h1 className="text-white font-bold responsive-title">Icaro Kiiler Melo, Full-stack Developer</h1>
          <p className="text-gray-300 responsive-text leading-loose lg:max-w-[600px] m-auto">
            I don&apos;t want to waste your time, so here&apos;s a brief description of what I love and know
            how to do!
          </p>

          <div className="flex items-center justify-center gap-5">
            <Button variant="secondary" size="lg" className=" px-8 py-7 text-base">
              Download CV
            </Button>
            <Button variant="link" className="text-white gap-2 text-base">
              Contact <MoveRight />
            </Button>
          </div>
        </ScrollReveal>
      </section>

      <section>
        <div className="container py-[120px]">
          <div className="flex flex-col gap-5 text-xl mb-20">
            <p className="text-black font-semibold">Real work:</p>
            <h1 className="text-5xl font-bold">Experiences</h1>
            <p className="text-gray-500">
              A brief summary of what i&apos;ve done as a professional with tech:
            </p>
          </div>

          <ExperienceGrid />
        </div>
      </section>

      <section className="py-[100px] bg-gray-200 px-5">
        <div
          className="container m-auto flex flex-col gap-9 bg-white
          rounded-lg p-10 shadow-lg"
        >
          <ScrollReveal effect="fade-down">
            <h1 className="text-5xl font-bold text-center">Tech Stack</h1>

            <div className="relative w-full max-w-[400px] mx-auto">
              <Image
                src="/skillicons.svg"
                alt="Tech Stack image"
                layout="responsive"
                width={500}
                height={150}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-black py-[120px]">
        <div className="container m-auto">
          <div className="flex flex-col gap-5 mb-20">
            <h1 className="text-white text-5xl">Projects</h1>
            <p className="text-gray-300 text-xl">Some relevant projects on my carreer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProjectCard
              title="Depre Robot"
              description="An RPA builted with python and selenium, to search for payments on TJSP Web site and export a list of founded processes."
              link="https://github.com/Dev-Icaro/depre-robot"
            />
            <ProjectCard
              title="Depre Robot"
              description="An RPA builted with python and selenium, to search for payments on TJSP Web site and export a list of founded processes."
              link="https://github.com/Dev-Icaro/depre-robot"
            />
            <ProjectCard
              title="Depre Robot"
              description="An RPA builted with python and selenium, to search for payments on TJSP Web site and export a list of founded processes."
              link="https://github.com/Dev-Icaro/depre-robot"
            />
            <ProjectCard
              title="Depre Robot"
              description="An RPA builted with python and selenium, to search for payments on TJSP Web site and export a list of founded processes."
              link="https://github.com/Dev-Icaro/depre-robot"
            />
          </div>
        </div>
      </section>

      <footer className="bg-white p-8 flex flex-col gap-4">
        <div className="flex justify-center">
          <Image
            src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
            alt="Instagram badge"
            width={120}
            height={50}
          />

          <Image
            src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn badge"
            width={110}
            height={50}
          />

          <Image
            src="https://img.shields.io/badge/-Github-%23000000?style=for-the-badge&logo=github&logoColor=white"
            alt="LinkedIn badge"
            width={100}
            height={50}
          />
        </div>

        <div className=" text-center">© 2002 Icaro Kiiler Melo</div>
      </footer>
    </main>
  );
}
