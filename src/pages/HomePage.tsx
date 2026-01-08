import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Articles from '../components/Articles';
import SocialMedia from '../components/SocialMedia';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Articles />
      <SocialMedia />
      <Contact />
    </main>
  );
};

export default HomePage;
