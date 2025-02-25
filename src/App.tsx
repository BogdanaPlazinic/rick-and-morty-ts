import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import LogIn from "./pages/LogIn"
import { AuthProvider } from "./context/AuthProvider"
import CharactersPage from "./pages/CharactersPage"

import styles from "./App.module.scss"

const App: React.FC = () => {

  return (
    <main className={`${styles.App}`}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/characters" element={<CharactersPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </main>
  )
}

export default App
