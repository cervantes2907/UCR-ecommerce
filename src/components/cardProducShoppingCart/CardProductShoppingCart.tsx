"use client"
import IProductProps from "@/interfaces/IProduct";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

const CardProductShoppingCart: React.FC<IProductProps & { onRemove: (id: number) => void }> = ({ id, image, name, price, onRemove }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <Image
            className="h-24"
            src={image}
            alt={name}
            width={200}
            height={200}  
          />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{name}</span>
          <button
            onClick={() => onRemove(id)}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs flex items-center gap-1"
          >
            <FaTrash className="text-red-500" /> Remove
          </button>
        </div>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
    </div>
  );
};

export default CardProductShoppingCart;
