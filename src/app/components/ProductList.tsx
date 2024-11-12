import { Product } from "@/lib/type"
import Container from "./Container"
import ProductCard from "./ProductCard"

interface Props{
    products:Product[]
}

const ProductList = ({products}:Props) => {
    console.log(products)
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
    lg:grid-cols-5">
        {
            products.map((item)=>(
                <ProductCard key={item.id} product={item}
                />
                
            ))
        }
    </Container>
  )
}

export default ProductList