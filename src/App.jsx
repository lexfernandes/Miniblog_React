//css module
import "./App.css";

// features
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// função firebase
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//navbar
import NavBar from "./components/NavBar";

//import context
import { AuthProvider } from "./context/AuthContext";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/CreatePost/CreatePost";
import Search from "./pages/Search/Search";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <div className="App">
        <AuthProvider value={{ user }}>
          <BrowserRouter>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<Search />} />
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/register"
                  element={!user ? <Register /> : <Navigate to="/" />}
                />
                <Route
                  path="/dashboard"
                  element={user ? <Dashboard /> : <Navigate to="/login" />}
                />
                <Route
                  path="/posts/create"
                  element={user ? <CreatePost /> : <Navigate to="/login" />}
                />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
