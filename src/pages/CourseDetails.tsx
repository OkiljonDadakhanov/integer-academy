import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Instructor {
  name: string;
  position: string;
  image: string;
}

interface SyllabusItem {
  week: string;
  title: string;
  topics: string[];
}

interface CourseData {
  title: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  level: string;
  duration: string;
  students: string;
  certificate: string;
  price: string;
  features: string[];
  syllabus: SyllabusItem[];
  instructors: Instructor[];
}

interface CourseDataMap {
  [key: string]: CourseData;
}

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Courses data
  const courseData: CourseDataMap = {
    "robototexnika": {
      title: "Robototexnikaga kirish",
      description: "Robototexnika asoslarini o'rganing va birinchi robotingizni yarating. Bu kurs o'quvchilarga robotlarni loyihalash, yaratish va dasturlash bo'yicha amaliy ko'nikmalarni beradi.",
      image: "/images/courses/robotics.jpg",
      icon: "Cpu",
      color: "bg-integer-blue",
      level: "Boshlang'ich",
      duration: "8 Hafta",
      students: "120+",
      certificate: "Kurs sertifikati",
      price: "1,200,000 so'm",
      features: [
        "Robot yig'ish asoslari",
        "Dasturlash asosiy tushunchalari",
        "Amaliy mashg'ulotlar",
        "Yakuniy robot loyihasi"
      ],
      syllabus: [
        {
          week: "1-hafta",
          title: "Robototexnikaga kirish",
          topics: ["Robototexnika tarixi", "Asosiy tushunchalar", "Kurs loyihasi bilan tanishish"]
        },
        {
          week: "2-3 hafta",
          title: "Robotlarning asosiy qismlari",
          topics: ["Sensorlar va motorlar", "Elektron asoslar", "Robot tuzilishi"]
        },
        {
          week: "4-5 hafta",
          title: "Dasturlash asoslari",
          topics: ["Dasturlash tushunchalari", "Algoritmlar", "Kod yozish asoslari"]
        },
        {
          week: "6-7 hafta",
          title: "Robot loyihasi ustida ishlash",
          topics: ["Funksional robot yaratish", "Muammolarni bartaraf etish", "Optimizatsiya"]
        },
        {
          week: "8-hafta",
          title: "Yakuniy loyiha taqdimoti",
          topics: ["Loyihangizni taqdim eting", "Kurs yakunlash", "Kelajak uchun imkoniyatlar"]
        }
      ],
      instructors: [
        {
          name: "Yakubova Diloromxon",
          position: "Robototexnika muhandisi",
          image: "/images/Diloromxon.jpg"
        }
      ]
    },
    "web-dasturlash": {
      title: "Web dasturlash asoslari",
      description: "HTML, CSS va JavaScript yordamida o'z web-saytingizni yarating. Bu kurs zamonaviy web-saytlarni yaratish uchun zarur bo'lgan asosiy texnologiyalarni o'rgatadi.",
      image: "/images/courses/web-dev.jpg",
      icon: "Globe",
      color: "bg-integer-purple",
      level: "Boshlang'ich",
      duration: "10 Hafta",
      students: "200+",
      certificate: "Kurs sertifikati",
      price: "1,500,000 so'm",
      features: [
        "HTML va CSS asoslari",
        "Interaktiv JavaScript elementlari",
        "Moslashuvchan dizayn prinsiplari",
        "Shaxsiy web-sayt loyihasi"
      ],
      syllabus: [
        {
          week: "1-2 hafta",
          title: "HTML asoslari",
          topics: ["HTML tuzilishi", "Teglar va atributlar", "Formalar va ro'yxatlar"]
        },
        {
          week: "3-4 hafta",
          title: "CSS bilan dizayn",
          topics: ["CSS selektorlari", "Ranglar va shriftlar", "Joylashuv va pozitsiyalash"]
        },
        {
          week: "5-7 hafta",
          title: "JavaScript asoslari",
          topics: ["O'zgaruvchilar va funksiyalar", "DOM manipulatsiyasi", "Hodisalar bilan ishlash"]
        },
        {
          week: "8-9 hafta",
          title: "Moslashuvchan dizayn",
          topics: ["Mobil qurilmalar uchun moslashish", "Media so'rovlar", "Zamonaviy dizayn usullari"]
        },
        {
          week: "10-hafta",
          title: "Yakuniy loyiha",
          topics: ["Shaxsiy portfolioning yakuniy versiyasi", "Loyiha taqdimoti", "Keyingi qadamlar"]
        }
      ],
      instructors: [
        {
          name: "Xabibulloyev Ixtiyorxon",
          position: "Full stack dasturchi",
          image: "/images/Ixtiyorxon.jpg"
        }
      ]
    },
    "python": {
      title: "Python dasturlash tili",
      description: "O'yinlar va dasturlar orqali Python dasturlash tilini o'rganing. Python dasturlash tilini o'rganish orqali siz data analysis, AI, web dasturlash kabi ko'plab sohalarda o'z faoliyatingizni boshlashingiz mumkin.",
      image: "/images/courses/python.jpg",
      icon: "Code",
      color: "bg-integer-teal",
      level: "O'rta",
      duration: "12 Hafta",
      students: "150+",
      certificate: "Kurs sertifikati",
      price: "1,800,000 so'm",
      features: [
        "Python asosiy sintaksisi",
        "O'yin yaratish asoslari",
        "Masala yechish mashqlari",
        "Maxsus dastur loyihasi"
      ],
      syllabus: [
        {
          week: "1-2 hafta",
          title: "Python ga kirish",
          topics: ["Python o'rnatish va sozlash", "O'zgaruvchilar va ma'lumot turlari", "Asosiy operatorlar"]
        },
        {
          week: "3-5 hafta",
          title: "Funksional dasturlash",
          topics: ["Funksiyalar bilan ishlash", "Ma'lumotlar tuzilmalari", "Modullar va kutubxonalar"]
        },
        {
          week: "6-8 hafta",
          title: "Amaliy loyihalar",
          topics: ["Sodda o'yinlar yaratish", "Masalalar yechish", "Kichik dasturlar yaratish"]
        },
        {
          week: "9-11 hafta",
          title: "Kengaytirilgan mavzular",
          topics: ["OOP asoslari", "Fayllar bilan ishlash", "API bilan ishlash"]
        },
        {
          week: "12-hafta",
          title: "Yakuniy loyiha",
          topics: ["Shaxsiy dastur loyihasi", "Kod tahlili va optimizatsiya", "Taqdimot va himoya"]
        }
      ],
      instructors: [
        {
          name: "Dadakhanov Akilhan",
          position: "Python dasturchi",
          image: "/images/akilhan.jpg"
        }
      ]
    },
    "ai-machine-learning": {
      title: "AI va Machine Learning",
      description: "Sun'iy intellekt va machine learning asoslarini kashf eting. Bu kurs AI va ML sohasidagi asosiy nazariy va amaliy tushunchalarni o'rgatib, ushbu texnologiyalarning zamonaviy qo'llanilish sohalarini ko'rsatadi.",
      image: "/images/courses/ai-ml.jpg",
      icon: "Lightbulb",
      color: "bg-integer-darkBlue",
      level: "Yuqori",
      duration: "14 Hafta",
      students: "80+",
      certificate: "Kurs sertifikati",
      price: "2,200,000 so'm",
      features: [
        "AI tushunchalari va qo'llanilishi",
        "Asosiy machine learning modellari",
        "Ma'lumotlarni tahlil qilish usullari",
        "AI loyiha yaratish"
      ],
      syllabus: [
        {
          week: "1-2 hafta",
          title: "AI va ML ga kirish",
          topics: ["AI tarixi va asosiy tushunchalar", "ML turlari", "Zamonaviy qo'llanilish sohalari"]
        },
        {
          week: "3-5 hafta",
          title: "Ma'lumotlar tahlili",
          topics: ["Python da ma'lumotlar tahlili", "Ma'lumotlarni vizualizatsiya qilish", "Ma'lumotlarni tozalash"]
        },
        {
          week: "6-9 hafta",
          title: "Machine Learning asoslari",
          topics: ["Nazorat qilinadigan o'rganish", "Nazoratsiz o'rganish", "Model baholash usullari"]
        },
        {
          week: "10-13 hafta",
          title: "Amaliy AI loyihalari",
          topics: ["Tavsiya tizimlari", "Tasvir tanish", "Tabiiy til bilan ishlash"]
        },
        {
          week: "14-hafta",
          title: "Yakuniy loyiha taqdimoti",
          topics: ["Shaxsiy AI loyihangizni taqdim eting", "Kurs yakunlash", "Kelajakdagi yo'nalishlar"]
        }
      ],
      instructors: [
        {
          name: "Usmanov Sardor",
          position: "AI tadqiqotchi",
          image: "/images/Sardor.jpg"
        }
      ]
    },
    "ingliz-tili": {
  title: "Academic English Mastery",
  description: "Sharqdan Gʻarbga, akademik va kasbiy maqsadlar uchun zarur boʻlgan ingliz tilini mukammal o‘zlashtiring. Ushbu kurs o‘quvchilarga grammatika, yozma nutq, tinglab tushunish va akademik yozuv kabi muhim ko‘nikmalarni chuqurlashtirishga yordam beradi.",
  image: "/images/courses/english-academic.jpg",
  icon: "BookOpenCheck",
  color: "bg-integer-deepGreen",
  level: "O'rta – Yuqori",
  duration: "12 Hafta",
  students: "100+",
  certificate: "Kursni tugatganlik sertifikati",
  price: "1,500,000 so'm",
  features: [
    "Akademik grammatikani chuqur o‘rganish",
    "Matn tuzish va esse yozish ko‘nikmalari",
    "Tinglab tushunish va nutq rivojlantirish",
    "IELTS, TOEFL kabi testlarga tayyorgarlik asoslari"
  ],
  syllabus: [
    {
      week: "1-2 hafta",
      title: "Grammatik asoslar va so‘z boyligi",
      topics: [
        "Zamonaviy grammatik tuzilmalar",
        "Akademik matnlar uchun so‘z boyligini kengaytirish",
        "Gap tuzish uslublari"
      ]
    },
    {
      week: "3-4 hafta",
      title: "Tinglab tushunish va og‘zaki nutq",
      topics: [
        "Audiodan asosiy ma’lumotni ajratib olish",
        "Ingliz tilida ravon va aniq fikr bildirish",
        "Akademik nutq turlari"
      ]
    },
    {
      week: "5-7 hafta",
      title: "Yozma nutq va esse tuzish",
      topics: [
        "Akademik esse tuzilmasi",
        "Argumentatsiya va misollar orqali dalil keltirish",
        "Yozuv uslublarining to‘g‘riligi va aniqligi"
      ]
    },
    {
      week: "8-10 hafta",
      title: "Akademik o‘qish va tahlil qilish",
      topics: [
        "Matn tuzilmasi va asosiy g‘oyani aniqlash",
        "Kontekst asosida so‘z va iboralarni tushunish",
        "Akademik maqolalar bilan ishlash"
      ]
    },
    {
      week: "11-12 hafta",
      title: "Yakuni va amaliy testlar",
      topics: [
        "Mini IELTS / TOEFL testlar",
        "Yakuniy prezentatsiya va yozma ish",
        "Baholash va individual fikr bildirish"
      ]
    }
  ],
  instructors: [
    {
      name: "Nazarova Dilnoza",
      position: "Ingliz tili bo‘yicha tajribali o‘qituvchi",
      image: "/images/Diloromxon.jpg"
    }
  ]
},

"rus-tili": {
  title: "Professional Russian Language Mastery",
  description: "Rus tilini akademik va kasbiy darajada o‘rganing. Ushbu kurs o‘quvchilarga grammatikani, nutq madaniyatini, yozma va og‘zaki muloqot ko‘nikmalarini rivojlantirish orqali rus tilida erkin fikr bildirish imkonini beradi.",
  image: "/images/courses/russian-language.jpg",
  icon: "Languages",
  color: "bg-integer-brightRed",
  level: "Boshlang‘ich – O‘rta",
  duration: "12 Hafta",
  students: "90+",
  certificate: "Rasmiy kurs sertifikati",
  price: "1,400,000 so'm",
  features: [
    "Grammatik asoslarni puxta o‘rganish",
    "Rus tilida muloqot qilish malakasi",
    "Akademik yozuv va matn tahlili",
    "Rus tili testlariga tayyorgarlik (ТРКИ)"
  ],
  syllabus: [
    {
      week: "1-2 hafta",
      title: "Kirill alifbosi va asosiy so‘zlashuv",
      topics: [
        "Rus alifbosini o‘rganish",
        "Oddiy iboralar va salomlashuv",
        "Nutq tezligini rivojlantirish"
      ]
    },
    {
      week: "3-4 hafta",
      title: "Asosiy grammatika va gap tuzish",
      topics: [
        "Ot, fe’l va sifatlarning o‘zgarishi",
        "Tushunchalarni ifodalashda gap qurilishi",
        "Fe’l zamonlari va shakllari"
      ]
    },
    {
      week: "5-7 hafta",
      title: "O‘qish va tinglab tushunish",
      topics: [
        "Oddiy hikoyalar va maqolalarni o‘qish",
        "Ruscha dialoglarni tinglash",
        "Asosiy ma’lumotni tushunish"
      ]
    },
    {
      week: "8-10 hafta",
      title: "Yozma va og‘zaki nutq",
      topics: [
        "Shaxsiy va rasmiy xatlar yozish",
        "Taqdimot qilish va fikr bildirish",
        "Kichik esse yozish"
      ]
    },
    {
      week: "11-12 hafta",
      title: "Testlar va yakuniy baholash",
      topics: [
        "Mini ТРКИ testlar",
        "Yakuniy suhbat va yozma ish",
        "Tinglovchi fikri asosida rivojlanish tavsiyalari"
      ]
    }
  ],
  instructors: [
    {
      name: "Ivanova Natalya",
      position: "Rus tili o‘qituvchisi, 10+ yillik tajriba",
      image: "/images/Diloromxon.jpg"
    }
  ]
},

"nemis-tili": {
  title: "Complete German Language Course",
  description: "Nemis tilini asosiy darajadan boshlab puxta o‘zlashtiring. Ushbu interaktiv kurs yordamida siz grammatika, so‘zlashuv, tinglab tushunish va yozma nutq bo‘yicha zarur ko‘nikmalarga ega bo‘lasiz hamda A1-A2 darajalariga tayyorlanasiz.",
  image: "/images/courses/german-language.jpg",
  icon: "Globe",
  color: "bg-integer-yellow",
  level: "Boshlang‘ich – O‘rta",
  duration: "12 Hafta",
  students: "75+",
  certificate: "Kursni tugatganlik haqida sertifikat",
  price: "1,600,000 so'm",
  features: [
    "Nemis tili grammatikasi va gap qurilishi",
    "Asosiy so‘zlashuv va muloqot ko‘nikmalari",
    "Tinglab tushunish va og‘zaki nutq rivoji",
    "Yozma nutq: maktublar va qisqa matnlar",
    "A1–A2 darajadagi Goethe yoki telc testlariga tayyorlov"
  ],
  syllabus: [
    {
      week: "1-2 hafta",
      title: "Alifbo va asosiy iboralar",
      topics: [
        "Nemischa tovushlar va talaffuz",
        "Salomlashuv, tanishish va kundalik so‘zlashuv",
        "Ot va artikllar bilan ishlash"
      ]
    },
    {
      week: "3-4 hafta",
      title: "Grammatik asoslar",
      topics: [
        "Fe’l zamonlari (hozirgi zamon – Präsens)",
        "Fe’l tartibi va otning kelishikdagi shakllari",
        "So‘z tartibi va so‘roq gaplar"
      ]
    },
    {
      week: "5-7 hafta",
      title: "Tinglash va o‘qish",
      topics: [
        "Oddiy matnlarni tushunish",
        "Dialog va suhbatlarni tinglash",
        "Axborotni ajratib olish usullari"
      ]
    },
    {
      week: "8-10 hafta",
      title: "Yozma va og‘zaki nutq",
      topics: [
        "Shaxsiy maktub yozish",
        "Kichik esselar va ko‘rsatma matnlar",
        "Nutqiy vaziyatlarda muloqot"
      ]
    },
    {
      week: "11-12 hafta",
      title: "Imtihonga tayyorgarlik va yakuniy loyiha",
      topics: [
        "Goethe A1/A2 testlariga mini sinovlar",
        "Yakuniy suhbat va yozma ish",
        "Kursni yakunlash va baholash"
      ]
    }
  ],
  instructors: [
    {
      name: "Schmidt Laura",
      position: "Nemis tili o‘qituvchisi, Goethe sertifikatiga ega",
      image: "/images/Diloromxon.jpg"
    }
  ]
},

"digital-marketing": {
  title: "Digital Marketing Fundamentals",
  description: "Raqamli marketingning asosiy tushunchalaridan tortib, real kampaniyalarni yaratishgacha bo‘lgan barcha bosqichlarni qamrab oluvchi amaliy kurs. SEO, SMM, email marketing va kontent strategiyasi orqali o‘z brendingizni yoki biznesingizni onlayn rivojlantirishni o‘rganing.",
  image: "/images/courses/digital-marketing.jpg",
  icon: "TrendingUp",
  color: "bg-integer-violet",
  level: "Boshlang‘ich – O‘rta",
  duration: "10 Hafta",
  students: "120+",
  certificate: "Raqamli Marketing Sertifikati",
  price: "1,800,000 so'm",
  features: [
    "SEO va qidiruv tizimlari bilan ishlash",
    "SMM strategiyalar va tarmoqlarda brend yuritish",
    "Email marketing va foydalanuvchilar bilan aloqani saqlash",
    "Google Ads va Facebook Ads asoslari",
    "Kreativ kontent yaratish bo‘yicha amaliy mashqlar"
  ],
  syllabus: [
    {
      week: "1-2 hafta",
      title: "Digital marketingga kirish",
      topics: [
        "Digital marketing turlari",
        "Brending va onlayn mavjudlik",
        "Kanal turlari va ularning ahamiyati"
      ]
    },
    {
      week: "3-4 hafta",
      title: "SEO va qidiruv tizimlari",
      topics: [
        "Kalit so‘zlar tahlili",
        "Sayt tuzilmasi va on-page optimizatsiya",
        "Google Search Console bilan ishlash"
      ]
    },
    {
      week: "5-6 hafta",
      title: "SMM: Ijtimoiy tarmoqlarda marketing",
      topics: [
        "Instagram, Facebook, Telegramda kontent yuritish",
        "Post rejalashtirish va dizayn asoslari",
        "SMM KPI va tahlil"
      ]
    },
    {
      week: "7-8 hafta",
      title: "Reklama kampaniyalari",
      topics: [
        "Google Ads asoslari",
        "Facebook/Instagram Ads yaratilishi",
        "A/B testing va reklama natijalarini o‘lchash"
      ]
    },
    {
      week: "9-10 hafta",
      title: "Email marketing va yakuniy loyiha",
      topics: [
        "Email kampaniyalar rejalashtirish",
        "Mailchimp bilan ishlash asoslari",
        "Yakuniy loyiha: Shaxsiy marketing strategiyangizni taqdim eting"
      ]
    }
  ],
  instructors: [
    {
      name: "Karimov Alisher",
      position: "Digital marketing mutaxassisi, 7+ yillik tajriba",
      image: "/images/akilhan.jpg"
    }
  ]
}


  };


  // Get the course data based on the ID
  const course = id ? courseData[id] : null;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Handle case where course isn't found
  if (!course && id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Kurs topilmadi</p>
      </div>
    );
  }

  // If no ID provided yet, show error
  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Kurs identifikatori yo'q</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Back button */}
          <div className="mb-8" data-aos="fade-right">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-integer-blue"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Orqaga qaytish
            </Button>
          </div>

          {/* Course header */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10" data-aos="fade-up">
            <div className={`${course.color} h-3 w-full`}></div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              {/* Course meta info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-integer-blue" />
                  <span className="text-sm">{course.level}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-integer-blue" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-integer-blue" />
                  <span className="text-sm">{course.students} o'quvchi</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-integer-blue" />
                  <span className="text-sm">{course.certificate}</span>
                </div>
              </div>
              
              {/* Price and registration button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-8 border-t pt-6">
                <div className="mb-4 sm:mb-0">
                  <span className="text-sm text-gray-500">Kurs narxi</span>
                  <p className="text-2xl font-bold text-integer-blue">{course.price}</p>
                </div>
                <Link to='/register'>
                <Button className="bg-integer-blue hover:bg-integer-darkBlue">
                  Kursga yozilish
                </Button>
                </Link>
                
              </div>
            </div>
          </div>
          
          {/* Course content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* What you'll learn section */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-2xl font-bold mb-6">Kursda nimalarni o'rganasiz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Syllabus */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl font-bold mb-6">Kurs dasturi</h2>
                <div className="space-y-6">
                  {course.syllabus.map((item, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-lg p-4 hover:border-integer-blue transition-colors"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold">{item.title}</h3>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">{item.week}</span>
                      </div>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {item.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-integer-blue mt-1.5 mr-2"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Instructors */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-xl font-bold mb-4">O'qituvchilar</h2>
                <div className="space-y-4">
                  {course.instructors.map((instructor, index) => (
                    <div key={index} className="flex items-center">
                      <img 
                        src={instructor.image} 
                        alt={instructor.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{instructor.name}</h3>
                        <p className="text-sm text-gray-600">{instructor.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Related courses */}
              <div className="bg-white rounded-xl shadow-md p-6" data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-xl font-bold mb-4">Tavsiya qilingan kurslar</h2>
                <p className="text-gray-600 mb-4">Ushbu kursni tugatgandan so'ng quyidagi kurslarni o'rganishingiz mumkin</p>
                <Button variant="outline" className="w-full" onClick={() => navigate('/courses')}>
                  Barcha kurslarni ko'rish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetails;