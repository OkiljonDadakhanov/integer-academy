
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-integer-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="font-bold text-lg text-white">Integer</span>
            </div>
            <p className="text-gray-400 mb-4">
              O'zbekistonda bolalar va yoshlarga qiziqarli va amaliy muhitda haqiqiy texnik ko'nikmalarni o'rgatamiz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Bizning dasturlarimiz</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Robototexnika kurslari</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web dasturlash</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dasturlash darslari</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Yozgi texnologiya lagerlari</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Tezkor havolalar</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Biz haqimizda</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Kurslarimiz</a></li>
              <li><a href="#instructors" className="text-gray-400 hover:text-white transition-colors">O'qituvchilarimiz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Bog'lanish</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Yangiliklar</h3>
            <p className="text-gray-400 mb-4">
              Yangi kurslar va tadbirlar haqidagi yangiliklarni olish uchun obuna bo'ling.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Emailingiz"
                className="bg-gray-800 text-white px-3 py-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-integer-blue"
                required
              />
              <button type="submit" className="bg-integer-blue hover:bg-integer-blue/90 px-4 py-2 rounded font-medium transition-colors">
                Qo'shilish
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} Integer Tech Lab. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
