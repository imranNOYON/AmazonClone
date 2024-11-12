
import { Metadata } from "next";
import CarouselBanner from "./components/CarouselBanner";
import { fetchData } from "@/lib";
import ProductList from "./components/ProductList";

export const metadata:Metadata={
  title: "Home | Amazon 2.0"
}


export default async function Home() {
 const endpoint="https://dummyjson.com/products"
  const {products}= await fetchData(endpoint)
  
  return (
   <div>
     <CarouselBanner/>
    <div className="">
      <ProductList products={products}/>
    </div>
   </div>
  );
}
