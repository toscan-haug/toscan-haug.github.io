import {
  HashRouter as Router,
  Routes,
  Route,
  Link, Outlet
} from "react-router-dom";

import HomePage from '../pages/Home';
import MusicPage from '../pages/Music';
import VideoPage from '../pages/Video';
import DrawingPage from '../pages/Drawing';

const App = () => {
  return <Router>
    <Routes>
      <Route path="/"         element={<Layout />}>
        <Route index          element={<HomePage />} />
        <Route path="music"   element={<MusicPage />} />
        <Route path="video"   element={<VideoPage />} />
        <Route path="drawing" element={<DrawingPage />} />
      </Route>
    </Routes>
  </Router>
}

const Layout = () => {
  return <div className="portfolio">
    <nav>
      <Link to="/"        >Home</Link> |{" "}
      <Link to="/music"   >Musique</Link> |{" "}
      <Link to="/video"   >Vidéo</Link> |{" "}
      <Link to="/drawing" >Animation</Link>
    </nav>
    <Outlet/>
  </div>
}

export default App;
