import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "E-Dokan",
  description: "Ecommerce Online Shop",
};

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
