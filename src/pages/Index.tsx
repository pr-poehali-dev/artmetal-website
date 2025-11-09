import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Warehouse',
      title: 'Металлоконструкции',
      description: 'Проектирование и изготовление металлоконструкций любой сложности'
    },
    {
      icon: 'Flame',
      title: 'Сварочные работы',
      description: 'Профессиональные сварочные работы всех типов металлов'
    },
    {
      icon: 'DoorOpen',
      title: 'Ворота и заборы',
      description: 'Изготовление ворот, заборов, калиток по индивидуальным проектам'
    },
    {
      icon: 'Utensils',
      title: 'Мангальные зоны',
      description: 'Костровые зоны, мангалы, барбекю из металла'
    },
    {
      icon: 'Armchair',
      title: 'Мебель Loft',
      description: 'Дизайнерская мебель в стиле лофт для дома и офиса'
    },
    {
      icon: 'Shield',
      title: 'Качество',
      description: 'Гарантия на все виды работ и используемые материалы'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/a4fa2d3e-88e1-4859-8ef6-74f3bb6e646a/files/fbdd6346-14dc-4221-b46a-682f0f5eb456.jpg',
      title: 'Кованые ворота',
      category: 'Ворота'
    },
    {
      image: 'https://cdn.poehali.dev/projects/a4fa2d3e-88e1-4859-8ef6-74f3bb6e646a/files/755f9b23-8649-4c91-a18c-b5c0c48500ae.jpg',
      title: 'Мебель Loft',
      category: 'Интерьер'
    },
    {
      image: 'https://cdn.poehali.dev/projects/a4fa2d3e-88e1-4859-8ef6-74f3bb6e646a/files/6bd63585-c702-4e8e-9ec2-2a0cd07b62bf.jpg',
      title: 'Мангальная зона',
      category: 'Экстерьер'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/00114c76-9fc2-45e4-96c1-ce4398df9188.png" 
                alt="АРТ МЕТАЛЛ" 
                className="h-16 w-16 object-contain"
              />
              <div className="text-center">
                <h1 className="text-2xl font-heading text-primary">АРТ МЕТАЛЛ</h1>
                <p className="text-sm text-muted-foreground">Металлоконструкции</p>
              </div>
            </div>
            <nav className="flex gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-heading mb-6 text-primary">
              ИЗГОТОВЛЕНИЕ МЕТАЛЛОКОНСТРУКЦИЙ
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональные сварочные работы. Ворота, заборы, калитки, мангальные зоны, мебель в стиле лофт
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <a href="#contact">Заказать проект</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-heading mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading text-center mb-12">Портфолио работ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-secondary text-sm mb-1">{item.category}</p>
                    <h3 className="text-xl font-heading">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading text-center mb-8">О компании</h2>
          <div className="space-y-6 text-lg">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">ООО "АРТ МЕТАЛЛ"</strong> — профессиональная компания по изготовлению металлоконструкций и выполнению сварочных работ любой сложности.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Мы специализируемся на создании ворот, заборов, калиток, мангальных и костровых зон, а также дизайнерской мебели в стиле лофт. Каждый проект выполняется с учётом индивидуальных пожеланий заказчика.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-heading text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading text-secondary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">качество</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-heading text-center mb-12">Связаться с нами</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Имя</label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ваше имя"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Телефон</label>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Сообщение</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Опишите ваш проект"
                    rows={5}
                    required
                    className="bg-background"
                  />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (___) ___-__-__</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@artmetal.ru</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>г. Москва, ул. Промышленная, д. 1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ООО "АРТ МЕТАЛЛ". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}