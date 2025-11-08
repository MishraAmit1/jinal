import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  image?: string;
  rating: number;
  text: string;
}

export function TestimonialCard({ name, image, rating, text }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold" data-testid={`text-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {name}
            </p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating
                      ? "fill-[#E67E22] text-[#E67E22]"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground italic">&ldquo;{text}&rdquo;</p>
      </CardContent>
    </Card>
  );
}
