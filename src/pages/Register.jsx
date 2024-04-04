/* eslint-disable import/no-absolute-path */
import { useState } from 'react'
import Alert from '../components/Alert'
import victoryLogo from '/images/victory.webp'

const Register = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
    repeatPassword: '',
    email: ''
  })
  const [alert, setAlert] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}

    // Validación de campos vacíos
    for (const key in formData) {
      if (formData[key] === '') {
        setAlert({
          msg: 'Todos los campos son obligatorios ',
          error: true
        })

        return
      }
    }

    // Validación de usuario único y longitud máxima de 10 caracteres
    if (formData.usuario.length > 10 || formData.usuario.length < 4) {
      setAlert({
        msg: 'Usuario no puede tener más de 10 caracteres o menos de 4',
        error: true
      })
      return
    }

    // Validación de contraseñas coincidentes y longitud máxima de 20 caracteres
    if (formData.password !== formData.repeatPassword) {
      setAlert({
        msg: 'Las contraseñas no coinciden',
        error: true
      })
      return
    }
    if (formData.password.length > 20 || formData.password.length < 4) {
      setAlert({
        msg: 'La contraseña no puede tener más de 20 caracteres o menos de 4',
        error: true
      })
      return
    }

    // Validación de email único y formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setAlert({
        msg: 'Email no es válido',
        error: true
      })
      return
    }

    // Establecer errores si los hay
    if (Object.keys(errors).length === 0) {
      setAlert({
        msg: 'Registro exitoso',
        error: false
      })
    }
  }
  return (
    <div className='flex flex-col md:flex-row justify-between w-[1200px] items-center gap-10 m-10'>
      <div className='dark:bg-[#1b1b3a] bg-gray-200 w-full rounded p-10 md:p-14 md:w-[500px] flex flex-col gap-4 dark:text-indigo-100 '>
        <div>
          <p>Bienvenido a League Search</p>
          <p className='text-3xl font-bold'>Create una cuenta</p>
        </div>
        <form
          className='  flex flex-col gap-8 shadow-lg  '
          onSubmit={handleSubmit}
        >
          <div className='dark:text-indigo-100 text-gray-500'>
            <label className='block   pb-2'>Usuario</label>
            <input
              className='dark:bg-[#303055] dark:text-white text-black p-2 w-full border border-[#383864]'
              type='text'
              name='usuario'
              placeholder='Usuario'
              value={formData.usuario}
              onChange={handleChange}

            />
          </div>
          <div>
            <label className='block pb-2'>Password</label>
            <input
              className='dark:bg-[#303055] dark:text-white text-black p-2 w-full border border-[#383864]'
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}

            />
          </div>
          <div>
            <label className='block pb-2'>Repetir Password</label>
            <input
              className='dark:bg-[#303055] dark:text-white text-black p-2 w-full border border-[#383864]'
              type='password'
              name='repeatPassword'
              value={formData.repeatPassword}
              placeholder='Password'
              onChange={handleChange}

            />
          </div>
          <div>
            <label className='block pb-2'>Email</label>
            <input
              className='dark:bg-[#303055] dark:text-white text-black p-2 w-full border border-[#383864]'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'

            />
          </div>
          <button
            className='bg-indigo-600 hover:bg-indigo-800 uppercase p-4 w-full font-bold text-lg text-white'
            type='submit'
          >Registrar
          </button>
          {alert.msg && <Alert alert={alert} />}

        </form>
        <p className='text-sm'>By clicking on Create Account, you agree to our Terms of Service.</p>
        <p className='text-sm'>To learn more about how U.GG collects, uses, shares and protects your personal data please read our Privacy Policy.</p>
      </div>
      <div className='flex flex-col gap-5 items-center'>
        <p className='text-xl font-bold'>Conviertete en un jugador profesional desde hoy</p>
        <img src={victoryLogo} className='w-[300px]' />
        <video autoPlay controls={false} loop muted disablePictureInPicture disableRemotePlayback width='400'>
          <source src='/videos/video3.mp4' type='video/mp4' />
        </video>

      </div>

    </div>
  )
}

export default Register
