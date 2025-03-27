import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from "./pages/LogIn";
import { AuthProvider } from "./context/AuthProvider";
import CharactersPage from "./pages/CharactersPage";
import Favourites from "./pages/Favourites";
import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={`${styles.App}`}>
      <AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/characters" element={<CharactersPage />} />
              <Route path="/favourites" element={<Favourites />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </main>
  );
};

export default App;
