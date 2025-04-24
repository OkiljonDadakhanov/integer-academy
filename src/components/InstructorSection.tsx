import InstructorCard from './InstructorCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const InstructorSection = () => {
  const instructors = [
    {
      name: "Xabibulloyev Ixtiyorxon",
      role: "Java dasturlash kursi mentori",
      bio: "2+ yillik tajribaga ega Java dasturlash mentori. U Java asoslari va OOP konsepsiyalarini tushunarli va tizimli tarzda o'rgatadi.",
      image: "/images/Ixtiyorxon.jpg",
      links: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Abduqahhorov Abduqahhor",
      role: "Mobil dasturlash kursi mentori",
      bio: "Abduqahhor mobil ilovalar yaratish, foydalanuvchi interfeysi dizayni va platformalarga moslashtirilgan dasturlash bo'yicha chuqur bilim va amaliy tajriba bilan bo'lishadi.",
      image: "/images/Abduqahhor.jpg",
      links: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Yakubova Diloromxon",
      role: "Robototexnika va IT o'qituvchisi",
      bio: "O'quvchilardan IT hamda Robototexnika birgalikda qiziqarli va pedagogik jihatdan interfaol metodikalar orqali o'rgatuvchi mutahasis.",
      image: "/images/Diloromxon.jpg",
      links: {
        github: "https://github.com/Diloromxon27",
        linkedin: "https://uz.linkedin.com/in/diloromxon-yakubova-0670052b4"
      }
    },
    {
      name: "Isroilov Mavlonbek",
      role: " .NET dasturlash kursi mentori",
      bio: "Mavlonbek .NET dasturlash kursi mentori bo'lib, u o'quvchilarga C#, ASP.NET va .NET platformasida zamonaviy veb-ilovalar yaratish bo'yicha nazariy va amaliy bilimlarni yetkazadi.",
      image: "/images/mavlonbek.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/mavlonbekisroilov/",
        github: "https://github.com/mavlonbekcoding"
      }
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <section id="instructors" className="py-16 overflow-x-hidden">
      <div className="px-4 mx-auto max-w-7xl">
        <div data-aos="fade-down"
     className="w-full">
          <div className="text-center max-w-3xl mx-auto mb-12 px-4">
            <h2 className="section-title">Bizning o'qituvchilarimiz</h2>
            <p className="section-subtitle">
              O'zbekistonda kelajak avlod innovatorlarini ilhomlantirishga bag'ishlangan ishtiyoqli o'qituvchilar va texnologiya ekspertlari jamoamiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-4">
            {instructors.map((instructor, index) => (
              <InstructorCard key={index} {...instructor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;