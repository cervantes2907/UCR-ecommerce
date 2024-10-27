import Toast from ".";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });
    return res.json();
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "algo salio mal al crear tu compra",
    });
    throw new Error(`${error}`);
  }
}

export async function getAllOrdersUser(token: string) {
  try {
    const res = await fetch(`${API_URL}/users/orders`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return res.json();
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "something came up when entering your purchase orders",
    });
    throw new Error(`${error}`);
  }
}
