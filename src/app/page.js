import Image from "next/image";
import Header from "@/components/Header/Header";
import Products from "@/components/products/products";
import Footer from "@/components/footer/footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Products />
      <Footer/>
    </main>
  );
}
