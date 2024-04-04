import useItem from '../hooks/useItem'

const ItemsDetails = () => {
  const { itemsPick } = useItem()

  console.log(itemsPick)
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-5'>
        <img
          className='border border-yellow-400 rounded '
          src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/item/${itemsPick.image.full}`}
        />
        <p className='font-bold text-2xl'>{itemsPick.name}</p>

      </div>
      <p className='text-yellow-400 font-bold'>{itemsPick.gold.base}</p>

    </div>
  )
}

export default ItemsDetails
