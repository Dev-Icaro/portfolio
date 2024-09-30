import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
  buttonText: string;
}

const ExperienceCard = ({ icon, title, description, url, buttonText }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-6 group">
      <div className="relative ">
        <div className="z-10 size-16 absolute bg-black w-fit p-5 rounded-lg text-white">{icon}</div>
        <div className="relative bg-gray-500 size-16 rounded-xl rotate-45 group-hover:rotate-12 transition-all" />
      </div>

      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-slate-500">{description}</p>
      <Link href={url} target="_blank">
        <Button className="w-fit text-md">{buttonText}</Button>
      </Link>
    </div>
  );
};

export default ExperienceCard;
