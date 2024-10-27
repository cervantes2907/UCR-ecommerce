import Image from "next/image";
import ButtomShoppingCart from "../buttomShoppingCart/ButtomShoppingCart";
import { cookies } from "next/headers";
import IProductProps from "@/interfaces/IProduct";
import Link from "next/link";

interface CardProps {
  product: IProductProps | null;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const cookieStore = cookies();
  const userData = JSON.parse(cookieStore.get("userData")?.value ?? "{}");

  if (!product) {
    return <div className="text-gray-500">Producto no disponible</div>;
  }

  return (
    <div className="w-64 max-h-fit bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform duration-700 hover:scale-105 cursor-pointer">
      <Link href={`/product/${product.id}`}>
      <div className="flex justify-center items-center h-64 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={250}
            className="rounded-t-lg w-full h-full object-cover"
          />
        ) : (
          <div className="bg-gray-200 h-full flex justify-center items-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      <div className="p-4 text-center bg-slate-100">
        <h3 className="font-semibold text-2xl tracking-tight sm:text-xl mb-2">
          {product.name}
        </h3>
        <p className="text-gray-700 tex-semibold font-medium">
          ${product.price.toFixed(2)}
        </p>
      </div>
       </Link>
      <div className="flex w-full justify-center bg-slate-100">
        <ButtomShoppingCart userData={userData} product={product}>
          Add To Cart
        </ButtomShoppingCart>
      </div>
    </div>
  );
};

export default Card;
