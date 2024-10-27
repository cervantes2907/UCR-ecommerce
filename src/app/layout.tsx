import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "UCR-TechStore",
  description: "proyecto de ecomerce de productos de tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  

  return (
    <html lang="en">
      <body>
        <Navbar />
        <br />
        <br />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
