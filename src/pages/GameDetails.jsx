import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { fetchGameDetails } from "../services/api"
import { GameContext } from "../context/GameContext"
import "../styles/gamedetails.css"

function GameDetails() {
  const { id } = useParams()

  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState("playing")

  const { addGame } = useContext(GameContext)

  useEffect(() => {
    setLoading(true)

    fetchGameDetails(id)
      .then(data => {
        setGame(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Chargement...</p>
  if (error) return <p>Erreur: {error}</p>

  return (
    <div className="details-container">

    <div className="details-header">

      <img
        src={game.background_image}
        className="details-img"
      />

      <div className="details-info">
        <h1>{game.name}</h1>

        <p> {game.rating}</p>

        <div className="details-meta">
          <p><strong>Date :</strong> {game.released}</p>

          <p>
            <strong>Genres :</strong>{" "}
            {game.genres.map(g => g.name).join(", ")}
          </p>

          <p>
            <strong>Développeur :</strong>{" "}
            {game.developers?.map(d => d.name).join(", ")}
          </p>

          <p>
            <strong>Publisher :</strong>{" "}
            {game.publishers?.map(p => p.name).join(", ")}
          </p>
        </div>
      </div>
    </div>

    <div className="description">
      {cleanEnglishText(game.description_raw) || "No description available."}
    </div>

    <div className="actions">
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="playing"> En cours</option>
        <option value="completed"> Terminé</option>
        <option value="abandoned"> Abandonné</option>
      </select>

      <button onClick={() => addGame(game, status)}>
        Ajouter au catalogue
      </button>
    </div>

  </div>
  )
}

//function fait par l'ai pour garder seulement le texte en anglais cat je ne savais pas comment
function cleanEnglishText(text) {
  if (!text) return ""

  return text
    .split("\n")
    .filter(line => /^[\x00-\x7F]*$/.test(line)) // ASCII seulement
    .join("\n")
}

//important pour la description on a toute la description, mais le problème étant que on voit
//aussi le reste des langues

export default GameDetails