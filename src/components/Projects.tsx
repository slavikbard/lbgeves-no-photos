import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50" style={{ direction: 'rtl' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-light-blue-800 mb-16">
          פרויקטים נבחרים
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 md:px-0">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-light-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    פרויקט מומלץ
                  </div>
                )}
              </div>

              {/* Content Container (White Background) */}
              <div className="p-6 flex flex-col flex-grow text-right">
                <h3 className="text-xl font-bold text-light-blue-900 mb-2 group-hover:text-light-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-end text-light-blue-500 font-semibold group-hover:gap-2 transition-all">
                  <span>פרטים נוספים</span>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;