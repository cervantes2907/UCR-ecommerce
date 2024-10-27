import ButtomShoppingCart from "@/components/buttomShoppingCart/ButtomShoppingCart";
import IProductProps from "@/interfaces/IProduct";
import { cookies } from "next/headers";
import Image from "next/image";

const ProductIdDetailsViews: React.FC<IProductProps> = (props) => {
  const { image, name, description, price, stock } = props;
  const cookieStore = cookies();
  const userData = JSON.parse(cookieStore.get("userData")?.value ?? "{}");

  return (
    <div className="mx-auto px-4 sm:px-8 py-12 max-w-screen-lg shadow-lg rounded-lg bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2 lg:w-1/3 overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        
        <div className="w-full md:w-1/2 lg:w-2/3">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight sm: text-center">{name}</h2>
          
          <p className="text-lg text-justify text-gray-700 mb-6  leading-relaxed">{description}</p>
          
          <div className="flex items-center gap-8  mb-6">
            <p className="font-semibold text-xl text-gray-800">${price}</p>
            <p className={`font-bold text-xl ${stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {stock > 0 ? `${stock} en stock` : 'Sin stock'}
            </p>
          </div>
          
          <div>
            <ButtomShoppingCart userData={userData} product={props}>
                Add To Cart
            </ButtomShoppingCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdDetailsViews;
