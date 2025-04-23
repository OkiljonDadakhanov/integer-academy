import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface FormData {
  fullName: string;
  phone: string;
  topic: string;
  message: string;
}

interface ValidationErrors {
  fullName?: string;
  phone?: string;
  topic?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "+998 ",
    topic: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  // Telegram configuration
  const TELEGRAM_BOT_TOKEN = "8001104074:AAGr-1zQ9SH-2JclhKtO0dgp-0D0YCnv0Lk";
  const TELEGRAM_CHAT_ID = "-1002645858733";
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Ism kiritish majburiy";
    }
    
    if (!formData.phone.trim() || formData.phone === "+998 ") {
      newErrors.phone = "Telefon raqam kiritish majburiy";
    } else if (!/^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/.test(formData.phone)) {
      newErrors.phone = "Telefon raqam formati: +998 XX XXX XX XX";
    }
    
    if (!formData.topic.trim()) {
      newErrors.topic = "Mavzu kiritish majburiy";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Xabar kiritish majburiy";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const sendToTelegram = async () => {
    try {
      const text = `
📝 Yangi Bog'lanish:
👤 Ism: ${formData.fullName}
📞 Telefon: ${formData.phone}
📌 Mavzu: ${formData.topic}
💬 Xabar: ${formData.message}
      `;
      
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        }),
      });
      
      const data = await response.json();
      return data.ok;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await sendToTelegram();
      if (success) {
        setIsSuccess(true);
      } else {
        alert("Xabar yuborish paytida xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Xabar yuborish paytida xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      phone: "+998 ",
      topic: "",
      message: "",
    });
    setErrors({});
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Whether animation should happen only once
    });
  }, []);


  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container">

      <div data-aos="fade-up"
     data-aos-duration="3000">

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
                +99893 413 45 55<br />
                 
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
                mavlonbekcoding@gmail.com<br />
                </p>
              </div>
            </div>
          </div>

          <div>
            {isSuccess ? (
              <div className="text-center p-8 max-w-md mx-auto bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Rahmat!</h2>
                <p className="mb-4 text-gray-700">
                  Sizning arizangiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz!
                </p>
                <Button 
                  onClick={resetForm}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Yangi ariza qoldirish
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium">
                      Ism
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ismingiz"
                      className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefon raqam
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 XX XXX XX XX"
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="topic" className="text-sm font-medium">
                    Mavzu
                  </label> 
                  <Input
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    placeholder="Xabar mavzusi"
                    className={errors.topic ? "border-red-500" : ""}
                  />
                  {errors.topic && (
                    <p className="text-red-500 text-xs mt-1">{errors.topic}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Xabar
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Xabaringizni yozing"
                    rows={5}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-integer-blue hover:bg-integer-blue/90 button-hover-effect"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Xabar Yuborish"}
                </Button>
              </form>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;