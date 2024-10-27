import IUserSession from "@/interfaces/IUserSession";
import ShoppingCartViews from "@/views/shoppinCart/ShoppingCartViews";
import { cookies } from "next/headers";

const ShoppingCart = () => {

  const cookieStore = cookies();
  const userData: IUserSession = JSON.parse(cookieStore.get("userData")?.value ?? "{}");
  return (
 
    <div>
        <ShoppingCartViews userData={userData} />
    </div>
  )
}

export default ShoppingCart;