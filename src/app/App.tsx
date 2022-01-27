import {
  Routes,
  Route
} from 'react-router-dom';

import { Header } from '../components/Header/header';
import { Home } from '../pages';
import { About } from '../pages';
import { Projects } from '../pages';
import { Contact } from '../pages';
import { Resume } from '../pages';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
