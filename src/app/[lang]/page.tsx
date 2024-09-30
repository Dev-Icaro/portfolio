import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import ExperienceGrid from './_components/experience-grid';
// import ProjectCard from '@/components/ui/project-card';
import ScrollReveal from '@/components/ui/scroll-reveal';
import Link from 'next/link';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <main className="h-full">
      <section className="p-4 text-center flex items-center justify-center bg-black h-4/6 sm:h-3/6">
        <ScrollReveal effect="fade-up" className="flex flex-col gap-10">
          <h1 className="text-white font-bold responsive-title">Icaro Kiiler Melo, Full-stack Developer</h1>
          <p className="text-gray-300 responsive-text leading-loose lg:max-w-[600px] m-auto">
            {dict.banner.subtitle}
          </p>

          <div className="flex items-center justify-center gap-5">
            <Link href="/documents/curriculo-icaro-f.pdf" target="_blank">
              <Button variant="secondary" size="lg" className=" px-8 py-7 text-base">
                Download CV
              </Button>
            </Link>

            <Link href="https://github.com/Dev-Icaro" target="_blank">
              <Button variant="link" className="text-white gap-2 text-base">
                {dict.banner.contact} <MoveRight />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section>
        <div className="container py-[120px]">
          <div className="flex flex-col gap-5 text-xl mb-20">
            <p className="text-black font-semibold">{dict.experiences.realWork}</p>
            <h1 className="text-5xl font-bold">{dict.experiences.title}</h1>
            <p className="text-gray-500">{dict.experiences.subtitle}</p>
          </div>

          <ExperienceGrid lang={lang} />
        </div>
      </section>

      <section className="py-[100px] bg-gray-200 px-5">
        <div
          className="container m-auto flex flex-col gap-9 bg-white
          rounded-lg p-10 shadow-lg"
        >
          <h1 className="text-5xl font-bold text-center">Tech Stack</h1>

          <div className="relative w-full max-w-[400px] mx-auto">
            <Image src="/images/skillicons.svg" alt="Tech Stack image" fill className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="bg-black py-[120px]">
        <div className="container m-auto">
          <div className="flex flex-col gap-5 mb-20">
            <h1 className="text-white text-5xl">{dict.projects.title}</h1>
            <p className="text-gray-300 text-xl">{dict.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white">
            In progress ...
            {/* <ProjectCard
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
            /> */}
          </div>
        </div>
      </section>

      <footer className="bg-white p-8 flex flex-col gap-4">
        <div className="flex justify-center">
          <Link href="https://www.instagram.com/icarokiiler/" target="_blank">
            <Image
              src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
              alt="Instagram badge"
              width={120}
              height={50}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/icaro-kiiler-melo-3013ba26b/" target="_blank">
            <Image
              src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn badge"
              width={110}
              height={50}
            />
          </Link>

          <Link href="https://github.com/Dev-Icaro" target="_blank">
            <Image
              src="https://img.shields.io/badge/-Github-%23000000?style=for-the-badge&logo=github&logoColor=white"
              alt="Github badge"
              width={93}
              height={50}
            />
          </Link>
        </div>

        <div className=" text-center">© 2002 Icaro Kiiler Melo</div>
      </footer>
    </main>
  );
}
