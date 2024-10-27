"use client";
import { validateRegister } from '@/utils/validateForm';
import  { IRegisterFormProps, TRegisterErrors } from '@/interfaces/IRegister';
import { useRouter } from 'next/navigation';
import { register } from '@/utils/authUtils'; // Importar la función de registro
import Toast from '@/utils';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Register = () => {
  const router = useRouter();

  const initialValues: IRegisterFormProps = {
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  };

  const [dataUser, setDataUser] = useState<IRegisterFormProps>(initialValues);
  const [errors, setErrors] = useState<TRegisterErrors>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataUser({
      ...dataUser,
      [name]: value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateRegister(dataUser);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const result = await register(dataUser);
      if (result) {
        Toast.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Tu cuenta ha sido creada exitosamente',
        });
        router.push('/login'); 
      }
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: `Hubo un problema al crear tu cuenta. Inténtalo de nuevo. ${error}`,
      });
    }
  };

  useEffect(() => {
    const validationErrors = validateRegister(dataUser);
    setErrors(validationErrors);
  }, [dataUser]);

  const isFormValid = () => {
    const validationErrors = validateRegister(dataUser);
    return Object.keys(validationErrors).length === 0 && Object.values(dataUser).every(field => field.trim() !== '');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">User Registration</h2>
      
          <form  onSubmit={handleSubmit} className="space-y-6">
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                value={dataUser.name}
                placeholder="Juan Arteta Franco"
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className='text-red-600 font-bold'>{errors.name}</p>}
            </div>
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
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="address"
                value={dataUser.address}
                placeholder="cantagallo cl-24#65"
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.address && <p className='text-red-600 font-semibold'>{errors.address}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={dataUser.phone}
                placeholder="3215469087"
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className='text-red-600 font-bold'>{errors.phone}</p>}
            </div>

            <button
                type="submit"
                disabled={!isFormValid()} 
                className={`w-max py-2 px-4 ${isFormValid() ? 'bg-blue-600' : 'bg-gray-400'} text-white font-semibold rounded-md hover:${isFormValid() ? 'bg-blue-700' : 'bg-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
              Register
            </button>
            <div>
              <p>do you already have an account ? go to  <Link href={"/login"}><strong className='text-blue-600'>Login</strong></Link> </p>
            </div>
          </form>
    </div>
  </div>
  );};

export default Register;
