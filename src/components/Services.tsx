import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-light-blue-800 mb-16">
          השירותים שלנו
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="bg-gradient-to-br from-white to-light-blue-50 border-2 border-light-blue-300 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-light-blue-300/40 hover:scale-105 transition-all duration-300 p-10 flex flex-col h-full group"
            >
              <h3 className="text-2xl font-bold text-light-blue-800 mb-4 group-hover:text-light-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6 flex-grow">
                {service.items.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="flex-shrink-0 text-light-blue-300 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-light-blue-300 font-semibold group-hover:gap-4 transition-all">
                <span>פרטים נוספים</span>
                <ArrowLeft size={20} className="transform rotate-180" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
