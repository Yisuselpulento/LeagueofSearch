import { useState } from 'react'
import Alert from '../components/Alert'

const Register = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
    repeatPassword: '',
    email: ''
  })
  const [errors, setErrors] = useState('')

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
        setErrors('Todos los campos son obligatorios ')
      }
    }

    // Validación de usuario único y longitud máxima de 10 caracteres
    if (formData.usuario.length > 10 || formData.usuario.length > 4) {
      setErrors('Usuario no puede tener más de 10 caracteres')
    }

    // Validación de contraseñas coincidentes y longitud máxima de 20 caracteres
    if (formData.password !== formData.repeatPassword) {
      setErrors('Las contraseñas no coinciden')
    }
    if (formData.password.length > 20 || formData.password.length < 4) {
      setErrors('La contraseña no puede tener más de 20 caracteres')
    }

    // Validación de email único y formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrors('Email no es válido')
    }

    // Establecer errores si los hay
    if (Object.keys(errors).length === 0) {
      // Aquí puedes enviar los datos
      console.log('Datos enviados:', formData)
    }
  }
  return (
    <div className='dark:bg-[#1b1b3a] m-5 bg-gray-200 w-full rounded p-10 md:p-14 md:w-[500px] flex flex-col gap-4 dark:text-indigo-100 '>
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <button
          className='bg-blue-500 uppercase p-4 w-full font-bold text-lg text-white'
          type='submit'
        >Registrar
        </button>
        {errors && <Alert>{errors}</Alert>}

      </form>
      <p className='text-sm'>By clicking on Create Account, you agree to our Terms of Service.</p>
      <p className='text-sm'>To learn more about how U.GG collects, uses, shares and protects your personal data please read our Privacy Policy.</p>
    </div>
  )
}

export default Register
