import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { MainPage } from "./pages/MainPage";
import { UsersPage } from "./pages/UsersPage";
import { PostsPage } from "./pages/PostsPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
