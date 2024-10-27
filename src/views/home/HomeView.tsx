import React from 'react';
import { getProducts } from '@/utils/productUtils';
import CardsList from '@/components/cardslist/CardsList';

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div>
      <CardsList products={products} />
    </div>
  );
};

export default ProductsPage;


