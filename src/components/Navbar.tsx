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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-lg flex items-center justify-center">
            <img src="/logo/integer.png" alt="logo" width={65} height={65} />
          </div>
          <span className="font-bold text-xl">Integer</span>
        </a>

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
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
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
            <Button
              className="bg-integer-blue hover:bg-integer-blue/90 w-full"
              onClick={() => setIsOpen(false)}
            >
              Boshlash
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
