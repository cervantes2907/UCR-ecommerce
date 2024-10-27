import { getByIdProduct } from "@/utils/productUtils"
import ProductIdDetailsViews from "@/views/productDetails/ProductIdDeailsViews"

const Details: React.FC<{params:{productId: string}}> = async({params}) => {
  const product = await getByIdProduct(params.productId)
  return (
    <div className="px-8 pt-12 pb-12 flex justify-center items-center content-center m-auto w-4/5">
        <ProductIdDetailsViews {...product}/>
    </div>
  )
}

export default Details