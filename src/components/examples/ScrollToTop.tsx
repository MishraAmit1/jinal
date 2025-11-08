import { ScrollToTop } from '../ScrollToTop';

export default function ScrollToTopExample() {
  return (
    <div className="h-[2000px] relative">
      <div className="sticky top-0 bg-background p-4 border-b">
        Scroll down to see the button appear after 300px
      </div>
      <ScrollToTop />
    </div>
  );
}
