import React, { useState, useEffect } from 'react';
import { Filter, Search, Book, Cpu, Globe, Code, Lightbulb, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Course {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  level: string;
  duration: string;
  category: string;
  features: string[];
}

interface Category {
  id: string;
  name: string;
}

interface Level {
  id: string;
  name: string;
}

const CoursesPage: React.FC = () => {
  // State for filtered courses
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  // All available courses data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allCourses: Course[] = [
    {
      title: "Robototexnikaga kirish",
      description: "Robototexnika asoslarini o'rganing va birinchi robotingizni yarating",
      icon: <Cpu className="h-5 w-5 text-integer-blue" />,
      color: "bg-integer-blue",
      level: "Boshlang'ich",
      duration: "8 Hafta",
      category: "engineering",
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
      category: "programming",
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
      category: "programming",
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
      category: "data-science",
      features: [
        "AI tushunchalari va qo'llanilishi",
        "Asosiy machine learning modellari",
        "Ma'lumotlarni tahlil qilish usullari",
        "AI loyiha yaratish"
      ]
    },
    {
      title: "Ingliz tili",
      description: "General English va IELTS imtihoni uchun tayyorgarlik kursi",
      icon: <Book className="h-5 w-5 text-pink-500" />,
      color: "bg-pink-500",
      level: "Boshlang'ich-Yuqori",
      duration: "12 Hafta",
      category: "language",
      features: [
        "Og'zaki muloqot ko'nikmalari",
        "Grammatika va so'z boyligi",
        "IELTS imtihoni taktikalari",
        "Amaliy mashg'ulotlar"
      ]
    },
    {
      title: "Rus tili",
      description: "Boshlang'ich rus tili kursi amaliy mashg'ulotlar bilan",
      icon: <Book className="h-5 w-5 text-red-500" />,
      color: "bg-red-500",
      level: "Boshlang'ich",
      duration: "10 Hafta",
      category: "language",
      features: [
        "Alifbo va talaffuz",
        "Kundalik so'zlashuv iboralari",
        "Grammatika asoslari",
        "O'qish va yozish ko'nikmalari"
      ]
    },
    {
      title: "Nemis tili",
      description: "Nemis tili asoslarini o'rganish va kundalik muloqot qilish",
      icon: <Book className="h-5 w-5 text-yellow-500" />,
      color: "bg-yellow-500",
      level: "Boshlang'ich",
      duration: "12 Hafta",
      category: "language",
      features: [
        "Asosiy grammatika va lug'at",
        "Kundalik muloqot iboralari",
        "Madaniyat va an'analar",
        "Amaliy mashg'ulotlar"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Zamonaviy digital marketing usullarini o'rganing",
      icon: <Briefcase className="h-5 w-5 text-indigo-500" />,
      color: "bg-indigo-500",
      level: "O'rta",
      duration: "8 Hafta",
      category: "business",
      features: [
        "Social media marketing",
        "SEO va SEM asoslari",
        "Content marketing",
        "Marketing strategiyalari"
      ]
    }
  ];

  // Categories
  const categories: Category[] = [
    { id: 'all', name: 'Barcha kurslar' },
    { id: 'programming', name: 'Dasturlash' },
    { id: 'engineering', name: 'Muhandislik' },
    { id: 'language', name: 'Tillar' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'business', name: 'Biznes' }
  ];

  // Levels
  const levels: Level[] = [
    { id: 'all', name: 'Barcha darajalar' },
    { id: 'Boshlang\'ich', name: 'Boshlang\'ich' },
    { id: 'O\'rta', name: 'O\'rta' },
    { id: 'Yuqori', name: 'Yuqori' }
  ];

  // Filter courses based on search, category, and level
  useEffect(() => {
    let result = [...allCourses];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Apply level filter
    if (selectedLevel !== 'all') {
      result = result.filter(course => course.level.includes(selectedLevel));
    }
    
    setFilteredCourses(result);
  }, [allCourses, searchTerm, selectedCategory, selectedLevel]);

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    
    // Initialize with all courses
    setFilteredCourses(allCourses);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Page header */}
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h1 className="text-3xl font-bold mb-4">Integer Academy barcha kurslari</h1>
            <p className="text-gray-600">
              Zamonaviy kasblarga tayyorlanish uchun ishlab chiqilgan kurslarimizdan birini tanlang va o'z karyerangizni boshlang
            </p>
          </div>
          
          {/* Search and filter section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-10" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search box */}
              <div className="relative w-full md:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Kurs qidirish..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-integer-blue focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-2/3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-500">Filtrlash:</span>
                </div>
                
                {/* Category filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-integer-blue focus:border-transparent flex-1"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                
                {/* Level filter */}
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-integer-blue focus:border-transparent flex-1"
                >
                  {levels.map(level => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Courses grid */}
          <div className="mb-8">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <CourseCard 
                    key={index} 
                    {...course} 
                    data-aos="fade-up"
                    data-aos-delay={100 + (index % 3) * 100}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm" data-aos="fade-up">
                <p className="text-lg text-gray-600">Kurslar topilmadi. Boshqa parametrlar bilan qidirishni sinab ko'ring.</p>
              </div>
            )}
          </div>
          
          {/* Course request section */}
          <div className="bg-integer-blue bg-opacity-10 rounded-xl p-8 text-center" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-2">O'zingizga kerakli kursni topa olmadingizmi?</h2>
            <p className="text-gray-600 mb-6">Bizga kurs bo'yicha taklifingizni yuboring va biz uni keyingi o'quv dasturlarimizga qo'shamiz</p>
            <Button className="bg-integer-blue hover:bg-integer-darkBlue">
              Kurs taklif qilish
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesPage;