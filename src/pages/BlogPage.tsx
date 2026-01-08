import { Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { articles } from '../data/articles';

const BlogPage = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'מאמרים' }]} />
      <section className="pt-20 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-light-blue-800 mb-6">
              מאמרים ומדריכים
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              טיפים, מדריכים ומידע שימושי בתחום עבודות הגמר. כל מה שצריך לדעת כדי לקבל
              החלטות מושכלות בפרויקט שלכם.
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <span>{article.readTime}</span>
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
    </>
  );
};

export default BlogPage;
