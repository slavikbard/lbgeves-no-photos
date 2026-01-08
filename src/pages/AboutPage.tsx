import Breadcrumb from '../components/Breadcrumb';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import SocialMedia from '../components/SocialMedia';

const AboutPage = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'אודותינו' }]} />
      <div className="pt-20">
        <About />
        <Testimonials />
        <SocialMedia />
      </div>
    </>
  );
};

export default AboutPage;
