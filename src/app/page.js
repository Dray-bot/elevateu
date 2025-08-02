
import HeroSection from '@/components/HeroSection';
import CoursesPreviewSection from '@/components/CoursesPreviewSection';
import WhyElevateUSection from '@/components/WhyElevateUSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className='overflow-hidden'>
      <HeroSection />
      <CoursesPreviewSection />
      <WhyElevateUSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
