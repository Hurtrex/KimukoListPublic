const API_KEY = import.meta.env.VITE_API_KEY 
//la clée api a une limite de 20k request par mois
//important donc de faire en sorte que l'app ne spam pas les demandes!!!

export async function fetchGames(query = "") {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Erreur API")
  }

  return await response.json()
}

export async function fetchGameDetails(id){
    const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`

    const response = await fetch(url)
    if(!response.ok){
        throw new Error("Erreur API")
    }
    
    return await response.json()
}