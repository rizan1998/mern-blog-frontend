import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="/blog/:id" element={<ArticleDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
