
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  level: string;
  duration: string;
  features: string[];
}

const CourseCard = ({ title, description, icon, color, level, duration, features }: CourseCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
      <div className={`h-2 ${color}`}></div>
      <CardHeader>
        <div className={`mb-3 inline-flex p-3 rounded-lg ${color.replace('bg-', 'bg-') + '/20'}`}>
          {icon}
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary">{level}</Badge>
          <Badge variant="outline">{duration}</Badge>
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full button-hover-effect">Batafsil</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
