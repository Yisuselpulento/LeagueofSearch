import axios from 'axios'

export const fetchDataItems = async () => {
  try {
    const response = await axios('https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/item.json')
    const { data } = response.data
    console.log(data)
    /*  const championsArray = Object.values(data)
    const championCreate = championsArray.map(champ => (champ.id)
    ) */
    /* return championCreate */
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    throw error
  }
}

fetchDataItems()
console.log('ho')
