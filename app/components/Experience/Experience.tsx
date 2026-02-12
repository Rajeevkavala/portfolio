import Image from 'next/image';
import React from 'react';

type Props = {
  logo: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
};

const Experience = ({ logo, company, role, duration, description }: Props) => {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-[758px] p-5 md:p-[18px] gap-[30px] bg-background-secondary rounded-lg shadow-lg">
      <div className="flex items-center gap-4">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-full object-contain"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-xl md:text-[18px]">{company}</h3>
          <p className="text-sm md:text-base text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[11px]">
        <p className="text-sm md:text-base text-muted-foreground">{duration}</p>
        <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-muted-foreground">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <a href="https://drive.google.com/file/d/1c_yIutHNSBou-UQ2EVqvwqq_Ma3nzZRV/view?usp=sharing" target='_blank'>
          📄 [View Certificate]
        </a>
      </div>
    </div>
  );
};

export default Experience;
