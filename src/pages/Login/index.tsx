import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../contexts/AuthContext";

type FormValues = {
  email: string;
  password: string;
};
const Login = () => {
  const { Login } = useAuth();

  const SignupSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(SignupSchema),
  });

  const handleLogin = async (data: FormValues) => {
    await Login(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor="email">Email</label>
          <input placeholder="email" type="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input placeholder="password" type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
