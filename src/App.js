import { Fade, Rotate, Zoom } from 'react-reveal';
import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Counter from './Components/Counter';
import ExploreFood from './Components/ExploreFood';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Newsletter from './Components/Newsletter';
import StoryMenu from './Components/StoryMenu';
import Testimonial from './Components/Testimonial';


function App() {
  return (
    <>
    <Header />
    <Fade left>
    <Banner />
    </Fade>
    <Zoom>
    <Counter />
    </Zoom>
    <About />
    <StoryMenu />
    <Fade left>
    <ExploreFood />
    </Fade>
    <Zoom>
    <Testimonial />
    </Zoom>
    <Faq />
    <Zoom>
    <Newsletter />
    </Zoom>
    <Footer />
    
    </>
  );
}

export default App;
