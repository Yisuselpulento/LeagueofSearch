import CardChamp from '../components/CardChamp'
import usechamps from '../hooks/useChamps'
import { FilterIcon } from '../icons/icons'

export const Champions = () => {
  const { filteredChampions, handleSearchChange, searchTerm } = usechamps()

  return (
    <div className='flex flex-col gap-6 w-full '>
      <div>
        <p className='text-3xl font-bold'>LoL Champions Search</p>
        <p className='text-lg'>Descubre la mejor build para cada Campeon</p>
      </div>
      <div className='flex gap-5 items-center'>
        <FilterIcon color='white' />
        <p className='font-bold hidden md:block'>Filtrar</p>
        <input
          type='search'
          className='h-[40px] md:w-[300px] text-gray-700 p-5 border border-gray-300 rounded'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Buscar campeón...'
        />
      </div>

      <div className='flex gap-5 flex-wrap  p-5 m-5  dark:bg-[#1b1b3a] bg-gray-100 h-[1000px] w-full md:w-[1500px] overflow-auto scrollbar scrollbar-thumb-indigo-700 rounded border-[1px] dark:border-gray-700 border-gray-200 shadow '>
        {filteredChampions?.map((champ, i) => (
          <CardChamp champion={champ} key={i} />
        ))}
      </div>

    </div>

  )
}
