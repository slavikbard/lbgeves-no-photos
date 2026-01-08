import Breadcrumb from '../components/Breadcrumb';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'צור קשר' }]} />
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
