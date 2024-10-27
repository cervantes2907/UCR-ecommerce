import IOrder from "./IOrders"

interface IUserSession{
    token: string,
    user: {
        id: number
        name: string
        email: string
        address: string
        phone: string
        role: string
        credential:{
            id: number
            password: string
        }
        orders: IOrder
    }
}

export default IUserSession