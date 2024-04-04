/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchChampionDetails } from '../services/getChampions'
import Spinner from '../components/Spinner'

const ChampionDetails = () => {
  const [champ, setChamp] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const getChamp = async () => {
      const champDetail = await fetchChampionDetails(id)
      console.log(champDetail)
      setChamp(champDetail)
    }

    getChamp()
  }, [])

  return (
    <div>

      {champ
        ? <div className='flex flex-col gap-5 w-screen md:w-full text-white '>
          <Link
            className=' hover:text-indigo-500 w-[20px] pl-3'
            to='/champions'
          >Atras</Link>
          <div className='flex flex-col gap-5 relative shadow-lg'>
            {/* Fondo semitransparente */}
            <div className='absolute inset-0 bg-black opacity-90 rounded-lg' />

            {/* Contenido */}
            <div className=' p-10 bg-cover bg-no-repeat rounded-lg relative z-10' style={{ backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg')` }}>
              <div className='flex gap-5'>

                <img
                  className='border border-yellow-500 rounded h-[150px]'
                  src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${champ.id}.png`}
                />
                <div className='flex flex-col gap-3'>
                  <p className='text-3xl font-bold'> {champ.name}</p>
                  <div className='flex gap-5 flex-wrap'>
                    {champ.spells?.map((spell, i) => (
                      <img
                        className='w-[50px]'
                        key={i}
                        src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/${spell.image.full}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p>{champ.lore}</p>
            </div>
          </div>

          <div className='flex gap-5 overflow-auto w-screen md:w-[1000px] scrollbar scrollbar-thumb-indigo-700 p-4 shadow-lg'>
            {champ.skins?.map((skin, i) => (

              <img
                className='w-[150px] border border-yellow-300 rounded'
                key={i}
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_${skin.num}.jpg`}
              />

            ))}
          </div>
        </div>
        : <Spinner />}
    </div>

  )
}

export default ChampionDetails
