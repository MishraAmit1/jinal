import { TestimonialCard } from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-md">
      <TestimonialCard
        name="Rajesh Kumar"
        rating={5}
        text="Excellent service! The team at Jinal Auto Garage is professional and honest. They fixed my car quickly and at a fair price."
      />
    </div>
  );
}
