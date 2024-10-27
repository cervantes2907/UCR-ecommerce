"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const NavbarDashboard = () => {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userSession, setUserSession] = useState(false);

  useEffect(() => {
    const userDataCookie = Cookies.get("userData");
    if (userDataCookie) {
      try {
        const parsedUserData = JSON.parse(userDataCookie) ?? "{}";
        setUserSession(!!parsedUserData.token);
      } catch (error) {
        console.error("Error parsing userData:", error);
        setUserSession(false);
      }
    } else {
      setUserSession(false);
    }
  }, [pathname]);

  return (
    <nav className="flex items-center justify-end p-4 mb-10 mt-8 h-12">
      <ul className="flex">
        {pathname !== "/dashboard" && (
          <Link href="/dashboard">
            <li className="text-white mr-10 rounded-lg bg-gray-800 p-2 font-semibold text-sm hover:text-yellow-600 transition duration-300">
              Profile
            </li>
          </Link>
        )}
        {pathname !== "/dashboard/orders" && (
          <Link href="/dashboard/orders">
            <li className="text-white mr-10 rounded-lg bg-gray-800 p-2 font-semibold text-sm hover:text-yellow-600 transition duration-300">
              Orders
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default NavbarDashboard;
