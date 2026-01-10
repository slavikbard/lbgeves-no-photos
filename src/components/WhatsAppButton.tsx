import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+972534299625';
  const message = 'שלום, אני מעוניין/ת לקבל מידע נוסף על השירותים שלכם';

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="צור קשר בוואטסאפ"
    >
      <FaWhatsapp size={36} />
    </a>
  );
};

export default WhatsAppButton;
