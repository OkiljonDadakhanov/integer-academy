import React, { useState } from "react";
import { Phone, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar"; // Import the Navbar component
import Footer from "@/components/Footer"; // Import the Footer component

// Define TypeScript interfaces
interface Course {
  name: string;
  description: string;
}

interface Location {
  name: string;
  region: string;
}

interface FormData {
  course: string;
  location: string;
  fullName: string;
  source: string;
  phone: string;
  additionalPhone: string;
}

interface ValidationErrors {
  course?: string;
  location?: string;
  fullName?: string;
  source?: string;
  phone?: string;
  additionalPhone?: string;
  general?: string;
}

// Component Props
interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

interface InputProps {
  id: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  type?: string;
}

interface LabelProps {
  htmlFor: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface SelectProps {
  required?: boolean;
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface SelectItemProps {
  value: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface AlertProps {
  variant: "default" | "destructive";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface AlertDescriptionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

// Data
const courses = [
  { name: "Robototexnikaga kirish", description: "Robototexnika asoslarini o'rganing va birinchi robotingizni yarating" },
  { name: "Ingliz tili", description: "General English, IELTS" },
  { name: "Rus tili", description: "Boshlang'ich Rus Tili" },
  { name: "Web dasturlash asoslari", description: "HTML, CSS va JavaScript yordamida o'z web-saytingizni yarating" },
  { name: "Python dasturlash tili", description: "O'yinlar va dasturlar orqali Python dasturlash tilini o'rganing" },
  { name: "AI va Machine Learning", description: "Sun'iy intellekt va machine learning asoslarini kashf eting" },
  
];

const locations = [
  { name: "Chilonzor", region: "Toshkent" },
  { name: "Nazarbek", region: "Toshkent" },
  { name: "Olmazor", region: "Toshkent" },
  { name: "Qoratosh", region: "Toshkent" },
  { name: "Sergeli", region: "Toshkent" },
  { name: "Zangiota", region: "Toshkent" },
  { name: "Samarqand", region: "Samarqand" },
  { name: "Namangan", region: "Namangan" },
  { name: "Online", region: "Internet" },
  { name: "Qo'qon", region: "Farg'ona" },
  { name: "Andijon", region: "Andijon Shahar" },
  { name: "Poytug'", region: "Andijon" },
];

const sources = [
  "Instagram",
  "Facebook",
  "Telegram",
  "Do'stlar orqali",
  "Tanishlar orqali",
];

// UI Components with inline styles
const Button: React.FC<ButtonProps> = ({
  children,
  style = {},
  disabled,
  type = "button",
  onClick,
}) => {
  const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    fontWeight: 500,
    borderRadius: "6px",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "none",
    opacity: disabled ? 0.7 : 1,
    ...style,
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Input: React.FC<InputProps> = ({
  id,
  required,
  placeholder,
  value,
  onChange,
  style = {},
  type = "text",
}) => {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    outline: "none",
    fontSize: "14px",
    ...style,
  };

  return (
    <input
      id={id}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      style={inputStyle}
    />
  );
};

const Label: React.FC<LabelProps> = ({ htmlFor, style = {}, children }) => {
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "14px",
    fontWeight: 500,
    marginBottom: "4px",
    ...style,
  };

  return (
    <label htmlFor={htmlFor} style={labelStyle}>
      {children}
    </label>
  );
};

const Select: React.FC<SelectProps> = ({
  required,
  value,
  onValueChange,
  children,
  style = {},
}) => {
  const selectContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
  };

  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    appearance: "none",
    fontSize: "14px",
    backgroundColor: "#fff",
    ...style,
  };

  const arrowStyle: React.CSSProperties = {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  };

  return (
    <div style={selectContainerStyle}>
      <select
        required={required}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        style={selectStyle}
      >
        {children}
      </select>
      <div style={arrowStyle}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="#9ca3af"
          style={{ display: "block" }}
        >
          <path
            d="M7 7l3 3 3-3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  style = {},
  children,
}) => {
  const optionStyle: React.CSSProperties = {
    padding: "8px 0",
    ...style,
  };

  return (
    <option value={value} style={optionStyle}>
      {children}
    </option>
  );
};

const Alert: React.FC<AlertProps> = ({ variant, children, style = {} }) => {
  const alertStyle: React.CSSProperties = {
    padding: "16px",
    borderRadius: "6px",
    border: "1px solid",
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    backgroundColor: variant === "destructive" ? "#fef2f2" : "#eff6ff",
    borderColor: variant === "destructive" ? "#fecaca" : "#bfdbfe",
    ...style,
  };

  return <div style={alertStyle}>{children}</div>;
};

const AlertDescription: React.FC<AlertDescriptionProps> = ({
  children,
  style = {},
}) => {
  const descriptionStyle: React.CSSProperties = {
    fontSize: "14px",
    ...style,
  };

  return <div style={descriptionStyle}>{children}</div>;
};

export default function RegistrationForm(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    course: "",
    location: "",
    fullName: "",
    source: "",
    phone: "+998",
    additionalPhone: "+998",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when field is edited
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Validate course
    if (!formData.course) {
      newErrors.course = "Kurs tanlash majburiy";
    }

    // Validate location
    if (!formData.location) {
      newErrors.location = "Filial tanlash majburiy";
    }

    // Validate full name
    if (!formData.fullName) {
      newErrors.fullName = "Ism va familiya kiritish majburiy";
    } else if (formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "Ism va familiyangizni to'liq kiriting";
    }

    // Validate phone number
    const phoneRegex = /^\+998\s*\d{2}\s*\d{3}\s*\d{2}\s*\d{2}$/;
    if (!formData.phone) {
      newErrors.phone = "Telefon raqami kiritish majburiy";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone =
        "Telefon raqami +998 dan boshlanib, 12 raqamdan iborat bo'lishi kerak";
    }

    // Validate additional phone if provided
    if (formData.additionalPhone && formData.additionalPhone !== "+998") {
      if (!phoneRegex.test(formData.additionalPhone.replace(/\s/g, ""))) {
        newErrors.additionalPhone =
          "Telefon raqami +998 dan boshlanib, 12 raqamdan iborat bo'lishi kerak";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real application, you would send the data to your backend here
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await sendToTelegram(formData);

      // Instead of router.push, we'll set a success state
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({
        general:
          "Ariza yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Replace environment variables with direct imports or config
  const TELEGRAM_BOT_TOKEN = "8001104074:AAGr-1zQ9SH-2JclhKtO0dgp-0D0YCnv0Lk";
  const TELEGRAM_CHAT_ID = -1002645858733;

  const sendToTelegram = async (data: FormData): Promise<void> => {
    try {
      const message = `
📥 Yangi kurs uchun ariza:
👤 Ism: ${data.fullName}
📞 Telefon: ${data.phone}
📞 Qo'shimcha: ${
        data.additionalPhone !== "+998" ? data.additionalPhone : "Yo'q"
      }
📚 Kurs: ${data.course}
📍 Filial: ${data.location}
📢 Qayerdan topdi: ${data.source}
      `.trim();

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Origin: window.location.origin,
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Telegram API error: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to send to Telegram:", error);
      throw error;
    }
  };

  // Page container style
  const pageContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  // Main content container style
  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    paddingTop: "40px",
    paddingBottom: "40px",
  };

  // Form container styles
  const formContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  // Header style
  const headerStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "20px",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  // Success message styles
  const successContainerStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "32px",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const successHeadingStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#16a34a",
    marginBottom: "16px",
  };

  const successMessageStyle: React.CSSProperties = {
    marginBottom: "16px",
  };

  const resetButtonStyle: React.CSSProperties = {
    backgroundColor: "#16a34a",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    fontWeight: 500,
  };

  // Field container style
  const fieldContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  // Error message style
  const errorTextStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#ef4444",
    marginTop: "4px",
  };

  // Submit button style
  const submitButtonStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    fontWeight: 500,
    padding: "10px",
    marginTop: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.2s",
  };

  // Phone input container style
  const phoneContainerStyle: React.CSSProperties = {
    position: "relative",
  };

  const phoneIconStyle: React.CSSProperties = {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9ca3af",
  };

  // Content for the page with navbar and footer
  const content = isSuccess ? (
    <div style={successContainerStyle}>
      <h2 style={successHeadingStyle}>Rahmat!</h2>
      <p style={successMessageStyle}>
        Sizning arizangiz muvaffaqiyatli yuborildi.
      </p>
      <button
        onClick={() => {
          setIsSuccess(false);
          setFormData({
            course: "",
            location: "",
            fullName: "",
            source: "",
            phone: "+998",
            additionalPhone: "+998",
          });
        }}
        style={resetButtonStyle}
      >
        Yangi ariza qoldirish
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} style={formContainerStyle}>
      {errors.general && (
        <Alert variant="destructive">
          <AlertCircle size={16} />
          <AlertDescription>{errors.general}</AlertDescription>
        </Alert>
      )}
      
      <h2 style={headerStyle}>
        Integer Academy kurslari uchun registratsiya qiling:
      </h2>

      <div style={fieldContainerStyle}>
        <Label
          htmlFor="course"
          style={errors.course ? { color: "#ef4444" } : {}}
        >
          Kurslardan birini tanlang:
        </Label>
        <Select
          required
          value={formData.course}
          onValueChange={(value) => handleChange("course", value)}
          style={errors.course ? { borderColor: "#ef4444" } : {}}
        >
          <SelectItem value="" style={{ color: "#9ca3af" }}>
            -- Kursni tanlang --
          </SelectItem>
          {courses.map((course) => (
            <SelectItem key={course.name} value={course.name}>
              {course.name}{" "}
              {course.description ? `(${course.description})` : ""}
            </SelectItem>
          ))}
        </Select>
        {errors.course && <p style={errorTextStyle}>{errors.course}</p>}
      </div>

      <div style={fieldContainerStyle}>
        <Label
          htmlFor="location"
          style={errors.location ? { color: "#ef4444" } : {}}
        >
          Sizga yaqin filialni tanlang:
        </Label>
        <Select
          required
          value={formData.location}
          onValueChange={(value) => handleChange("location", value)}
          style={errors.location ? { borderColor: "#ef4444" } : {}}
        >
          <SelectItem value="" style={{ color: "#9ca3af" }}>
            -- Filialni tanlang --
          </SelectItem>
          {locations.map((location) => (
            <SelectItem key={location.name} value={location.name}>
              {location.name} {location.region ? `(${location.region})` : ""}
            </SelectItem>
          ))}
        </Select>
        {errors.location && <p style={errorTextStyle}>{errors.location}</p>}
      </div>

      <div style={fieldContainerStyle}>
        <Label
          htmlFor="fullName"
          style={errors.fullName ? { color: "#ef4444" } : {}}
        >
          Ism va Familiya:
        </Label>
        <Input
          id="fullName"
          required
          placeholder="Ism Familiya"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          style={errors.fullName ? { borderColor: "#ef4444" } : {}}
        />
        {errors.fullName && <p style={errorTextStyle}>{errors.fullName}</p>}
      </div>

      <div style={fieldContainerStyle}>
        <Label
          htmlFor="source"
          style={errors.source ? { color: "#ef4444" } : {}}
        >
          Biz haqimizda qayerdan xabar topdingiz?
        </Label>
        <Select
          required
          value={formData.source}
          onValueChange={(value) => handleChange("source", value)}
          style={errors.source ? { borderColor: "#ef4444" } : {}}
        >
          <SelectItem value="" style={{ color: "#9ca3af" }}>
            -- Tanlang --
          </SelectItem>
          {sources.map((source) => (
            <SelectItem key={source} value={source}>
              {source}
            </SelectItem>
          ))}
        </Select>
        {errors.source && <p style={errorTextStyle}>{errors.source}</p>}
      </div>

      <div style={fieldContainerStyle}>
        <Label htmlFor="phone" style={errors.phone ? { color: "#ef4444" } : {}}>
          Telefon raqamingiz:
        </Label>
        <div style={phoneContainerStyle}>
          <Input
            id="phone"
            required
            type="tel"
            placeholder="+998"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            style={{
              ...(errors.phone ? { borderColor: "#ef4444" } : {}),
              paddingRight: "40px",
            }}
          />
          <div style={phoneIconStyle}>
            <Phone size={16} />
          </div>
        </div>
        {errors.phone && <p style={errorTextStyle}>{errors.phone}</p>}
      </div>

      <div style={fieldContainerStyle}>
        <Label
          htmlFor="additionalPhone"
          style={errors.additionalPhone ? { color: "#ef4444" } : {}}
        >
          Qo`shimcha raqamingiz:
        </Label>
        <Input
          id="additionalPhone"
          type="tel"
          placeholder="+998"
          value={formData.additionalPhone}
          onChange={(e) => handleChange("additionalPhone", e.target.value)}
          style={errors.additionalPhone ? { borderColor: "#ef4444" } : {}}
        />
        {errors.additionalPhone && (
          <p style={errorTextStyle}>{errors.additionalPhone}</p>
        )}
      </div>

      <Button type="submit" style={submitButtonStyle} disabled={isSubmitting}>
        {isSubmitting ? "Yuborilmoqda..." : "Ariza qoldirish"}
      </Button>
    </form>
  );

  return (
    <div style={pageContainerStyle}>
      <Navbar />
      <main style={mainContentStyle}>
        {content}
      </main>
      <Footer />
    </div>
  );
}