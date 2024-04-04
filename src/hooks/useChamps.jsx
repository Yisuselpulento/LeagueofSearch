import { useContext } from 'react'
import ChampsContext from '../context/ChampsProvider'

const usechamps = () => {
  const context = useContext(ChampsContext)
  return context
}

export default usechamps
