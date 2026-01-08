import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { getArticleBySlug } from '../data/articles';

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const formatContent = (content: string) => {
    const lines = content.trim().split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl font-bold text-light-blue-800 mb-6 mt-8">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold text-light-blue-800 mb-4 mt-8">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-bold text-light-blue-800 mb-3 mt-6">
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={index} className="text-xl font-bold text-gray-800 mb-4 mt-4">
            {line.substring(2, line.length - 2)}
          </p>
        );
      } else if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 leading-relaxed mb-2 mr-6">
            {line.substring(2)}
          </li>
        );
      } else if (line.trim() === '') {
        return <div key={index} className="h-4"></div>;
      } else {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'מאמרים', path: '/blog' },
          { label: article.title },
        ]}
      />

      <article className="pt-20 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-light-blue-300 hover:text-light-blue-800 mb-8 font-semibold transition-colors"
            >
              <ArrowRight size={20} />
              <span>חזרה לכל המאמרים</span>
            </Link>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-96">
                <img
                  src={article.image.replace('w=800', 'w=1920')}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="p-10">
                <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  {formatContent(article.content)}
                </div>
              </div>

              <div className="p-10 bg-light-blue-50 border-t-2 border-light-blue-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <h3 className="text-2xl font-bold text-light-blue-800">
                    זקוקים לעזרה בפרויקט שלכם?
                  </h3>
                  <p className="text-gray-700 max-w-2xl">
                    הצוות המקצועי שלנו כאן כדי לעזור לכם בכל שלב בדרך. צרו קשר לייעוץ חינם
                    והצעת מחיר ללא התחייבות.
                  </p>
                  <Link
                    to="/contact"
                    className="bg-light-blue-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-light-blue-800 transition-all duration-300"
                  >
                    צור קשר עכשיו
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleDetailPage;
