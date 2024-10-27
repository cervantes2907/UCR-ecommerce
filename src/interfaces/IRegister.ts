
export interface IRegisterFormProps {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
  }

  export type TRegisterErrors = Partial<IRegisterFormProps>

  