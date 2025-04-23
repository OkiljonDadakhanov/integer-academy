
import { ChevronRight, Code, Cpu, Globe, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseCard from './CourseCard';

const CourseSection = () => {
  const courses = [
    {
      title: "Robototexnikaga kirish",
      description: "Robototexnika asoslarini o'rganing va birinchi robotingizni yarating",
      icon: <Cpu className="h-5 w-5 text-integer-blue" />,
      color: "bg-integer-blue",
      level: "Boshlang'ich",
      duration: "8 Hafta",
      features: [
        "Robot yig'ish asoslari",
        "Dasturlash asosiy tushunchalari",
        "Amaliy mashg'ulotlar",
        "Yakuniy robot loyihasi"
      ]
    },
    {
      title: "Web dasturlash asoslari",
      description: "HTML, CSS va JavaScript yordamida o'z web-saytingizni yarating",
      icon: <Globe className="h-5 w-5 text-integer-purple" />,
      color: "bg-integer-purple",
      level: "Boshlang'ich",
      duration: "10 Hafta",
      features: [
        "HTML va CSS asoslari",
        "Interaktiv JavaScript elementlari",
        "Moslashuvchan dizayn prinsiplari",
        "Shaxsiy web-sayt loyihasi"
      ]
    },
    {
      title: "Python dasturlash tili",
      description: "O'yinlar va dasturlar orqali Python dasturlash tilini o'rganing",
      icon: <Code className="h-5 w-5 text-integer-teal" />,
      color: "bg-integer-teal",
      level: "O'rta",
      duration: "12 Hafta",
      features: [
        "Python asosiy sintaksisi",
        "O'yin yaratish asoslari",
        "Masala yechish mashqlari",
        "Maxsus dastur loyihasi"
      ]
    },
    {
      title: "AI va Machine Learning",
      description: "Sun'iy intellekt va machine learning asoslarini kashf eting",
      icon: <Lightbulb className="h-5 w-5 text-integer-darkBlue" />,
      color: "bg-integer-darkBlue",
      level: "Yuqori",
      duration: "14 Hafta",
      features: [
        "AI tushunchalari va qo'llanilishi",
        "Asosiy machine learning modellari",
        "Ma'lumotlarni tahlil qilish usullari",
        "AI loyiha yaratish"
      ]
    }
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Bizning mashhur kurslarimiz</h2>
          <p className="section-subtitle">
            O'zbekistonda kelajak avlod texnologiya innovatorlarini ilhomlantirish uchun yaratilgan amaliy o'quv dasturlarimiz bilan tanishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="button-hover-effect">
            Barcha kurslarni ko'rish <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
