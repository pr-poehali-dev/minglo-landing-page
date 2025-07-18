import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Hero animations
    gsap.fromTo('.hero-text', 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out', stagger: 0.2 }
    );
    
    gsap.fromTo('.hero-image', 
      { opacity: 0, x: 100, rotation: 10 },
      { opacity: 1, x: 0, rotation: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    );
    
    // Floating animation for decorative elements
    gsap.to('.floating-element', {
      y: '-20px',
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });
    
    // Parallax scrolling for sections
    gsap.utils.toArray('.parallax-section').forEach((section: any) => {
      gsap.to(section, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
    
    // Reveal animation for cards
    gsap.utils.toArray('.reveal-card').forEach((card: any, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 100, scale: 0.8, rotation: 10 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.1
        }
      );
    });
    
    // Morphing logo animation
    gsap.to('.morph-logo', {
      scale: 1.1,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });
    
    // Text reveal animation
    gsap.utils.toArray('.text-reveal').forEach((text: any) => {
      gsap.fromTo(text, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Mouse parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    
    gsap.to(e.currentTarget, {
      x: x,
      y: y,
      duration: 0.3,
      ease: 'power2.out'
    });
  };
  
  const handleMouseLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const reviews = [
    {
      rating: 5,
      text: "Отличное мероприятие! Познакомился с интересными людьми и отлично провел время. Атмосфера располагает к общению.",
      author: "Максим"
    },
    {
      rating: 5,
      text: "Minglo помогло мне найти единомышленников. Теперь у меня есть новые друзья и интересные знакомства.",
      author: "Анна"
    },
    {
      rating: 5,
      text: "Качественно организованное мероприятие. Все продумано до мелочей, игры помогают быстро раскрепоститься.",
      author: "Дмитрий"
    }
  ];

  const faqItems = [
    {
      question: "Что такое minglo?",
      answer: "Minglo - платформа, на которой вы можете познакомиться с новыми людьми в комфортной ресторанной атмосфере."
    },
    {
      question: "Как проходят встречи?",
      answer: "Каждую неделю 6 незнакомцев собираются в уютном ресторане для общения и игр-ледоколов."
    },
    {
      question: "Сколько стоит участие?",
      answer: "Стоимость участия включает бронь столика и организацию мероприятия. Точная цена указывается при регистрации."
    },
    {
      question: "Как зарегистрироваться?",
      answer: "Регистрация проходит через Telegram-бота. Просто нажмите кнопку 'Записаться' и следуйте инструкциям."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcf6ee] text-[#606380]">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#deab6c] to-[#e3a038] rounded-full opacity-20 animate-float"></div>
        <div className="floating-element absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#e3a038] to-[#deab6c] rounded-full opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="floating-element absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-[#606380] to-[#deab6c] rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="floating-element absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-[#deab6c] to-[#606380] rounded-full opacity-25 animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-morphism backdrop-blur-md transition-all duration-300 animate-slide-up">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              ref={logoRef}
              className="morph-logo text-4xl font-bold text-gradient cursor-pointer hover:scale-110 transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              minglo
            </div>
            <Button 
              className="btn-glow bg-[#606380] hover:bg-transparent hover:text-[#606380] hover:border-[#606380] text-[#fdfbf6] px-8 py-3 rounded-full transition-all duration-300 border-2 border-[#606380] hover:scale-105 magnetic-hover"
              onClick={() => window.open('https://t.me/minglo_bot?start=minglosite', '_blank')}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              ЗАПИСАТЬСЯ
            </Button>
          </div>
          <div className="h-[3px] bg-gradient-to-r from-[#606380] via-[#deab6c] to-[#606380] mt-4 animate-pulse-glow"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 parallax-section relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="hero-text blob-morph rounded-2xl p-8 text-[#fdfbf6] card-float perspective-card hover-lift interactive-tilt"
                   onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}>
                <h1 className="hero-text text-4xl lg:text-5xl font-bold mb-4 leading-tight text-3d animate-bounce-in" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  живые встречи незнакомых людей
                </h1>
                <p className="hero-text text-xl mb-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
                  в комфортной ресторанной атмосфере
                </p>
                <div className="hero-text flex items-center gap-2 mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
                  <Icon name="MapPin" size={20} className="animate-wiggle" />
                  <span className="bg-[#e3a038] px-3 py-1 rounded-full text-sm hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse-glow">Москва</span>
                </div>
                <Button 
                  className="hero-text btn-glow bg-[#606380] hover:bg-transparent hover:text-[#606380] hover:border-[#606380] text-[#fdfbf6] px-8 py-3 rounded-full transition-all duration-300 border-2 border-[#606380] hover:scale-105 magnetic-hover animate-rotate-in"
                  onClick={() => window.open('https://t.me/minglo_bot?start=minglosite', '_blank')}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{animationDelay: '0.9s'}}
                >
                  Записаться
                </Button>
              </div>
            </div>
            <div className="hero-image perspective-card">
              <img 
                src="/img/cc7410a0-a41c-4f40-97ac-7c5acfb9ba72.jpg" 
                alt="Люди общаются в ресторане"
                className="rounded-2xl shadow-float-lg w-full hover-lift transform-gpu transition-all duration-500"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        </div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#deab6c] rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#e3a038] rounded-full animate-float"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 parallax-section relative">
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12 text-reveal">
            <div className="border-2 border-[#606380] rounded-lg px-4 py-2 hover:bg-[#606380] hover:text-[#fdfbf6] transition-all duration-300 cursor-pointer">
              <span className="text-sm">о minglo</span>
            </div>
            <div className="w-4 h-4 bg-[#deab6c] rounded-sm animate-morph"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-6xl lg:text-8xl font-bold text-gradient mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer neon-glow text-reveal scroll-parallax"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}>
                minglo
              </h2>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#e3a038] text-reveal animate-slide-in-left">
                — это ваш проводник в мир новых связей
              </h3>
              <p className="text-lg leading-relaxed text-reveal animate-fade-in" style={{animationDelay: '0.2s'}}>
                Мы создаем уютную атмосферу для знакомств, где каждый может найти интересных собеседников и завести новые дружеские связи. Никакого стресса — только живое общение и искренний интерес друг к другу.
              </p>
              <Button 
                variant="outline" 
                className="border-[#606380] text-[#606380] hover:bg-[#606380] hover:text-[#fdfbf6] px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 magnetic-hover btn-glow text-reveal"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{animationDelay: '0.4s'}}
              >
                исследовать вечера minglo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#deab6c] rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-[#e3a038] transform rotate-45 animate-bounce"></div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-[#fdfbf6]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Каждую неделю 6 незнакомцев собираются...
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="text-center lg:text-left">
              <h3 className="text-7xl lg:text-9xl font-bold text-[#606380] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ЦЕЛЬ
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-[#deab6c] text-[#fdfbf6] px-6 py-4 rounded-full text-center text-xl font-semibold animate-fade-in">
                познакомиться
              </div>
              <div className="bg-[#e3a038] text-[#fdfbf6] px-6 py-4 rounded-full text-center text-xl font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
                пообщаться
              </div>
              <div className="bg-[#deab6c] text-[#fdfbf6] px-6 py-4 rounded-full text-center text-xl font-semibold animate-fade-in" style={{ animationDelay: '0.4s' }}>
                сыграть в ледокольную игру
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 1, title: "Регистрация", description: "Заполните анкету через Telegram-бота" },
              { number: 2, title: "Бронь", description: "Мы резервируем столик в уютном ресторане" },
              { number: 3, title: "Встреча", description: "Приходите в назначенное время и знакомьтесь" },
              { number: 4, title: "Общение", description: "Играете в игры и находите новых друзей" }
            ].map((step, index) => (
              <Card key={index} className="reveal-card bg-[#606380] text-[#fdfbf6] border-none perspective-card hover-lift card-float magnetic-hover"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#deab6c] rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto animate-scale-pulse hover:animate-bounce">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-sm opacity-90">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="reveal-card bg-[#deab6c] text-[#fdfbf6] p-6 rounded-xl flex items-center gap-4 hover-lift perspective-card magnetic-hover"
                   onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}>
                <Icon name="Users" size={32} className="animate-wiggle" />
                <span className="text-lg">Тем, кто хочет расширить круг общения</span>
              </div>
              <div className="reveal-card bg-[#e3a038] text-[#fdfbf6] p-6 rounded-xl flex items-center gap-4 hover-lift perspective-card magnetic-hover"
                   onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}>
                <Icon name="Heart" size={32} className="animate-pulse-glow" />
                <span className="text-lg">Открытым к новым знакомствам</span>
              </div>
              <div className="reveal-card bg-[#deab6c] text-[#fdfbf6] p-6 rounded-xl flex items-center gap-4 hover-lift perspective-card magnetic-hover"
                   onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}>
                <Icon name="Coffee" size={32} className="animate-float" />
                <span className="text-lg">Любителям уютных встреч</span>
              </div>
              <div className="reveal-card bg-[#e3a038] text-[#fdfbf6] p-6 rounded-xl flex items-center gap-4 hover-lift perspective-card magnetic-hover"
                   onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}>
                <Icon name="Smile" size={32} className="animate-bounce" />
                <span className="text-lg">Тем, кто ценит живое общение</span>
              </div>
              <Button 
                className="btn-glow bg-[#606380] hover:bg-transparent hover:text-[#606380] hover:border-[#606380] text-[#fdfbf6] px-8 py-3 rounded-full transition-all duration-300 border-2 border-[#606380] hover:scale-105 magnetic-hover"
                onClick={() => window.open('https://t.me/minglo_bot?start=minglosite', '_blank')}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                заполнить анкету
              </Button>
            </div>
            <div className="bg-[#fcf6ee] rounded-2xl p-8 text-center perspective-card hover-lift card-float"
                 onMouseMove={handleMouseMove}
                 onMouseLeave={handleMouseLeave}>
              <Icon name="Users" size={120} className="mx-auto mb-4 text-[#606380] animate-pulse-glow" />
              <p className="text-lg text-gradient">Присоединяйтесь к сообществу minglo</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#fdfbf6]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                вопрос-ответ
              </h2>
              <h3 className="text-2xl font-semibold text-[#e3a038] mb-8">
                как работает minglo
              </h3>
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#606380]">
                    <AccordionTrigger className="text-left text-[#606380] hover:text-[#e3a038] transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#606380] opacity-80">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            отзывы
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setCurrentReview(currentReview > 0 ? currentReview - 1 : reviews.length - 1)}
              className="rounded-full"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Card className="bg-[#606380] text-[#fdfbf6] border-none w-full max-w-2xl perspective-card hover-lift card-float"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <span key={i} className="text-[#e3a038] text-2xl animate-pulse-glow" style={{animationDelay: `${i * 0.1}s`}}>★</span>
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  {reviews[currentReview].text}
                </p>
                <p className="font-semibold text-gradient">— {reviews[currentReview].author}</p>
              </CardContent>
            </Card>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setCurrentReview(currentReview < reviews.length - 1 ? currentReview + 1 : 0)}
              className="rounded-full"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
          <div className="flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentReview ? 'bg-[#606380]' : 'bg-[#606380] opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#606380] text-[#fdfbf6]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                minglo
              </h3>
              <p className="opacity-80">
                Платформа для живых встреч и новых знакомств
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Контакты</h4>
              <a href="#" className="text-[#deab6c] hover:text-[#e3a038] transition-colors">
                Техподдержка
              </a>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Юридическая информация</h4>
              <div className="space-y-2">
                <div><a href="#" className="text-[#deab6c] hover:text-[#e3a038] transition-colors">Политика конфиденциальности</a></div>
                <div><a href="#" className="text-[#deab6c] hover:text-[#e3a038] transition-colors">Оферта</a></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;