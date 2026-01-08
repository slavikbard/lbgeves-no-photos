import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const menuItems = [
    { label: 'בית', path: '/' },
    { label: 'אודותינו', path: '/about' },
    { label: 'השירותים שלנו', path: '/services' },
    { label: 'פרויקטים נבחרים', path: '/projects' },
    { label: 'מאמרים', path: '/blog' },
    { label: 'צור קשר', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'פייסבוק',
      icon: <FaFacebook size={28} />,
      url: 'https://www.facebook.com/lbgeves?locale=he_IL',
    },
    {
      name: 'אינסטגרם',
      icon: <FaInstagram size={28} />,
      url: 'https://www.instagram.com/l.b.geves?igsh=dmZ0aTFxNm9weXJp',
    },
    {
      name: 'טיקטוק',
      icon: <FaTiktok size={28} />,
      url: 'https://www.tiktok.com/@l.b.geves?is_from_webapp=1&sender_device=pc',
    },
  ];

  return (
    <footer className="bg-light-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">ניווט מהיר</h3>
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-light-blue-300 hover:underline transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">צור קשר</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>אנדריי: 0549252279</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>ישראל: 0534299625</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>L.b.geves2016@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>באר שבע, ישראל</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">עקבו אחרינו</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-12 h-12 rounded-full bg-white text-light-blue-800 flex items-center justify-center hover:scale-125 hover:bg-light-blue-300 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 space-y-4">
          <div className="text-center space-y-2">
            <p className="text-lg">© 2026 LBGEVES - כל הזכויות שמורות</p>
            <p className="text-sm opacity-80">
              נבנה ע״י{' '}
              <a
                href="https://slavx.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-blue-300 hover:text-white font-semibold transition-colors underline"
              >
                SLAVX
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <a href="#" className="hover:opacity-100 hover:underline transition-all">
              מדיניות פרטיות
            </a>
            <span>|</span>
            <a href="#" className="hover:opacity-100 hover:underline transition-all">
              תנאי שימוש
            </a>
            <span>|</span>
            <a href="#" className="hover:opacity-100 hover:underline transition-all">
              הצהרת נגישות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
