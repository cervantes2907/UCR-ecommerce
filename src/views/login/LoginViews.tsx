"use client"

import React, { useEffect } from 'react';
import { useState } from 'react';
import { ILoginErrors, ILoginFormProps } from '@/interfaces/ILogin';
import { validateLogin } from '@/utils/validateForm';
import Link from 'next/link';
import { login } from '@/utils/authUtils';
import Cookies from "js-cookie"
import Toast from '@/utils';
import { useRouter } from 'next/navigation';



const LoginViews = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: ""
  };

  const [dataUser, setDataUser] =useState<ILoginFormProps>(initialValues);
  const [errors, setErrors] = useState<ILoginErrors>(initialValues)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const response = await login(dataUser);
    const {token, user} = response;
    Cookies.set ( 'userData' , JSON.stringify({token, user}), {expires: 1}) 
    try {
      Toast.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: 'Has iniciado sesión correctamente',
      });
      
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: 'Error en el inicio de sesión',
        text: `Hubo un problema al iniciar sesión. Inténtalo de nuevo. ${error}`,
      });
    }
    router.push("/") 
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDataUser({
      ...dataUser,
      [name]: value
    })
  }

  useEffect(() => {
    const errors = validateLogin(dataUser)
    setErrors(errors)
  }, [dataUser])

  const isFormValid = () => {
    const validationErrors = validateLogin(dataUser);
    return Object.keys(validationErrors).length === 0 && Object.values(dataUser).every(field => field.trim() !== '');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      
          <form  onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={dataUser.email}
                placeholder="juan@gmail.com"
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
              {errors.email && <p className='text-red-600 font-bold'>{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={dataUser.password}
                placeholder="Escribe tu contraseña"
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && <p className='text-red-600 font-bold'>{errors.password}</p>}

            </div>

            <button
             type="submit"
             disabled={!isFormValid()} 
             className={`w-max py-2 px-4 ${isFormValid() ? 'bg-blue-600' : 'bg-gray-400'} text-white font-semibold rounded-md hover:${isFormValid() ? 'bg-blue-700' : 'bg-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              Iniciar Sesión
            </button>

            <div>
             <p>You still dont have an account ? <Link href={"/register"}> <strong className='text-blue-600'> Register </strong> </Link></p>
            </div>
          </form>

    </div>
  </div>
  );
};

export default LoginViews;
