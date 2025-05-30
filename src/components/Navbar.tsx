import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center">
              <img src="/logo/integer.png" alt="logo" width={50} height={50} />
            </div>
            <span className="font-bold text-xl">Integer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#courses"
              className="text-foreground hover:text-integer-blue transition-colors"
            >
              Kurslar
            </a>
            <a
              href="#instructors"
              className="text-foreground hover:text-integer-blue transition-colors"
            >
              O'qituvchilar
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-integer-blue transition-colors"
            >
              Bog'lanish
            </a>
            <Link to="/register">
              <Button className="bg-integer-blue hover:bg-integer-blue/90 button-hover-effect">
                Ro'yhatdan o'tish
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 top-[72px] md:hidden bg-white z-40 overflow-hidden">
            <div className="container py-4 flex flex-col gap-4">
              <a
                href="#courses"
                className="text-foreground hover:text-integer-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Kurslar
              </a>
              <a
                href="#instructors"
                className="text-foreground hover:text-integer-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                O'qituvchilar
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-integer-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Bog'lanish
              </a>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="bg-integer-blue hover:bg-integer-blue/90 w-full">
                  Ro'yhatdan o'tish
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
