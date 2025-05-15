import Image from 'next/image';
import { AnimatedTooltip } from "../../../components/ui/animated-tooltip"

// Type definition for Props
type Props = {
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
  };
  description: string;
  languageIcons: string[];
};

// Mapping for language names
const languageIconMap: Record<string, string> = {
  'react.svg': 'React',
  'node.svg': 'Node.js',
  'typescript.svg': 'TypeScript',
  'javascript.svg': 'JavaScript',
  'python.svg': 'Python',
};

const getLanguageName = (iconUrl: string): string => {
  const filename = iconUrl.split('/').pop() || '';
  return languageIconMap[filename] || filename.replace('.svg', '').replace('.png', '');
};

const Project = ({ thumbnail, title, link, description, languageIcons }: Props) => {
  // Transform languageIcons into AnimatedTooltip items
  const tooltipItems = languageIcons.map((icon, index) => ({
    id: index + 1,
    name: getLanguageName(icon),
    designation: '', // Not used, but required by AnimatedTooltip
    image: icon,
  }));

  return (
    <div className="card flex flex-col items-stretch w-full max-w-[450px] p-5 md:p-[18px] gap-[30px]">
      <Image
        src={thumbnail}
        alt={title}
        width={392}
        height={250}
        className="w-full h-[250px] rounded-lg object-cover"
      />
      <div className="flex flex-col gap-[11px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[18px]">{title}</h3>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-[10px] py-[3px] gap-1 bg-primary bg-opacity-[24%] rounded text-[14px]"
          >
            <span className="hidden md:block">{link.label}</span>
            <Image
              src="/link_arrow.svg"
              alt="Link arrow"
              width={16}
              height={16}
              className="block dark:hidden"
            />
            <Image
              src="/link_arrow_dark.svg"
              alt="Link arrow dark"
              width={16}
              height={16}
              className="hidden dark:block"
            />
          </a>
        </div>
        <p className="line-clamp-3 text-sm md:text-base">{description}</p>
        <div className="flex flex-row gap-[11px] w-fit p-1 rounded">
          <AnimatedTooltip items={tooltipItems} />
        </div>
      </div>
    </div>
  );
};

export default Project;