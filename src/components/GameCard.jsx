import { Link } from "react-router-dom"
import "../styles/gamecard.css"

function GameCard({ game, onRemove }) {
  return (
    <div className="game-card">
      <Link to={`/game/${game.id}`}>
        <img src={game.background_image} alt={game.name} />
      </Link>

      <div className="game-card-content">
        <div className="game-card-title">{game.name}</div>

        {game.rating && (
          <div className="game-card-rating">⭐ {game.rating}</div>
        )}

        {game.status && (
          <div className={`status-${game.status}`}>
            {game.status}
          </div>
        )}

        {onRemove && (
          <button onClick={() => onRemove(game.id)}>
            Supprimer
          </button>
        )}
      </div>
    </div>
  )
}

export default GameCard