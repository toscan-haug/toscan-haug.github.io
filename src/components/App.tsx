import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  LinkProps,
  useResolvedPath,
  useMatch,
} from 'react-router-dom';

import HomePage from '../pages/Home';
import MusicPage from '../pages/Music';
import VideoPage from '../pages/Video';
import DrawingPage from '../pages/Drawing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="music" element={<MusicPage />} />
          {/* <Route path="video" element={<VideoPage />} /> */}
          <Route path="drawing" element={<DrawingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

const CustomNavLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className={match ? 'nav-link active-link' : 'nav-link'}>
      <Link to={to} {...props}>
        <span className="puce">{match ? '◉' : ''}</span>
        <span>{children}</span>
      </Link>
    </li>
  );
};

const Layout = () => {
  return (
    <div className="portfolio">
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <CustomNavLink to="/music">Musique</CustomNavLink>
          {/* <CustomNavLink to="/video">Vidéo</CustomNavLink> */}
          <CustomNavLink to="/drawing">Animation</CustomNavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
