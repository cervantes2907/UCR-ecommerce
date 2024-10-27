import { ILoginErrors, ILoginFormProps } from "@/interfaces/ILogin";
import { IRegisterFormProps, TRegisterErrors } from "@/interfaces/IRegister";

// Validación del formulario de Login
export function validateLogin(values: ILoginFormProps) {
  const errors: ILoginErrors = {};

  if (!values.email) {
    errors.email = "The email field is required.";
  } else if (values.email.length > 50) {
    errors.email = "The email cannot be more than 50 characters.";
  } else {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(values.email)) {
      errors.email = "El email no es válido.";
    }
  }

  if (!values.password) {
    errors.password = "Password field is required.";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  } else {
    if (!/[A-Z]/.test(values.password)) {
      errors.password =
        "Password must contain at least one uppercase letter.";
    }
    if (!/[0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one number.";
    }
    const specialChars = /[!@#$%^&*]/;
    if (!specialChars.test(values.password)) {
      errors.password =
        "Password must contain at least one special character.";
    }
    if (/\s/.test(values.password)) {
      errors.password = "Password cannot contain spaces.";
    }
  }

  return errors;
}

export function validateRegister(values: IRegisterFormProps) {
  const errors: TRegisterErrors = {};

  if (!values.name) {
    errors.name = "The name is required.";
  } else if (values.name.length <= 2) {
    errors.name = "The name must be more than two characters.";
  }

  if (!values.email) {
    errors.email = "The email field is required.";
  } else if (values.email.length > 50) {
    errors.email = "The email cannot be more than 50 characters.";
  } else {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(values.email)) {
      errors.email = "El email no es válido.";
    }
  }
  if (!values.password) {
    errors.password = "Password field is required.";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  } else {
    if (!/[A-Z]/.test(values.password)) {
      errors.password =
        "Password must contain at least one uppercase letter.";
    }
    if (!/[0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one number.";
    }
    const specialChars = /[!@#$%^&*]/;
    if (!specialChars.test(values.password)) {
      errors.password =
        "Password must contain at least one special character.";
    }
    if (/\s/.test(values.password)) {
      errors.password = "Password cannot contain spaces.";
    }
  }

  if (!values.address) {
    errors.address = "The address is required.";
  } else if (values.address.length < 5) {
    errors.address = "Address must be at least 5 characters.";
  } else if (values.address.length > 100) {
    errors.address = "The address cannot exceed 100 characters.";
  } else if (!/^[\w\s.,#-]+$/.test(values.address)) {
    errors.address = "The address can only contain letters, numbers and the characters , # -.";
  }

  if (!values.phone) {
    errors.phone = "The  is required.";
  } else if (!/^\d+$/.test(values.phone)) {
    errors.phone = "The phone can only contain numbers.";
  } else if (values.phone.length > 10) {
    errors.phone = "The phone number must have a maximum of 10 characters.";
  }

  return errors;
}
