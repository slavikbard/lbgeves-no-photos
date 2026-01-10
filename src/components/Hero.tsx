import { Check } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const Hero = () => {
  const keyPoints = [
    'זמינות גבוהה – כאן בשבילכם גם לדברים החשובים וגם לשאלות הקטנות',
    'איכות ללא פשרות – חומרים מצוינים, ביצוע מדויק וסטנדרט גבוה בכל עבודה',
    'עמידה בזמנים ובתקציב – תכנון נכון, שקיפות וליווי מקצועי לכל אורך הדרך',
    'התאמה מלאה לדרישות השטח – פתרונות מדויקים ומקצועיים ללקוחות עסקיים, ציבוריים ופרטיים כאחד',
    'מחויבות עד הסיום – ליווי שוטף עד למסירה מלאה ולשביעות רצונכם',
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center mt-20 pt-16"
      style={{
        backgroundImage: 'https://i.ibb.co/ch7j8DKY/gmarbeersheva-19.jpg',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-light-blue-800 bg-opacity-70"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <ImageCarousel />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            עבודות גמר ושיפוצים ברמה הגבוהה ביותר
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            מומחים בעבודות גמר עד מפתח למגזר העסקי, הציבורי והפרטי
          </h2>

          <div className="space-y-4 text-right max-w-3xl mx-auto mt-12">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 text-white text-lg leading-loose">
                <Check className="flex-shrink-0 mt-1 text-white" size={24} strokeWidth={3} />
                <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={scrollToContact}
              className="bg-white text-light-blue-800 px-12 py-4 rounded-lg font-bold text-lg hover:bg-light-blue-300 hover:text-white transition-all duration-300 shadow-lg"
            >
              צור קשר עכשיו
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
