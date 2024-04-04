import { NavLink, Outlet, useLocation } from 'react-router-dom'
// eslint-disable-next-line import/no-absolute-path
import logo from '/images/logobw.webp'
import { MoonIco, NavbarIco, SunIco } from '../icons/icons'
import { useState } from 'react'
import useTheme from '../hooks/useTheme'
import instaIco from '../assets/instagram.svg'

export const Layout = () => {
  const [activeMenu, setactiveMenu] = useState(true)
  const { handleChangeMode, theme } = useTheme()

  const handleMenuActive = () => {
    setactiveMenu(!activeMenu)
  }

  const params = useLocation()

  const navLinks = [
    { to: '/', text: 'Inicio' },
    { to: '/champions', text: 'Campeones' },
    { to: '/items', text: 'Items' },
    { to: '/about', text: 'Sobre Nosotros' },
    { to: '/favorites', text: 'Favoritos' },
    { to: '/register', text: 'Registrate' }
  ]

  return (
    <div>
      <button
        onClick={handleMenuActive}
        className='md:hidden p-3 rounded-full m-2 dark:bg-primary bg-indigo-700 fixed z-30'
      >
        <NavbarIco color={theme === 'light' ? 'black' : 'white'} />
      </button>

      <header className={activeMenu ? 'hidden' : 'fixed flex md:justify-between z-20 p-4 dark:bg-primary bg-gray-100 shadow-lg text-lg md:items-center  rounded flex-col md:flex-row gap-4 w-[250px] md:w-full top-16 left-2 md:static  '}>
        <NavLink to='/'>
          <img className='md:w-[50px] w-10 shadow-lg rounded-full' src={logo} alt='logo principal de la pagina' />
        </NavLink>

        <nav>
          <ul className='flex md:flex-row md:gap-3 flex-col gap-7 md:items-center'>
            {navLinks.map((link, index) => (
              <li key={index} className='flex justify-center items-center h-[50px] '>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'font-bold bg-indigo-700 p-3  text-white text-sm w-full h-full flex items-center md:justify-center md:w-[90px] md:h-[60px]' : 'font-bold text-sm dark:text-[#7777c2] text-gray-500 p-2  dark:hover:bg-indigo-900 hover:bg-gray-200  w-full flex items-center md:justify-center md:w-[90px] h-[60px] md:h-[60px]'}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
            <button
              onClick={handleChangeMode}
              className='dark:hover:bg-indigo-900 hover:bg-gray-200 hover:rounded flex items-center justify-center'
              style={{ width: '70px', height: '40px' }}
            >
              {theme === 'light' ? <MoonIco color='black' /> : <SunIco color='#7777c2' />}
            </button>
          </ul>
        </nav>
      </header>
      <main className={`min-h-[800px] flex items-center justify-center  ${params.pathname !== '/' && 'md:px-20 px-4 pt-16'}`}>
        <Outlet />
      </main>
      <footer className='dark:bg-primary p-10  flex justify-between md:h-[300px] bg-gray-200 shadow-lg flex-col gap-10 md:flex-row items-center border-[1px] border-b-0 border-gray-300 dark:border-gray-800'>
        <p className='max-w-[400px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam explicabo, rerum ipsa beatae suscipit totam labore ea repudiandae! Repudiandae id consequuntur quaerat voluptatum similique? Reiciendis accusamus et alias aliquam dolorem?
          Placeat quia a reiciendis labore repellat. Accusamus perspiciatis ad officiis quisquam expedita tempore impedit ex beatae quos, repellendus error corrupti qui nam necessitatibus amet ducimus? Sunt quam est totam perspiciatis!

        </p>
        <p className='md:w-[550px]'>Derechos reservados by Monsster</p>
        <a href='https://www.instagram.com/_.monsster._/'>

          <img src={instaIco} className='w-[30px] ' />
        </a>

      </footer>
    </div>
  )
}
