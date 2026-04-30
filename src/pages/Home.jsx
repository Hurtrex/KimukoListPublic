import { useEffect, useState } from "react"
import { fetchGames } from "../services/api"
import { Link } from "react-router-dom"
import "../styles/home.css"
import GameCard from "../components/GameCard"

function Home() {
  const [query, setQuery] = useState("")
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true)

      fetchGames(query)
        .then(data => {
          setGames(data.results)
          setLoading(false)
        })
        .catch(err => {
          setError(err.message)
          setLoading(false)
        })
    }, 500)

    return () => clearTimeout(timeout)
  }, [query])

  return (
    <div className="container">
  <h1 className="home-title"> Explorer</h1>

  <input
    className="search-bar"
    placeholder="Rechercher..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />

      {loading && <p>Chargement...</p>}
      {error && <p>Erreur: {error}</p>}

  <div className="game-grid">
    {games.map(game => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>
</div>
  )
}

export default Home