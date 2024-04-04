import { Link } from 'react-router-dom'
import usechamps from '../hooks/useChamps'
import Spinner from './Spinner'

const CardChamp = ({ champion }) => {
  const { favorites, addToFavorites } = usechamps()

  const isFavorite = favorites.some(fav => fav === champion)

  return (
    <div>

      {champion
        ? <Link
            to={`../champion/${champion}`}
          >
          <img
            className='md:w-[100px] w-[60px]'
            src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${champion}.png`}
          />
          <p>{champion}</p>

          </Link>
        : <Spinner />}
      <button
        onClick={() => addToFavorites(champion)}
        className={`mt-2 px-3 py-1 rounded focus:outline-none focus:ring focus:ring-indigo-300 block md:w-full  w-[59px] ${isFavorite ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-indigo-700 text-white hover:bg-indigo-900'}`}
      >
        {isFavorite ? 'Quitar.' : 'Agreg.'}
      </button>
    </div>
  )
}

export default CardChamp
