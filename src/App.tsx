import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Clock, Star, MessageCircle, ChevronRight, Award, Utensils } from "lucide-react";

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=1920"
  ];

  useEffect(() => {
    // Preload images to prevent "black" flashes during transitions
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const sections = [
    {
      title: "מחלקת בקר פרימיום",
      description: "נתחי בקר מובחרים, מיושנים בקפידה לארוחה מושלמת.",
      image: "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=800",
      whatsappLink: "https://wa.me/972549694972?text=" + encodeURIComponent("שלום, אשמח לפרטים נוספים על מחלקת בקר פרימיום"),
    },
    {
      title: "עופות ופרגיות",
      description: "עוף טרי יום-יום, נקי ומוכן לבישול.",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=800",
      whatsappLink: "https://wa.me/972549694972?text=" + encodeURIComponent("שלום, אשמח לפרטים נוספים על מחלקת עופות ופרגיות"),
    },
    {
      title: "המתובלים של השף",
      description: "המתכונים הסודיים שלנו - רק לשים על המנגל או בתנור.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
      whatsappLink: "https://wa.me/972549694972?text=" + encodeURIComponent("שלום, אשמח לפרטים נוספים על המתובלים של השף"),
    },
  ];

  return (
    <div className="min-h-screen bg-boutique-beige text-boutique-ink font-sans selection:bg-boutique-ink selection:text-white" dir="rtl">
      {/* Hero Section - Restored High-End Split Layout */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-boutique-ink">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div 
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "easeOut" }}
                src={heroImages[currentImageIndex]} 
                alt="Premium Meat Selection" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Text Content Overlay */}
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-white/30"></div>
              <span className="text-xs uppercase tracking-[0.4em] font-bold opacity-80">קצבית בוטיק רחובות</span>
              <div className="w-12 h-[1px] bg-white/30"></div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-serif font-bold leading-[0.85] mb-8 tracking-tighter">
              שף בשר <br />
              <span className="text-white/20 italic relative">
                הקצביה
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-4 right-0 h-[2px] bg-white/10"
                ></motion.span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
              חוויה קולינרית שמתחילה בנתח המושלם. <br />
              <span className="font-serif italic text-boutique-beige">המומחיות שלנו, התענוג שלכם.</span>
            </p>
            
            <div className="flex flex-wrap gap-6 items-center justify-center">
              <a 
                href="https://wa.me/972549694972" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 bg-white text-boutique-ink px-12 py-6 rounded-full text-xl font-bold overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10">להזמנה מהירה</span>
                <MessageCircle className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-boutique-beige -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </a>

              <a 
                href="https://waze.com/ul?q=שף+בשר+רחובות+יעקב+18" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-6 rounded-full text-lg font-bold transition-all hover:bg-white/20"
              >
                <MapPin className="w-5 h-5 text-[#33CCFF]" />
                <span>ניווט בוויז</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Slider Progress Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 transition-all duration-500 rounded-full ${idx === currentImageIndex ? 'w-12 bg-white' : 'w-4 bg-white/20'}`}
            ></div>
          ))}
        </div>
      </header>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-boutique-beige rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-yellow-600 fill-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">דירוג 4.7 כוכבים</h3>
              <p className="opacity-70">לקוחות מרוצים שחוזרים שוב ושוב בזכות האיכות והשירות.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-boutique-beige rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">מעל 20 שנות ניסיון</h3>
              <p className="opacity-70">מומחיות בבשר שעוברת מדור לדור, עם דגש על טריות וכשרות.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-boutique-beige rounded-full flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">השניצלים האגדיים</h3>
              <p className="opacity-70">השניצלים הפרוסים והמתובלים שלנו הם כבר שם דבר ברחובות.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 underline underline-offset-8 decoration-1">המחלקות שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.a 
                key={index}
                href={section.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                  <p className="opacity-70 mb-6">{section.description}</p>
                  <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    לפרטים נוספים <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours - Redesigned for Boutique Elegance */}
      <section className="py-32 bg-boutique-ink text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-boutique-beige/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Contact Info */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl font-serif font-bold mb-4">בואו לבקר</h2>
                  <p className="text-boutique-beige/60 text-lg mb-12">נשמח לארח אתכם בקצביה שלנו ברחובות ולהציע לכם את הנתחים הטובים ביותר.</p>
                  
                  <div className="space-y-10">
                    <div className="group flex items-start gap-6 transition-opacity">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-boutique-ink transition-all duration-500 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-2">הכתובת שלנו</h4>
                        <p className="text-xl font-medium mb-3">רחוב יעקב 18, רחובות</p>
                        <div className="flex gap-4">
                          <a 
                            href="https://www.google.com/maps/search/?api=1&query=שף+בשר+רחובות+יעקב+18" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-widest bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors"
                          >
                            Google Maps
                          </a>
                          <a 
                            href="https://waze.com/ul?q=שף+בשר+רחובות+יעקב+18" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-widest bg-[#33CCFF]/20 hover:bg-[#33CCFF]/30 text-[#33CCFF] px-3 py-1 rounded transition-colors"
                          >
                            Waze
                          </a>
                        </div>
                      </div>
                    </div>

                    <a 
                      href="tel:089353538" 
                      className="group flex items-start gap-6 transition-opacity hover:opacity-80"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-boutique-ink transition-all duration-500 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-2">דברו איתנו</h4>
                        <p className="text-2xl font-serif font-bold text-boutique-beige tracking-widest" dir="ltr">08-935-3538</p>
                      </div>
                    </a>

                    <div className="pt-6">
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Opening Hours - Redesigned for Minimalist Elegance */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center gap-6 mb-16">
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-boutique-beige" />
                      <h3 className="text-2xl font-serif font-bold tracking-tight">שעות פעילות</h3>
                    </div>
                    <div className="h-[1px] w-12 bg-white/10"></div>
                  </div>
                  
                    <div className="space-y-0">
                      {[
                        { day: "ראשון", hours: "07:00 - 14:30" },
                        { day: "שני", hours: "07:00 - 18:00" },
                        { day: "שלישי", hours: "07:00 - 16:00" },
                        { day: "רביעי", hours: "07:00 - 19:00" },
                        { day: "חמישי", hours: "07:00 - 19:00" },
                        { day: "שישי וערבי חג", hours: "07:00 - 14:00", highlight: true },
                        { day: "שבת", hours: "סגור", muted: true },
                      ].map((item, idx) => (
                        <a 
                          key={idx} 
                          href="tel:089353538"
                          className={`group flex justify-between items-center py-6 border-b border-white/5 transition-colors hover:bg-white/[0.02] px-4 -mx-4 rounded-lg ${item.highlight ? 'bg-white/[0.03]' : ''}`}
                        >
                          <div className="flex items-center gap-4">
                            <span className={`text-xl font-serif ${item.highlight ? 'text-boutique-beige' : item.muted ? 'opacity-30' : 'opacity-90'}`}>
                              {item.day}
                            </span>
                            {item.highlight && <span className="text-[10px] uppercase tracking-widest bg-boutique-beige/10 text-boutique-beige px-2 py-0.5 rounded">מומלץ להגיע מוקדם</span>}
                          </div>
                          <span className={`font-serif text-lg tracking-tighter ${item.muted ? 'opacity-20' : 'text-boutique-beige'}`}>
                            {item.hours}
                          </span>
                        </a>
                      ))}
                    </div>
                  
                  <div className="mt-16 flex items-center justify-center gap-4 text-white/20">
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                    <div className="w-2 h-2 rounded-full bg-current opacity-50"></div>
                    <div className="w-2 h-2 rounded-full bg-current opacity-25"></div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-boutique-ink text-white/30 text-center border-t border-white/5 text-xs tracking-widest uppercase">
        <div className="container mx-auto px-6">
          <p className="mb-4">© {new Date().getFullYear()} שף בשר רחובות - כל הזכויות שמורות</p>
          <div className="flex justify-center gap-8 opacity-50">
            <span>בשר טרי יום יום</span>
            <span>•</span>
            <span>משלוחים ברחובות והסביבה</span>
            <span>•</span>
            <span>ייעוץ קולינרי מקצועי</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a 
        href="https://wa.me/972549694972"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.3)] flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-3 transition-all duration-500 whitespace-nowrap font-bold">
          דברו איתנו בוואטסאפ
        </span>
      </motion.a>
    </div>
  );
}
