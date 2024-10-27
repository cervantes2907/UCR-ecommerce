import { IRegisterFormProps } from "@/interfaces/IRegister";
import Toast from ".";
import { ILoginFormProps } from "@/interfaces/ILogin";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterFormProps) {
  try {
    const res = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      Toast.fire({
        icon: "error",
        title: "Oops...",
        text: "algo salio mal!",
      });
    }
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "algo salio mal al registrarse!",
    });
    throw new Error(`${error}`);
  }
}

export async function login(userData: ILoginFormProps) {
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      Toast.fire({
        icon: "error",
        title: "Oops...",
        text: "algo salio mal al loguearse!",
      });
    }
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "something went wrong when logging in",
    });
    throw new Error(`${error}`);
  }
}
