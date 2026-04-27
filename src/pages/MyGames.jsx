import { useContext, useState } from "react"
import { GameContext } from "../context/GameContext"
import "../styles/mygames.css"
import GameCard from "../components/GameCard"

function MyGames() {
  const { myGames, removeGame } = useContext(GameContext)

  const [filter, setFilter] = useState("all")

  const filteredGames = myGames.filter(game =>
    filter === "all" ? true : game.status === filter)

  return (
    <div className="container">
  <h1>📚 Mon catalogue</h1>

  <div className="filters">
    <button onClick={() => setFilter("all")}>Tous</button>
    <button onClick={() => setFilter("playing")}>En cours</button>
    <button onClick={() => setFilter("completed")}>Terminés</button>
    <button onClick={() => setFilter("abandoned")}>Abandonnés</button>
  </div>

  <div className="game-grid">
    {filteredGames.map(game => (
      <GameCard key={game.id} game={game} onRemove={removeGame} />
    ))}
  </div>
</div>
  )
}

export default MyGames