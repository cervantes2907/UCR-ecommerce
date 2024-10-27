"use client"
import IUserSession from "@/interfaces/IUserSession";
import Toast from "@/utils";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
import React from "react";

const Logout: React.FC<{setUserSession?: (params: IUserSession | null) => void}> = ({setUserSession}) => {
    const router = useRouter()
    const handleLogout = () => {
        Cookies.remove("userData"); 
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        setUserSession  && setUserSession(null)
        Toast.fire({
            icon: "warning",
            title: "La sesion",
            text: "ha Sido cerrada"
        })
          router.push("/")
      };
  return (
    <div>
         <button
            onClick={handleLogout}
            className="text-white mr-10  hover:text-red-600 transition duration-300"
          >
            Log out
          </button>
    </div>
  )
}

export default Logout