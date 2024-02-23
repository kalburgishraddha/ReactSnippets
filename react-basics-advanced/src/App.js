import './App.css';
import Home from './Home';
import About from './About';
import Settings from './Settings';
import NotFound from './NotFound';
import PostPage from './Posts';
import PostDynamic from './PostDynamic';
import UseStateDemo from './ReactHooks/UseStateDemo';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UseStateObjDemo from './ReactHooks/UseStateObjDemo';
import AllList from './ReactHOC/AllList';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <nav>
  <Link to="/">Home</Link><br/>
  <Link to="/about">About</Link><br/>
  <Link to="/settings">Settings</Link><br/>
  <Link to="/posts">Posts</Link><br/>
  <Link to="/useStateCounter">Hooks useState counter</Link><br/>
  <Link to="/useStateObject">Hooks useState object</Link><br/>
  <Link to="/hoc">HOC Demo</Link>
</nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/posts" element={<PostPage/>}></Route>
          <Route path="/blog/:id" element={<PostDynamic/>}></Route>
          <Route path="/useStateCounter" element={<UseStateDemo/>}></Route>
          <Route path="/useStateObject" element={<UseStateObjDemo/>}></Route>
          <Route path="/hoc" element={<AllList/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
