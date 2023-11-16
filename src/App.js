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
                path="/posts"
                element={
                  <PostProvider>
                    <NotFacebook />
                  </PostProvider>
                }
              ></Route>
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
