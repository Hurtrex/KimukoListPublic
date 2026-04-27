import { createContext, useState } from "react"
import { useEffect } from "react"

export const GameContext = createContext()

//were adding localStorage hoping its gonna work
export function GameProvider({ children }) {
  const [myGames, setMyGames] = useState(() => 
    {
      const saved = localStorage.getItem("myGames")
      return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
      localStorage.setItem("myGames", JSON.stringify(myGames))
    }, [myGames])

  const addGame = (game, status) => {
    const exists = myGames.find(g => g.id === game.id)
    if (exists) {
      setMyGames(myGames.map(g => 
        g.id === game.id ? {...g, status} : g
      ))
    } else {
      setMyGames([...myGames, {...game, status}])
    }
  }

  const removeGame = (id) => {
  setMyGames(myGames.filter(game => game.id !== id))
}

  return (
    <GameContext.Provider value={{ myGames, addGame, removeGame }}>
      {children}
    </GameContext.Provider>
  )
}