import React from 'react'
import { Link } from 'react-router-dom'
import useItem from '../hooks/useItem'

const CardItems = ({ item }) => {
  const { saveItem } = useItem()

  return (
    <Link
      to={`../item/${item.image.full}`}
      onClick={() => saveItem(item)}
    >
      <img
        className='w-[50px]'
        src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/item/${item.image.full}`}
      />
    </Link>
  )
}

export default CardItems
