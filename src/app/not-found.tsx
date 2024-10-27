// components/NotFound.tsx
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page not found </h1>
      <p className="text-lg text-gray-600 mb-6">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link href="/" passHref>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          return home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
