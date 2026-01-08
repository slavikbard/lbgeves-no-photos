import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'פייסבוק',
      icon: <FaFacebook size={60} />,
      url: 'https://www.facebook.com/lbgeves?locale=he_IL',
      text: 'עקבו אחרינו בפייסבוק',
      color: '#1877F2',
    },
    {
      name: 'אינסטגרם',
      icon: <FaInstagram size={60} />,
      url: 'https://www.instagram.com/l.b.geves?igsh=dmZ0aTFxNm9weXJp',
      text: 'הצטרפו אלינו באינסטגרם',
      color: '#E4405F',
    },
    {
      name: 'טיקטוק',
      icon: <FaTiktok size={60} />,
      url: 'https://www.tiktok.com/@l.b.geves?is_from_webapp=1&sender_device=pc',
      text: 'צפו בנו בטיקטוק',
      color: '#000000',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-light-blue-800 mb-4">
            רשתות חברתיות
          </h2>
          <p className="text-xl text-gray-600">
            עקבו אחרינו ברשתות החברתיות
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-28 h-28 rounded-full bg-white border-3 border-light-blue-300 flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-115 hover:bg-light-blue-300 transition-all duration-300 group-hover:border-light-blue-800">
                <div className="text-light-blue-300 group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>
              </div>
              <p className="text-gray-700 font-medium group-hover:text-light-blue-800 transition-colors duration-300">
                {social.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
