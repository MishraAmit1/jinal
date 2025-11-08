import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkTo?: string;
  onQuote?: () => void;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  linkTo,
  onQuote,
}: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 h-full flex flex-col">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-bold text-xl" data-testid={`text-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
      <CardFooter className="pt-4">
        {linkTo ? (
          <Link href={linkTo} className="w-full">
            <a className="w-full">
              <Button
                variant="outline"
                className="w-full"
                data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Learn More
              </Button>
            </a>
          </Link>
        ) : (
          <Button
            onClick={onQuote}
            className="w-full bg-cta text-cta-foreground hover:bg-cta border-cta-border"
            data-testid={`button-quote-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Get a Quote
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
