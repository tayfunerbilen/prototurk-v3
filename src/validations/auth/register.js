import Yup from "../yup"

export const registerSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
  email: Yup.string().required().email(),
})
