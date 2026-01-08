import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { services } from '../data/services';

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'השירותים שלנו' }]} />
      <section className="pt-20 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-light-blue-800 mb-6">
              השירותים שלנו
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              אנו מציעים מגוון רחב של שירותי עבודות גמר ברמה הגבוהה ביותר. כל שירות ניתן
              באיכות מעולה, עם תשומת לב לפרטים, ועמידה בלוחות זמנים.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="bg-white border-2 border-light-blue-300 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-light-blue-300/40 hover:scale-105 transition-all duration-300 p-10 group"
              >
                <h2 className="text-2xl font-bold text-light-blue-800 mb-4 group-hover:text-light-blue-300 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-light-blue-300 font-semibold group-hover:gap-4 transition-all">
                  <span>קרא עוד</span>
                  <ArrowLeft size={20} className="transform rotate-180" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
