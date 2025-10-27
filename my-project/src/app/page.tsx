
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";


export default function Home() {
  return (
    <><Header></Header>
    <Hero></Hero>
    <About></About>
    <Contact></Contact>
    <Footer></Footer></>
  );
}
