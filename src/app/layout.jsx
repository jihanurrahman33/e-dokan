import { Inter } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import NextAuthProvider from "@/Provider/NextAuthProvider";

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
    <NextAuthProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          <ToastContainer />
          {children}
        </body>
      </html>
    </NextAuthProvider>
  );
}
