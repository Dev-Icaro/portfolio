import { Button } from './button';

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onButtonClick: () => void;
}

const ExperienceCard = ({ icon, title, description, onButtonClick }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-black w-fit p-5 rounded-lg text-white">{icon}</div>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-slate-500">{description}</p>
      <Button onClick={onButtonClick} className="w-fit text-md">
        More
      </Button>
    </div>
  );
};

export default ExperienceCard;
