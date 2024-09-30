import ExperienceCard from '@/app/[lang]/_components/experience-card';
import { Book, Zap, MonitorCheck, CodeXml } from 'lucide-react';
import { Locale } from '@/../i18n-config';
import { getDictionary } from '@/lib/dictionaries';

interface ExperienceGridProps {
  lang: Locale;
}

const ExperienceGrid = async ({ lang }: ExperienceGridProps) => {
  const dict = await getDictionary(lang);

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <ExperienceCard
        icon={<Book />}
        title={dict.projects.cards[0].title}
        description={dict.projects.cards[0].description}
        url="https://www.impacta.edu.br/?https://www.impacta.edu.br/&utm_source=&utm_medium=&utm_campaign=&utm_content=&gad_source=1&gclid=Cj0KCQjwmOm3BhC8ARIsAOSbapWz72aQ47iB1VRo5VGbiUaM3axr-6I_5g7XkiUwYhATVNnUkLCjQIIaAq5IEALw_wcB"
        buttonText={dict.projects.buttonText}
      />
      <ExperienceCard
        icon={<Zap />}
        title={dict.projects.cards[1].title}
        description={dict.projects.cards[1].description}
        url="https://buscasys.com.br/"
        buttonText={dict.projects.buttonText}
      />
      <ExperienceCard
        icon={<CodeXml />}
        title={dict.projects.cards[2].title}
        description={dict.projects.cards[2].description}
        url="https://github.com/Dev-Icaro"
        buttonText={dict.projects.buttonText}
      />
      <ExperienceCard
        icon={<MonitorCheck />}
        title={dict.projects.cards[3].title}
        description={dict.projects.cards[3].description}
        url="http://www.s1informatica.com.br/"
        buttonText={dict.projects.buttonText}
      />
    </div>
  );
};

export default ExperienceGrid;
