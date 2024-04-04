import CardItems from '../components/CardItems'
import useItem from '../hooks/useItem'
import { FilterIcon } from '../icons/icons'

export const Items = () => {
  const { filteredItems, handleSearchChange, searchTerm } = useItem()

  return (
    <div className='flex flex-col gap-5 w-full'>
      <div className='max-w-[1000px]'>
        <p className='text-3xl font-bold'>League of Legends Items</p>
        <p className='text-xl'>All in-game items for League of Legends, including mythics, legendary, starting items, and consumables. Up-to-date stats, passives, actives, and gold costs</p>
      </div>
      <div className='flex gap-5 items-center'>
        <FilterIcon color='white' />
        <p className='font-bold hidden md:block'>Filtrar</p>
        <input
          type='search'
          className='h-[40px] w-[300px] text-gray-700 p-5 border border-gray-300 rounded'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search items...'
        />
      </div>
      <div className='flex gap-5 flex-wrap p-5 m-5 dark:bg-[#1b1b3a] bg-gray-100 h-[1000px] md:w-[1500px] overflow-auto scrollbar scrollbar-thumb-indigo-700 w-full border-[1px] dark:border-gray-700 border-gray-200'>
        {filteredItems?.map((item, i) => (
          <CardItems item={item} key={i} />
        ))}

      </div>
    </div>

  )
}
