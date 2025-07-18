import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentReview, setCurrentReview] = useState(0);

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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf6ee] transition-all duration-300 animate-fade-in">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold text-[#606380]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              minglo
            </div>
            <Button 
              className="bg-[#606380] hover:bg-transparent hover:text-[#606380] hover:border-[#606380] text-[#fdfbf6] px-8 py-3 rounded-full transition-all duration-200 border-2 border-[#606380]"
              onClick={() => window.open('https://t.me/minglo_bot?start=minglosite', '_blank')}
            >
              ЗАПИСАТЬСЯ
            </Button>
          </div>
          <div className="h-[3px] bg-[#606380] mt-4"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-[#deab6c] rounded-2xl p-8 text-[#fdfbf6]">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  живые встречи незнакомых людей
                </h1>
                <p className="text-xl mb-6">
                  в комфортной ресторанной атмосфере
                </p>
                <div className="flex items-center gap-2 mb-8">
                  <Icon name="MapPin" size={20} />
                  <span className="bg-[#e3a038] px-3 py-1 rounded-full text-sm">Москва</span>
                </div>
                <Button 
                  className="bg-[#606380] hover:bg-transparent hover:text-[#606380] hover:border-[#606380] text-[#fdfbf6] px-8 py-3 rounded-full transition-all duration-200 border-2 border-[#606380]"
                  onClick={() => window.open('https://t.me/minglo_bot?start=minglosite', '_blank')}
                >
                  Записаться
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="/img/cc7410a0-a41c-4f40-97ac-7c5acfb9ba72.jpg" 
                alt="Люди общаются в ресторане"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="border-2 border-[#606380] rounded-lg px-4 py-2">
              <span className="text-sm">о minglo</span>
            </div>
            <div className="w-4 h-4 bg-[#deab6c] rounded-sm animate-pulse"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-6xl lg:text-8xl font-bold text-[#606380] mb-8 hover:scale-105 transition-transform duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                minglo
              </h2>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#e3a038]">
                — это ваш проводник в мир новых связей
              </h3>
              <p className="text-lg leading-relaxed">
                Мы создаем уютную атмосферу для знакомств, где каждый может найти интересных собеседников и завести новые дружеские связи. Никакого стресса — только живое общение и искренний интерес друг к другу.
              </p>
              <Button 
                variant="outline" 
                className="border-[#606380] text-[#606380] hover:bg-[#606380] hover:text-[#fdfbf6] px-8 py-3 rounded-full transition-all duration-200"
              >
                исследовать вечера minglo
              </Button>
            </div>
          </div>
        </div>
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
              <Card key={index} className="bg-[#606380] text-[#fdfbf6] border-none animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#deab6c] rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
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
              <div className="bg-[#deab6c] text-[#fdfbf6] p-6 rounded-xl flex items-center gap-4 animate-fade-in">
                <Icon name="Users" size={32} />
                <span className="text-lg">Тем, кто хочет расширить круг общения</span>
              </div>
              <div className="bg-[#e3a038] text-[#fdfbf6] p-6 rounded-xl flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Icon name="Heart" size={32} />
                <span className="text-lg">Открытым к новым знакомствам</span>
              </div>
              <div className="bg-[#deab6c] text-[#fdfbf6] p-6 rounded-xl flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Icon name="Coffee" size={32} />
                <span className="text-lg">Любителям уютных встреч</span>
              </div>
              <div className="bg-[#e3a038] text-[#fdfbf6] p-6 rounded-xl flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Icon name="Smile" size={32} />
                <span className="text-lg">Тем, кто ценит живое общение</span>
              </div>
              <Button 
                className="bg-[#606380] hover:bg-transparent hover:text-[#606380] hover:border-[#606380] text-[#fdfbf6] px-8 py-3 rounded-full transition-all duration-200 border-2 border-[#606380]"
                onClick={() => window.open('https://t.me/minglo_bot?start=minglosite', '_blank')}
              >
                заполнить анкету
              </Button>
            </div>
            <div className="bg-[#fcf6ee] rounded-2xl p-8 text-center">
              <Icon name="Users" size={120} className="mx-auto mb-4 text-[#606380]" />
              <p className="text-lg">Присоединяйтесь к сообществу minglo</p>
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
            <Card className="bg-[#606380] text-[#fdfbf6] border-none w-full max-w-2xl">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <span key={i} className="text-[#e3a038] text-2xl">★</span>
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  {reviews[currentReview].text}
                </p>
                <p className="font-semibold">— {reviews[currentReview].author}</p>
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