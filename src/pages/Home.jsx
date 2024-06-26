/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable import/no-absolute-path */
import SearchBar from '../components/SearchBar'
import useTheme from '../hooks/useTheme'
import lollogo from '/images/lollogo.webp'
import lollogoDark from '/images/lollogoDark.webp'

const Home = () => {
  const { theme } = useTheme()

  return (
    <div className='relative flex w-full min-h-[1000px]'>
      <div className='absolute inset-0 bg-hero-movile md:bg-hero-pattern bg-cover bg-center bg-no-repeat opacity-30' />
      <div className='relative z-10 p-5 md:p-16  w-full  flex flex-col md:flex-row items-center text-center md:justify-between gap-10 justify-center'>
        <div className='w-full flex justify-center items-center flex-col gap-7'>
          <SearchBar />
          {theme === 'dark' ? <img src={lollogo} alt='logo de league of legends' className='w-[200px] md:w-[400px] h-[100px] md:h-[150px]' /> : <img src={lollogoDark} alt='logo de league of legends' className='w-[200px] md:w-[400px] h-[100px] md:h-[150px]' />}

        </div>

        <div className=' w-full flex items-center justify-center opacity-80 '>
          <video autoPlay controls={false} loop muted disablePictureInPicture disableRemotePlayback width='500'>
            <source src='/videos/video2.mp4' type='video/mp4' />

          </video>
        </div>
      </div>
    </div>
  )
}

export default Home
