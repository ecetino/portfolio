import { Home } from '../pages';
import { About } from '../pages';
import { Projects } from '../pages';
import { Contact } from '../pages';

import { Header } from '../components/Header/header';

import {
  Routes,
  Route
} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
