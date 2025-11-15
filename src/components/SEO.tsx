import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
}

export function SEO({
    title = "Jinal Auto Garage - Best Car Service Center in Vapi",
    description = "Expert auto repairs and maintenance services in Vapi, Gujarat. Certified mechanics, honest service, and affordable prices. Book your service today!",
    keywords = "car service Vapi, auto repair Vapi, car garage Vapi, vehicle maintenance Vapi",
    canonical = "https://jinalgarage.com/",
    ogImage = "https://jinalgarage.com/og-image.jpg",
    ogType = "website"
}: SEOProps) {
    const fullTitle = title.includes('Jinal Auto Garage')
        ? title
        : `${title} | Jinal Auto Garage`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
        </Helmet>
    );
}