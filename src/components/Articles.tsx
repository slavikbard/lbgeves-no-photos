import { Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';

const Articles = () => {
  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light-blue-800 mb-4">
            מאמרים ומדריכים
          </h2>
          <p className="text-xl text-gray-600">
            טיפים, מדריכים ומידע שימושי בתחום עבודות הגמר
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-light-blue-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Clock size={16} />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-light-blue-800 mb-3 leading-snug group-hover:text-light-blue-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.summary}
                </p>
                <div className="flex items-center gap-2 text-light-blue-300 font-semibold group-hover:gap-4 transition-all">
                  <span>קרא עוד</span>
                  <ArrowLeft size={16} className="transform rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
