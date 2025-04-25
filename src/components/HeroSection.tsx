import { ChevronRight, Code, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-integer-blue/10 px-3 py-1 text-sm text-integer-blue font-medium">
                Integer'ga xush kelibsiz
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Kelajakni shakllantiruvchi{" "}
                <span className="text-integer-blue">IT ko'nikmalarni</span>{" "}
                o'rganing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Biz O'zbekistondagi bolalar va yoshlarga robototexnika va
                dasturlashdan tortib, qiziqarli va amaliy muhitda haqiqiy IT
                ko'nikmalarni o'rgatamiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-integer-blue hover:bg-integer-blue/90 button-hover-effect"
                >
                  <a href="#courses" className="inline-flex items-center">
                    Kurslarni ko'rish <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="button-hover-effect"
                >
                  <a href="#instructors">Jamoamiz bilan tanishing</a>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">150+</span>{" "}
                  o'quvchilar allaqachon ta'lim olmoqda
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-integer-purple/10 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-integer-teal/10 rounded-full filter blur-3xl opacity-70"></div>

              <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-5">
                  <div
                    className="bg-integer-blue/10 rounded-xl p-5 flex flex-col items-center text-center animate-float"
                    style={{ animationDelay: "0s" }}
                  >
                    <Cpu className="h-10 w-10 text-integer-blue mb-3" />
                    <h3 className="font-medium">Robototexnika</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Robotlarni yarating va dasturlang
                    </p>
                  </div>

                  <div
                    className="bg-integer-purple/10 rounded-xl p-5 flex flex-col items-center text-center animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Code className="h-10 w-10 text-integer-purple mb-3" />
                    <h3 className="font-medium">Dasturlash</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Dasturlash asoslarini o'rganing
                    </p>
                  </div>

                  <div
                    className="bg-integer-teal/10 rounded-xl p-5 flex flex-col items-center text-center animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <Globe className="h-10 w-10 text-integer-teal mb-3" />
                    <h3 className="font-medium">Web Dasturlash</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      O'z web-saytingizni yarating
                    </p>
                  </div>

                  <div
                    className="bg-integer-darkBlue/10 rounded-xl p-5 flex flex-col items-center text-center animate-float"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <div className="h-10 w-10 rounded-full bg-integer-darkBlue/20 flex items-center justify-center mb-3">
                      <span className="font-bold text-integer-darkBlue">
                        AI
                      </span>
                    </div>
                    <h3 className="font-medium">AI Asoslari</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sun'iy intellektni o'rganing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
