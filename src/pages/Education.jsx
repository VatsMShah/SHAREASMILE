import EducationHero from '@/components/education/EducationHero';
import EducationTransforming from '@/components/education/EducationTransforming';
import EducationInfrastructure from '@/components/education/EducationInfrastructure';
import EducationEnrichment from '@/components/education/EducationEnrichment';
import EducationGallery from '@/components/education/EducationGallery';
import EducationTeachers from '@/components/education/EducationTeachers';
import EducationHostel from '@/components/education/EducationHostel';
import EducationSponsorAndCta from '@/components/education/EducationSponsorAndCta';

export default function Education() {
  return (
    <div className="education-page">
      {/* 1. Standard Compact Inner Hero */}
      <EducationHero />

      {/* 2. Transforming Education in Rural India + Overlapping Campus Collage */}
      <EducationTransforming />

      {/* 3. A Learning Environment Designed for Growth: 8 Infrastructure Cards */}
      <EducationInfrastructure />

      {/* 4. Beyond the Classroom: Flagship Fairs + Growth Opportunities */}
      <EducationEnrichment />

      {/* 5. Celebrating Culture & Student Life: Option 2 Dual-Row Kinetic Filmstrip + Lightbox */}
      <EducationGallery />

      {/* 6. Empowering Educators: 3 Structured Development Tracks */}
      <EducationTeachers />

      {/* 7. Building Dreams: Sudhagad Taluka Girls' Hostel Project */}
      <EducationHostel />

      {/* 8. Child Sponsorship Spotlight ($21/mo & $250/yr) + Contained Closing Banner */}
      <EducationSponsorAndCta />
    </div>
  );
}
