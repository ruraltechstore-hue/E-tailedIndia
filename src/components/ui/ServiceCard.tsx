import { LucideIcon } from 'lucide-react';
import Card, { CardBody } from './Card';
import Button from './Button';

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  color?: string;
  onClick?: () => void;
}

export default function ServiceCard({
  icon: Icon,
  name,
  description,
  color = '#0052cc',
  onClick
}: ServiceCardProps) {
  return (
    <Card hover className="h-full">
      <CardBody className="flex flex-col items-center text-center space-y-4 py-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-8 h-8" style={{ color }} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">{name}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
        <Button variant="outline" size="sm" onClick={onClick} className="w-full mt-auto">
          Apply Now
        </Button>
      </CardBody>
    </Card>
  );
}
