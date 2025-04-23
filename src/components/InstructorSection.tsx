
import InstructorCard from './InstructorCard';



const InstructorSection = () => {
  const instructors = [
    {
      name: "Xabibulloyev Ixtiyorxon",
      role: "Java dasturlash kursi mentori",
      bio: "Bolalarga robot qurishni va dasturlashni o'rgatishda 7+ yillik tajribaga ega robotika muhandisi.",
      image: "/images/Ixtiyorxon.jpg",
      links: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Abduqahhorov Abduqahhor",
      role: "Mobil dasturlash kursi mentori",
      bio: "Yoshlar uchun ijodiy web dasturlash o'rgatishga ishtiyoqli frontend dasturchi.",
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
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Isroilov Mavlonbek",
      role: " .NET dasturlash kursi mentori",
      bio: "Murakkab tushunchalarni interaktiv ta'lim tajribalari orqali yorituvchi AI tadqiqotchisi.",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlJTIwd29tYW58ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60",
      links: {
        linkedin: "https://www.linkedin.com/in/mavlonbekisroilov/",
        github: "https://github.com/mavlonbekcoding"
      }
    }
  ];

  return (
    <section id="instructors" className="py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Bizning o'qituvchilarimiz</h2>
          <p className="section-subtitle">
            O'zbekistonda kelajak avlod innovatorlarini ilhomlantirishga bag'ishlangan ishtiyoqli o'qituvchilar va texnologiya ekspertlari jamoamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
