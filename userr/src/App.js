import { Routes, Route, Link, useRoutes } from "react-router-dom";
import "./App.css";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import UserCommnets from "./components/UserCommnets";
import UserDetail from "./components/UserDetail";
import Users from "./components/Users";
import Home from "./pages/Home";

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<Users/>} />
      <Route path="/users/:usersId" element={<UserDetail/>} />
      <Route path="/comments" element={<Comments/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/posts/:postId" element={<UserCommnets/>}/>
     </Routes>
    </div>
  );
}

export default App;
