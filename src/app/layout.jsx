import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "E-Dokan",
  description: "Ecommerce Online Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ToastContainer />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
