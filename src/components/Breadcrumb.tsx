import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="bg-gray-50 py-4 border-b">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link
              to="/"
              className="text-light-blue-300 hover:text-light-blue-800 transition-colors"
            >
              בית
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronLeft size={16} className="text-gray-400 rotate-180" />
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-light-blue-300 hover:text-light-blue-800 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-600 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
