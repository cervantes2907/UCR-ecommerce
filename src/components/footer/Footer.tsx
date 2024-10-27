import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-blue-950 text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <span> Terms of services</span>
              <span>Privacy Policy</span>
              <span> Contact us</span>
            </div>

            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} My E-commerce. All rights reserved.
            </div>

            <div className="flex space-x-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="w-5 h-5 text-gray-400 hover:text-white transition duration-300" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white transition duration-300" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5 text-gray-400 hover:text-white transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
