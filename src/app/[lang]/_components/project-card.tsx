import { MoveRight } from 'lucide-react';
import { Button } from './button';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-8 p-5 border rounded-lg">
      <h1 className="text-white font-bold">{title}</h1>
      <p className="text-gray-300">{description}</p>
      <Button asChild variant="link" className="text-gray-300 gap-2 ml-auto">
        <Link href={link}>
          Repository <MoveRight />
        </Link>
      </Button>
    </div>
  );
};

export default ProjectCard;
