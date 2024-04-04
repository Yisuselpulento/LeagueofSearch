import { createContext, useState, useEffect } from 'react'
import { fetchData } from '../services/getChampions'

const ChampsContext = createContext()

const ChampsProvider = ({ children }) => {
  const [allChampions, setallChampions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (champ) => {
    if (favorites.some(fav => fav === champ)) {
      setFavorites(prev => prev.filter(fav => fav !== champ))
    } else {
      setFavorites(prev => [...prev, champ])
    }
  }

  useEffect(() => {
    const getAllChampions = async () => {
      const data = await fetchData()
      setallChampions(data)
    }
    getAllChampions()
  }, [])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredChampions = allChampions.filter(champion => {
    return champion && champion && champion.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <ChampsContext.Provider value={{
      allChampions,
      handleSearchChange,
      filteredChampions,
      searchTerm,
      favorites,
      addToFavorites

    }}
    >
      {children}
    </ChampsContext.Provider>
  )
}

export { ChampsProvider }
export default ChampsContext
