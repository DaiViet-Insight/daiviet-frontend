import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Lecture from "./views/Lecture/Lecture";
import LectureDetail from "./views/LectureDetail/LectureDetail";
import Blog from "./views/Blog/Blog";
import CreatePost from "./views/CreatePost/CreatePost";
import Comment from "./views/Comment/Comment";
import Navbar from "./views/containers/Navbar/Navbar";
import Profile from "./views/Profile/Profile";
import NotFound from "./views/NotFound/NotFound";
import { PostProvider } from "./contexts/PostContext";
import { AuthenticationForm } from "./views/containers";

import { UserProvider } from "./contexts/UserContext";

function App() {
  const [isPageNotFound, setIsPageNotFound] = useState(false);

  const handleSetIsPageNotFound = (value) => {
    setIsPageNotFound(value);
  };

  return (
    <Router basename="/reddit-blog-clone">
      {isPageNotFound ? null : <Navbar />}
      <Routes>
        <Route path="/lectures" element={<Lecture />} />
        <Route path="/lectures/:id" element={<LectureDetail />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route 
          path="posts/:id/comments" 
          element={
            <PostProvider>
              <Comment />
            </PostProvider>
          } />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="*" element={<NotFound setIsPageNotFound={handleSetIsPageNotFound} />} />
      </Routes>
      <UserProvider>
        <div className="rootAuthenticationForm">
          <AuthenticationForm />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
