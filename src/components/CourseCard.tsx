import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  level: string;
  duration: string;
  features: string[];
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  icon,
  color,
  level,
  duration,
  features
}) => {
  // Function to convert title to URL-friendly slug
  const getSlug = (title: string): string => {
    const slugMap: Record<string, string> = {
      "Robototexnikaga kirish": "robototexnika",
      "Web dasturlash asoslari": "web-dasturlash",
      "Python dasturlash tili": "python",
      "AI va Machine Learning": "ai-machine-learning"
    };
    
    return slugMap[title] || title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      data-aos="fade-up"
    >
      {/* Colored top bar */}
      <div className={`h-2 ${color}`}></div>
      
      <div className="p-6">
        {/* Course header */}
        <div className="flex items-start mb-4">
          <div className={`p-2 rounded-lg ${color} bg-opacity-10 mr-4`}>
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        
        {/* Course metadata */}
        <div className="flex items-center mb-4 text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{level}</span>
          </div>
        </div>
        
        {/* Course features */}
        <ul className="mb-6">
          {features.slice(0, 2).map((feature, index) => (
            <li key={index} className="flex items-center text-sm py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center pt-4 border-t">
          <Button 
            variant="ghost" 
            className="text-sm px-3 py-1 hover:text-integer-blue"
          >
            <Link to={`/courses/${getSlug(title)}`}>
              Batafsil
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="text-sm px-3 py-1"
          >
            <Link to={`/courses/${getSlug(title)}`}>
              Ro'yxatdan o'tish
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;