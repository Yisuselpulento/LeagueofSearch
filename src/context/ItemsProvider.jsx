import { createContext, useState, useEffect } from 'react'
import { fetchDataItems } from '../services/getChampions'

const ItemsContext = createContext()

const ItemsProvider = ({ children }) => {
  const [allItems, setallItems] = useState([])
  const [itemsPick, setitemPick] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const saveItem = (item) => {
    setitemPick(item)
  }

  useEffect(() => {
    const getAllItems = async () => {
      const data = await fetchDataItems()
      setallItems(data)
    }
    getAllItems()
  }, [])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredItems = allItems.filter(item => {
    return item && item && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return (
    <ItemsContext.Provider value={{
      itemsPick,
      saveItem,
      allItems,
      filteredItems,
      handleSearchChange,
      searchTerm
    }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export { ItemsProvider }
export default ItemsContext
