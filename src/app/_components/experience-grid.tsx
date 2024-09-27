'use client';

import ExperienceCard from '@/components/ui/experience-card';
import { MoveRight } from 'lucide-react';

const ExperienceGrid = () => {
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <ExperienceCard
        icon={<MoveRight />}
        title="University"
        description="Computer Engineering at the University of Vale do Paraíba. Currently studying Computer Science at the University Anhembi Morumbi."
        onButtonClick={() => console.log('University')}
      />
      <ExperienceCard
        icon={<MoveRight />}
        title="University"
        description="Computer Engineering at the University of Vale do Paraíba. Currently studying Computer Science at the University Anhembi Morumbi."
        onButtonClick={() => console.log('University')}
      />
      <ExperienceCard
        icon={<MoveRight />}
        title="University"
        description="Computer Engineering at the University of Vale do Paraíba. Currently studying Computer Science at the University Anhembi Morumbi."
        onButtonClick={() => console.log('University')}
      />
      <ExperienceCard
        icon={<MoveRight />}
        title="University"
        description="Computer Engineering at the University of Vale do Paraíba. Currently studying Computer Science at the University Anhembi Morumbi."
        onButtonClick={() => console.log('University')}
      />
    </div>
  );
};

export default ExperienceGrid;
