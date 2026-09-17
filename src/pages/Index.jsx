import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { InternationalSection } from "@/components/home/InternationalSection";
import { NewsSection } from "@/components/home/NewsSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AboutPreview } from "@/components/home/AboutPreview";
import { VisionMissionSection } from "@/components/home/VisionMissionSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ContactCTA } from "@/components/home/ContactCTA";

const hospitalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  "name": "Venus Hospital (Pvt) Ltd",
  "alternateName": "Venus Hospital Avissawella",
  "url": "https://venushospital.lk",
  "logo": "https://venushospital.lk/venus-hospital-logo.png",
  "image": "https://venushospital.lk/venus-hospital-logo.png",
  "telephone": "+94362222096",
  "email": "Venusprivatehospital@gmail.com",
  "foundingDate": "2014",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "55A Colombo Road",
    "addressLocality": "Avissawella",
    "addressRegion": "Sabaragamuwa",
    "addressCountry": "LK",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.9539118,
    "longitude": 80.2097051,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "06:00",
      "closes": "22:00",
    },
  ],
  "medicalSpecialty": [
    "Ophthalmology",
    "GeneralPractice",
    "Dentistry",
    "Dermatology",
    "Audiology",
    "Surgery",
    "Diagnostics",
  ],
  "availableService": [
    { "@type": "MedicalProcedure", "name": "OPD Services" },
    { "@type": "MedicalProcedure", "name": "Eye Care & Optical Services" },
    { "@type": "MedicalProcedure", "name": "Operation Theatre" },
    { "@type": "MedicalProcedure", "name": "Laboratory Services" },
    { "@type": "MedicalProcedure", "name": "Diagnostic Services" },
    { "@type": "MedicalProcedure", "name": "Dental Care" },
    { "@type": "MedicalProcedure", "name": "Hearing Unit" },
    { "@type": "MedicalProcedure", "name": "Skin Clinic" },
    { "@type": "MedicalProcedure", "name": "Pharmacy" },
  ],
  "priceRange": "$$",
  "sameAs": [],
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Venus Hospital Avissawella | 24/7 OPD, Eye Care & Medical Services"
        description="Venus Hospital (Pvt) Ltd – trusted healthcare in Avissawella since 2014. 24/7 OPD, eye care, surgery, laboratory, dental & more. Book an appointment today."
        canonical="/"
        jsonLd={hospitalJsonLd}
      />
      <HeroSection />
      <WelcomeSection />
      <InternationalSection />
      <NewsSection />
      {/* <ServicesGrid /> */}
      {/* <AboutPreview /> */}
      {/* <VisionMissionSection /> */}
      <TrustSection />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
