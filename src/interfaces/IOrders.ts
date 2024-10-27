import IProductProps from "./IProduct";

interface IOrder{
    id: number;
    status: string;
    date: Date;
    products: IProductProps[];
}

export default IOrder