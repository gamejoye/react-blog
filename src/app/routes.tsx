import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import Home from './pages/Home';
const Home = lazy(() => import('./pages/Home'));
// import App from './App';
const App = lazy(() => import('./App'));
// import Posts from './pages/Posts';
const Posts = lazy(() => import('./pages/Posts'));
// import Archives from './pages/Archives';
const Archives = lazy(() => import('./pages/Archives'));
// import Post from './pages/Post';
const Post = lazy(() => import('./pages/Post'));
// import Tags from './pages/Tags';
const Tags = lazy(() => import('./pages/Tags'));
// import AboutMe from './pages/AboutMe';
const AboutMe = lazy(() => import('./pages/AboutMe'));
// import GithubAuthCallback from './pages/GithubAuthCallback';
const GithubAuthCallback = lazy(() => import('./pages/GithubAuthCallback'));
// import ArticleDetails from './pages/ArticleDetails';
const ArticleDetails = lazy(() => import('./pages/ArticleDetails'));

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<Post />}></Route>
        <Route path="archives" element={<Archives />}></Route>
        <Route path="tags" element={<Tags />}></Route>
        <Route path="about/i" element={<AboutMe />} />
        <Route path="article-details" element={<ArticleDetails />} />
      </Route>
      <Route path="/auth/github/callback" element={<GithubAuthCallback />} />
    </Route>,
  ),
);

export default routers;
