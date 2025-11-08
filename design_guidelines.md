# Design Guidelines for Jinal Auto Garage Website

## Design Approach
**Reference-Based Approach**: Modern automotive service website combining professional service provider aesthetics (clean, trustworthy) with conversion-focused design patterns from leading booking platforms.

## Brand Identity

### Logo Usage
- Official logo: Blue truck with wrench + "JINAL AUTO GARAGE" text
- Placement: Top-left in header, footer center, favicon
- Always maintain aspect ratio on white backgrounds
- Mobile: Scale appropriately, add subtle hover effect (link to home)

### Color System
```
Primary Blue: #0F5B99 (Headers, Footer, Brand elements)
Background White: #FFFFFF (Main backgrounds)
Text Dark: #2C3E50 (Body text)

CTA Orange: #E67E22 (Primary buttons, CTAs)
CTA Hover: #D35400 (Button hover states)
Link Blue: #0F5B99 (Text links)
Section Gray: #F8F9FA (Alternate section backgrounds)

Light Gray: #ECF0F1 (Borders, subtle backgrounds)
Dark Gray: #7F8C8D (Secondary text)
Success Green: #27AE60 (Success messages)
Error Red: #E74C3C (Error states)
```

## Typography
- Headers: Bold, clean sans-serif (Inter/Open Sans)
- Body: Regular weight, 16px base, 1.6 line-height
- H1: 48px desktop, 32px mobile
- H2: 36px desktop, 28px mobile
- H3: 24px desktop, 20px mobile

## Layout System
- Spacing: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, py-12, etc.)
- Container: max-w-7xl with px-4 on mobile
- Grid: 3 columns desktop, 2 tablet, 1 mobile for service cards
- Section padding: py-16 desktop, py-12 mobile

## Page-Specific Designs

### Home Page (Hero-Driven)
**Hero Section**: Full-width automotive garage background image with overlay
- Headline: Large, bold white text "Your Trusted Auto Care Partner in Valsad"
- Subheading: Regular weight below
- Two CTAs side-by-side: Orange "Book Service Now" + Blue outline "Call Us"
- Buttons on blurred background panels for readability
- Height: 80vh desktop, 60vh mobile

**Services Overview**: 6-card grid (icons from Lucide React)
- White cards with subtle shadow, hover lift effect
- Icon (blue), Title (H3), 2-line description, "Learn More" link

**Why Choose Us**: 4 stat cards in row
- Large number (orange), icon, short label
- Examples: "500+ Happy Customers", "Certified Mechanics"

**Testimonials**: 3 customer reviews with circular photos
- 5-star ratings (orange stars), quote text, customer name/photo
- Carousel on mobile with dots navigation

**Contact + Map**: Split layout (50/50 desktop, stacked mobile)
- Google Maps embed on left, contact cards on right

### Services Page
- 10 service cards in masonry/grid layout
- Each card: Icon (blue circle background), H3 title, 3-sentence description, orange "Get a Quote" button
- Services: General Maintenance, Engine Diagnostics, Oil Change, Brakes, Tires, AC, Battery, Suspension, Transmission, Denting/Painting

### Gallery Page
- Masonry grid (3 cols desktop, 2 tablet, 1 mobile)
- 28+ images total: Workshop exterior/interior, mechanics at work, before/after repairs, happy customers, equipment
- Lightbox modal on click (full-screen view with close button)
- Categories filter tabs at top (optional)

### Book Service Page
- Centered form (max-w-2xl)
- Two-column layout on desktop, single column mobile
- Form fields: Name, Phone, Email, Vehicle Make (dropdown), Model, Registration, Service Type (dropdown), Date picker, Time picker, Notes (textarea)
- Large orange "Book Appointment" button (full-width mobile)
- Success banner appears after submission (green background)

### FAQ Page
- Accordion layout: Question header (clickable, blue text), expand icon
- 10-12 questions in single column
- Open state: White background, answer text expands below

### Contact Page
- Three sections vertically stacked
- Contact form (2 columns: Name/Email, Phone/Message)
- Info cards row (Address, Phone, Email, Hours) - icon + text
- Full-width Google Maps embed at bottom

## Navigation & Layout Components

### Header (Sticky)
- White background, shadow on scroll
- Logo left, nav links center/right
- Mobile: Hamburger menu (blue), slide-in drawer
- Orange "Call Now" button (always visible on mobile top-right)

### Footer (Dark Blue Background)
- 4 columns desktop (Logo + tagline, Quick Links, Services, Contact)
- 2 columns tablet, 1 column mobile
- White text, orange hover on links
- Bottom bar: Copyright text, social icons

## Special Features
- **Floating WhatsApp Button**: Green circle, bottom-right, WhatsApp icon, "Chat with us" tooltip on hover
- **Scroll-to-Top Button**: Blue circle with up arrow, appears after 300px scroll
- **Loading Animations**: Fade-in for sections, slide-up for cards (subtle, 0.3s duration)
- **Micro-interactions**: Card hover (shadow increase + 2px lift), button hover (darken + scale 1.02), form field focus (blue border)

## Mobile Optimization
- Touch targets: Minimum 44x44px
- Phone numbers: Click-to-call links
- Maps: Tap-to-open in Google Maps app
- Form inputs: Large, easy to tap
- Navigation: Full-screen slide-in menu

## Images
**Hero Image**: Automotive garage workshop with cars being serviced, bright lighting, professional setting
**About Page**: Garage exterior photo, team photo grid (placeholder circular images)
**Gallery**: High-quality automotive images from Unsplash (cars, mechanics, tools, workshop)
**Services**: Icon-based (no images in cards)

## Component Specifications
- Buttons: Rounded corners (rounded-lg), padding px-6 py-3, bold text
- Cards: White background, shadow-md, rounded-xl, hover shadow-lg
- Form inputs: Border gray, rounded-md, focus blue ring
- Icons: 24px standard size, 48px for feature sections