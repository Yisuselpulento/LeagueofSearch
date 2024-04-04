import { useContext } from 'react'
import ItemsContext from '../context/ItemsProvider'

const useItem = () => {
  const context = useContext(ItemsContext)
  return context
}

export default useItem
