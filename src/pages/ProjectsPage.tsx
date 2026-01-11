import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'פרויקטים נבחרים' }]} />
      <section className="pt-20 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-light-blue-800 mb-6">
              פרויקטים נבחרים
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              גלריה של הפרויקטים המובחרים שלנו. כל פרויקט מייצג את המחויבות שלנו למצוינות,
              איכות וסיפוק לקוחות.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-light-blue-300 text-white px-3 py-1 rounded-full text-xs font-semibold border-2 border-white">
                        פרויקט מומלץ
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-light-blue-800 mb-2 group-hover:text-light-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-light-blue-300 font-semibold group-hover:gap-4 transition-all">
                    <span>פרטים נוספים</span>
                    <ArrowLeft size={20} className="transform rotate-180" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
