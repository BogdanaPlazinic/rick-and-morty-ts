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
    <>
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

      <AuthProvider>
        <Router>
          <main className={styles.App}>
            <Routes>
              <Route path="/" element={<LogIn />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/favourites" element={<Favourites />} />
              </Route>
            </Routes>
          </main>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
