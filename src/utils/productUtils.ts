import IProductProps from "../interfaces/IProduct";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<IProductProps[]> {
  try {
    const res = await fetch(`${API_URL}/products`, {
      next: { revalidate: 1200 },
    });

    if (!res.ok) {
      throw new Error(`Error en la petición: ${res.statusText}`);
    }

    const products: IProductProps[] = await res.json();

    return products;
  } catch (error) {
    throw new Error(`Error al obtener los productos: ${error}`);
  }
}

export async function getByIdProduct(id: string): Promise<IProductProps> {
  try {
    const products: IProductProps[] = await getProducts();
    const productFiltered = products.find(
      (product) => product.id.toString() === id
    );
    if (!productFiltered) throw new Error("El producto no se encontro");
    return productFiltered;
  } catch (error) {
    throw new Error(`Error obtaining the product: ${error}`);
  }
}



