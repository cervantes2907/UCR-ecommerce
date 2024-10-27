"use client"
import CardProductShoppingCart from '@/components/cardProducShoppingCart/CardProductShoppingCart';
import IProductProps from '@/interfaces/IProduct';
import IUserSession from '@/interfaces/IUserSession';
import Toast from '@/utils';
import { createOrder } from '@/utils/ordersUtils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ShoppingCart: React.FC<{ userData: IUserSession }> = ({ userData }) => {
  const router = useRouter();
  const [cart, setCart] = useState<IProductProps[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartStore = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cartStore) {
      let totalCart = 0;
      cartStore.forEach((item: IProductProps) => {
        totalCart += item.price;
      });
      setTotal(totalCart);
      setCart(cartStore);
    }
  }, []);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart); 

    const newTotal = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotal(newTotal);
  };

  const handleCheckout = async () => {
    const idProducts = cart.map((product) => product.id);
    await createOrder(idProducts, userData.token);
    Toast.fire({
      icon: "success",
      title: "Compra Exitosa"
    });
    setCart([]); 
    setTotal(0);
    localStorage.setItem("cart", "[]"); 
    router.push("dashboard/orders");
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col justify-center sm:flex-row shadow-md my-10">
        <div className="w-full sm:w-3/5 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          {
            cart.length ? 
              cart.map((product: IProductProps) => (
                <CardProductShoppingCart 
                  key={product.id} 
                  {...product} 
                  onRemove={removeFromCart}
                />
              )) 
            : <p>No hay productos en el carrito</p>
          }
          <Link href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-full sm:w-2/5 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Price</span>
            <span className="font-semibold text-sm">${total}</span> {/* Muestra el total calculado */}
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <p>Standard shipping - <strong className='text-green-600'>Free</strong></p>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>{total}</span>
            </div>
            <button
              onClick={handleCheckout}
              className={`max-w-40 sm:font-semibold rounded-lg py-3 text-sm text-white uppercase w-full ${cart.length ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!cart.length}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
