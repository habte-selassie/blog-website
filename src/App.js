import { BrowserRouter as Router , Route,Routes} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';

import NavBar from './components/NavBar';

function App() {
  return ( 
   <Router>
    <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/about'  element={<About/>} />
        <Route exact path='/articles-list'  element={<ArticleList/>} />
        <Route exact path='/article/:name'  element={<Article/>} />
        </Routes> 
      </div> 
    
  </Router>
  );
}
export default App
