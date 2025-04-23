
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseSection from "@/components/CourseSection";
import InstructorSection from "@/components/InstructorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CourseSection />
        <InstructorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
