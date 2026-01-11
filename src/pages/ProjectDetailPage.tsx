import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Ruler, User } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Breadcrumb from '../components/Breadcrumb';
import ZoomableImage from '../components/ZoomableImage';
import { getProjectById } from '../data/projects';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const slides = project.gallery.map((image) => ({
    src: image,
    alt: project.title,
  }));

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'פרויקטים נבחרים', path: '/projects' },
          { label: project.title },
        ]}
      />

      <section className="pt-20 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-light-blue-300 hover:text-light-blue-800 mb-8 font-semibold transition-colors"
            >
              <ArrowRight size={20} />
              <span>חזרה לכל הפרויקטים</span>
            </Link>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-96">
                <img
                  src={project.image.replace('w=800', 'w=1920')}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-white/90">{project.description}</p>
                </div>
              </div>

              <div className="p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="text-light-blue-300" size={24} />
                    <span className="text-sm text-gray-500">מיקום</span>
                    <span className="font-semibold text-gray-800">{project.location}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="text-light-blue-300" size={24} />
                    <span className="text-sm text-gray-500">שנה</span>
                    <span className="font-semibold text-gray-800">{project.year}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
                    <Ruler className="text-light-blue-300" size={24} />
                    <span className="text-sm text-gray-500">שטח</span>
                    <span className="font-semibold text-gray-800">{project.size}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
                    <User className="text-light-blue-300" size={24} />
                    <span className="text-sm text-gray-500">לקוח</span>
                    <span className="font-semibold text-gray-800">{project.client}</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-10">
                  <h2 className="text-2xl font-bold text-light-blue-800 mb-4">אודות הפרויקט</h2>
                  <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div>
                    <h3 className="text-xl font-bold text-light-blue-800 mb-4">שירותים שסופקו</h3>
                    <ul className="space-y-2">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-light-blue-300 rounded-full"></span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-light-blue-800 mb-4">אתגרים</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-light-blue-300 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-light-blue-800 mb-4">פתרונות</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-light-blue-300 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {(project.designer || project.photographer) && (
                  <div className="bg-light-blue-50 rounded-xl p-8 mb-10">
                    <h2 className="text-2xl font-bold text-light-blue-800 mb-6">קרדיטים</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.designer && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-light-blue-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            מ
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">מעצבת מלווה</p>
                            <p className="font-semibold text-gray-800">{project.designer}</p>
                          </div>
                        </div>
                      )}
                      {project.photographer && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-light-blue-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            צ
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">צילום</p>
                            <p className="font-semibold text-gray-800">{project.photographer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-2xl font-bold text-light-blue-800 mb-6">גלריית הפרויקט</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg overflow-hidden cursor-pointer group"
                        style={{ paddingBottom: '75%' }}
                      >
                        <div className="absolute top-0 left-0 w-full h-full">
                          <ZoomableImage
                            src={image}
                            alt={`${project.title} ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={slides}
        index={photoIndex}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
        controller={{ closeOnBackdropClick: true }}
        on={{
          view: ({ index }) => setPhotoIndex(index),
        }}
      />
    </>
  );
};

export default ProjectDetailPage;
