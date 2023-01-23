import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Services from './pages/Services';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/uitest" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/uitest/blogs" element={<Blogs />} />
          <Route path="/uitest/team" element={<Team />} />
          <Route path="/uitest/services" element={<Services />} />
          <Route path="/uitest/contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
