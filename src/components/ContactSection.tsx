
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Bog'lanish</h2>
          <p className="section-subtitle">
            Kurslar bo'yicha savollaringiz bormi yoki Integer haqida ko'proq ma'lumot olishni xohlaysizmi? Biz bilan bog'laning!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-integer-blue/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-integer-blue" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Bizni tashrif buyuring</h3>
                <p className="text-muted-foreground">
                  Integer Ta'lim Markazi<br />
                  123 Texnologiya ko'chasi, Toshkent<br />
                  O'zbekiston
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-integer-purple/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-integer-purple" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Qo'ng'iroq qiling</h3>
                <p className="text-muted-foreground">
                  +998 90 123 4567<br />
                  Dushanbadan-jumgacha, 9:00 - 18:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-integer-teal/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-integer-teal" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email yozing</h3>
                <p className="text-muted-foreground">
                  info@integer-tech.uz<br />
                  support@integer-tech.uz
                </p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ism
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ismingiz"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Telefon raqamingiz"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Mavzu
                </label> 
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Xabar mavzusi"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Xabar
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Xabaringizni yozing"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-integer-blue hover:bg-integer-blue/90 button-hover-effect">
                Xabar Yuborish
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
