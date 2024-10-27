import Link from "next/link";

const About: React.FC = () => {
    return (
      <section className="flex flex-col items-center justify-center bg-white py-16 px-6 lg:px-20">
        <div className="max-w-4xl ">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About us</h2>
          <p className="text-lg text-gray-600 text-justify leading-relaxed mb-6">
            Welcome to <span className="font-semibold text-blue-600">TechStore</span>, the leading online store for technology products. We are dedicated to offering you the latest in technology, from laptops and smartphones to accessories and smart devices. Our goal is to provide you with a comfortable and safe shopping experience with high-quality products.
            the leading online store for technology
             products. We are dedicated to offering
            you the latest in technology, from laptops 
            and smartphones to accessories and smart 
            devices. Our goal is to provide you with a 
            comfortable and safe shopping experience 
            with high-quality products.

          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
           At <span className="font-semibold text-blue-600">TechStore</span>,we believe in innovation and customer service as fundamental pillars for your satisfaction. Discover our latest offers and find the device that best suits your needs.
          </p>
        </div>
        <div className="mt-10">

        <Link href="/" passHref>
          <button className="px-6 py-2 bg-blue-950 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
           see products
          </button>
          </Link>
        </div>
      </section>
    );
  };
  
  export default About;
  