import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { UsersProvider } from "./context/UsersContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import IsAuth from "./authentication/IsAuth";
import NotFacebook from "./pages/NotFacebook";
import { PostProvider } from "./context/PostsConext";
import Profile from "./pages/Profile";
import PostDetails from "./pages/PostDetails";


function App() {
  return (
    <div className="App">
      <UsersProvider>
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/posts/*"
                element={
                  <PostProvider>
                    <Routes>
                      <Route
                        index
                        element={
                          <NotFacebook />
                        }
                      />
                      <Route
                        path="profile/:id"
                        element={
                            <Profile />
                        }
                      />
                      <Route
                        path="post/:id"
                        element={
                            <PostDetails />
                        }
                      />
                    </Routes>
                  </PostProvider>
                }
              />
              <Route
                path="/home"
                element={
                  <IsAuth>
                    <Home />
                  </IsAuth>
                }
              />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
