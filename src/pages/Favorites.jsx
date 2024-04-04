import React from 'react'
import usechamps from '../hooks/useChamps'
import CardChamp from '../components/CardChamp'

const Favorites = () => {
  const { favorites } = usechamps()
  return (
    <div className='flex flex-wrap  gap-5'>
      {favorites.length === 0
        ? (
          <p className='text-gray-700 font-bold text-lg dark:text-white'>No tienes ningun campeon en favoritos aún.</p>
          )
        : (

            favorites.map((champ, i) => (
              <CardChamp key={i} champion={champ} />
            ))
          )}
    </div>
  )
}

export default Favorites
