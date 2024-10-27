"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Cookies from "js-cookie";
import IUserSession from "@/interfaces/IUserSession";
import Logout from "../logout/Logout";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [userSession, setUserSession] = useState<IUserSession | null>(null); 
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const dataCookie = Cookies.get("userData");
    if (dataCookie) {
      const parsedData: IUserSession = JSON.parse(dataCookie);
      setUserSession(parsedData);
    }
  }, [pathname]);

  const renderLink = (href: string, label: string) => (
    <li>
      <Link href={href} onClick={closeMenu}>
        <p className={` hover:text-yellow-600 ${pathname === href ? " hover:text-yellow-600" : ""}`}>
          {label}
        </p>
      </Link>
    </li>
  );

  return (
    <nav className="fixed w-full px-12 h-20 mt-0 bg-gray-800 z-50">
      <div className="flex justify-between h-full items-center">
        <div >
          <Link href="/" onClick={closeMenu}>
            <Image 
            src="https://www.shutterstock.com/image-vector/ucr-letter-logo-vector-design-600nw-2381143003.jpg" 
            alt="ecommerce icon"
            width={70}
            height={70}
            className="rounded-full"
            />
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none hover:text-yellow-600">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul className="hidden lg:flex space-x-6 text-white ">
          {renderLink("/", "Home")}
          {renderLink("/about", "About")}
          {!userSession?.token ? (
            <>
              {renderLink("/login", "Login")}
              {renderLink("/register", "Register")}
            </>
          ) : (
            <>
              {renderLink("/cart", "CartShopping")}
              {renderLink("/dashboard", "Profile")}
              <Logout setUserSession={setUserSession}/>
            </>
          )}
        </ul>
      </div>

      {isOpen && (
        <div className="lg:hidden w-max ml-[-3rem] px-6 py-4 rounded-b-lg bg-gray-800 z-50">
          <ul className="flex flex-col space-y-4 mt-4 text-white">
            {renderLink("/", "Home")}
            {renderLink("/about", "About")}
            {!userSession?.token ? (
              <>
                {renderLink("/login", "Login")}
                {renderLink("/register", "Register")}
              </>
            ) : (
              <>
                {renderLink("/cart", "CartShopping")}
                {renderLink("/dashboard", "Profile")}
                <Logout setUserSession={setUserSession}/>

              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
