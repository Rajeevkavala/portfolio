import Image from 'next/image';
import React from 'react';

type Props = {
  icon: string;
  name: string;
};

const Skill = ({ icon, name }: Props) => {
  return (
    <div
      className="
        flex
        cursor-pointer
        items-center
        gap-2
        p-2
        sm:p-3
        border
        apply-primary
        rounded-lg
        back
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        hover:border-primary
        hover:ring-2
        hover:ring-primary/50
        focus:shadow-lg
        focus:-translate-y-1
        focus:border-primary
        focus:ring-2
        focus:ring-primary/50
        transition-all
        duration-200
        ease-out
        w-full
        sm:w-auto
        min-w-[120px]
        max-w-[180px]
        pointer-events-auto
      "
    >
      <Image
        src={icon}
        alt={`${name} icon`}
        width={32}
        height={32}
        className="w-6 h-6 sm:w-8 sm:h-8 object-contain dark:invert"
      />
      <p className="text-base sm:text-lg font-medium back">{name}</p>
    </div>
  );
};

export default Skill;