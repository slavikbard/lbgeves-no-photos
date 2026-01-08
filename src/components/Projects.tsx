import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-light-blue-800 mb-16">
          פרויקטים נבחרים
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-light-blue-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90 mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  <span>פרטים נוספים</span>
                  <ArrowLeft size={16} className="transform rotate-180" />
                </div>
              </div>
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="bg-light-blue-300 text-white px-3 py-1 rounded-full text-xs font-semibold border-2 border-white">
                    פרויקט מומלץ
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
