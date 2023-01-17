import './App.css';
import Home from './mobile/pages/Home/home'
import MediaQuery from 'react-responsive'
import { Routes, Route } from "react-router-dom";
import Contact from './mobile/pages/Contact/contact';
import Teaching from './mobile/pages/Teaching/teaching';
import Info from './mobile/pages/Info/info';
import THome from './tablet/pages/Home/home';
import TContact from './tablet/pages/Contact/contact';
import TTeaching from './tablet/pages/Teaching/teaching';
import TInfo from './tablet/pages/Info/info';
import DHome from './desktop/pages/Home/home';
import DContact from './desktop/pages/Contact/contact';
import DTeaching from './desktop/pages/Teaching/teaching';
import DInfo from './desktop/pages/Info/info';

function App() {

  return (
    <div className="App">


      {/* Mobile */}
      <MediaQuery maxWidth={599}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="info" element={<Info />} />

        </Routes>
      </MediaQuery>
      {/* Tablet */}
      <MediaQuery minWidth={600} maxWidth={900}>
        <Routes>
          <Route exact path="/" element={<THome />} />
          <Route path="contact" element={<TContact />} />
          <Route path="teaching" element={<TTeaching />} />
          <Route path="info" element={<TInfo />} />

        </Routes>
      </MediaQuery>
      {/* Desktop */}
      <MediaQuery minWidth={901}>
        <Routes>
          <Route exact path="/" element={<DHome />} />
          <Route path="contact" element={<DHome />} />
          <Route path="teaching" element={<DHome />} />
          <Route path="info" element={<DHome />} />

        </Routes>
      </MediaQuery>

    </div>
  );
}

export default App;
