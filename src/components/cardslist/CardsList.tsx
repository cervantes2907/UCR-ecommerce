import IProduct from "@/interfaces/IProduct";
import Card from "../card/Card";

interface CardsListProps {
  products: IProduct[];
}

const CardsList: React.FC<CardsListProps> = ({ products }) => {
  return (
    <>
      <h2 className="text-center text-3xl mt-10 font-semibold">Products</h2>
    <div className="grid grid-cols-1 pt-8 pb-8 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
          <Card key={product.id} product={product} />
        
      ))}
    </div>
    </>
  );
};
export default CardsList
