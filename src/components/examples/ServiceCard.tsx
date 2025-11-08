import { ServiceCard } from '../ServiceCard';
import { Wrench } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        icon={Wrench}
        title="General Maintenance"
        description="Regular servicing and inspections to keep your vehicle running smoothly and safely."
        onQuote={() => console.log('Get quote clicked')}
      />
    </div>
  );
}
