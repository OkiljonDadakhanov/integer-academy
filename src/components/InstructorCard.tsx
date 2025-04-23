
import { Github, LinkedinIcon, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';

interface InstructorCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  links?: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

const InstructorCard = ({ name, role, bio, image, links = {} }: InstructorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold">{name}</h3>
        <CardDescription className="font-medium text-integer-blue">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
      {(links.linkedin || links.github || links.website) && (
        <CardFooter className="flex gap-3">
          {links.linkedin && (
            <a 
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-integer-blue transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          )}
          {links.github && (
            <a 
              href={links.github}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-integer-blue transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {links.website && (
            <a 
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-integer-blue transition-colors"
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default InstructorCard;
