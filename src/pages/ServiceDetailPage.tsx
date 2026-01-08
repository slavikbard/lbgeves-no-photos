import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import Contact from '../components/Contact';
import { getServiceBySlug } from '../data/services';

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'השירותים שלנו', path: '/services' },
          { label: service.title },
        ]}
      />

      <section className="pt-20 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-light-blue-300 hover:text-light-blue-800 mb-8 font-semibold transition-colors"
            >
              <ArrowRight size={20} />
              <span>חזרה לכל השירותים</span>
            </Link>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10">
                <div>
                  <h1 className="text-4xl font-bold text-light-blue-800 mb-6">
                    {service.title}
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {service.longDescription}
                  </p>
                </div>

                <div className="lg:order-first">
                  <div className="grid grid-cols-1 gap-4">
                    {service.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                      >
                        <img
                          src={image}
                          alt={`${service.title} ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 bg-gray-50">
                <div>
                  <h2 className="text-2xl font-bold text-light-blue-800 mb-6">
                    מה כולל השירות?
                  </h2>
                  <ul className="space-y-3">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="flex-shrink-0 text-light-blue-300 mt-0.5" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-light-blue-800 mb-6">
                    היתרונות שלנו
                  </h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="flex-shrink-0 text-light-blue-300 mt-0.5" size={20} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ServiceDetailPage;
