import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import App from './App';
import Posts from './pages/Posts';
import Archives from './pages/Archives';
import Post from './pages/Post';
import Tags from './pages/Tags';
import AboutMe from './pages/AboutMe';
import GithubAuthCallback from './pages/GithubAuthCallback';
import ArticleDetails from './pages/ArticleDetails';
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
