import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopOnRoute } from "@/components/ScrollToTopOnRoute"; // Add this import
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import BookService from "@/pages/BookService";
import FAQs from "@/pages/FAQs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/book-service" component={BookService} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollToTopOnRoute /> {/* Add this component here */}
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;