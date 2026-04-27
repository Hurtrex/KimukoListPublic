import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GameDetails from "./pages/GameDetails"
import MyGames from "./pages/MyGames"
import Navbar from "./components/Navbar"

function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails/>} />
        <Route path="/my-games" element={<MyGames/>} />
      </Routes>
    </>
  )
}

export default App
