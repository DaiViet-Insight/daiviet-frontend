import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Lecture from "./views/Lecture/Lecture";
import LectureCreate from "./views/LectureCreate/LectureCreate";
import LectureDetail from "./views/LectureDetail/LectureDetail";
import Blog from "./views/Blog/Blog";
import CreatePost from "./views/CreatePost/CreatePost";
import Comment from "./views/Comment/Comment";
import Navbar from "./views/containers/Navbar/Navbar";
import ModSite from "./views/ModSite/ModSite";
import Profile from "./views/Profile/Profile";
import NotFound from "./views/NotFound/NotFound";
import { PostProvider } from "./contexts/PostContext";
import { AuthenticationForm, ChatBox } from "./views/containers";

import { UserProvider } from "./contexts/UserContext";
import LeftNav from "./views/containers/LeftNav/LeftNav";

import Footer from "./views/containers/footer/Footer";

function App() {
  const [isPageNotFound, setIsPageNotFound] = useState(false);

  const handleSetIsPageNotFound = (value) => {
    setIsPageNotFound(value);
  };

  return (
    <Router basename="/reddit-blog-clone">
      <UserProvider 
        model={
          <div className="rootAuthenticationForm">
            <AuthenticationForm />
          </div>
        }
      >
        {/* {isPageNotFound ? null : 
          <Navbar />
        } */}
        <Navbar />
       
        <div className="slide-bar-wrapper relative">
          {/* <LeftNav className="absolute overflow-y-auto"/> */}
          <Routes>
            <Route path="/lectures" element={<Lecture />} />
            <Route path="/lectures/create" element={<LectureCreate />} />
            <Route path="/lectures/:id" element={<LectureDetail />} />
            <Route path="/posts" element={<Blog />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/mod" element={<ModSite />} />
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
        </div>
        
      </UserProvider>
      <div className="rootChatBox">
        <ChatBox />
      </div>
     
      <section className="">
        <Footer />
      </section>
      
    </Router>
  );
}

export default App;
