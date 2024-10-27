"use client";
import IProductProps from "@/interfaces/IProduct";
import IUserSession from "@/interfaces/IUserSession";
import Toast from "@/utils";
import { FaShoppingCart } from "react-icons/fa";

interface IButtomProps {
  children: React.ReactNode;
  userData: IUserSession;
  product: IProductProps;
}

const ButtomShoppingCart: React.FC<IButtomProps> = ({
  children,
  userData,
  product,
}) => {
  const handleClick = () => {
    if (!userData.token) {
      Toast.fire({
        icon: "info",
        title: "No puedes agregar productos si no estás logueado",
        text: "Por favor inicia sesión para hacer tu compra",
      });
    } else {
      const cart: IProductProps[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
      const productExist = cart.some((item: IProductProps) => {
        if (item.id === product.id) return true;
        return false;
      });

      if (productExist) {
        Toast.fire({
          icon: "warning",
          title: "¡Oops!",
          text: "El producto ya existe",
        });
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        Toast.fire({
          icon: "success",
          title: "¡Muy bien!",
          text: "El producto se agregó exitosamente al carrito de compras",
        });
      }
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleClick}
        className={`flex items-center justify-center w-max px-4 ${
          userData?.token
            ? "bg-blue-950 hover:bg-cyan-800"
            : "bg-gray-500 cursor-not-allowed"
        } text-white font-semibold py-2 rounded-lg transition duration-300`}
        disabled={!userData?.token}
      >
        <FaShoppingCart className="mr-2" />
        {children}
      </button>
    </div>
  );
};

export default ButtomShoppingCart;
