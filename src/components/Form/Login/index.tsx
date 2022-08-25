import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../../contexts/AuthContext";
import Button from "../../Button";
import { FormGroup, FormInput, Icon, ErrorMessage } from "./style";
import { Email, Lock } from "@mui/icons-material";

type FormValues = {
  email: string;
  password: string;
};
const FormLogin = () => {
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
        <FormGroup>
          <label htmlFor="email">E-mail or Username</label>
          <FormInput>
            <Icon>
              <Email sx={{ fontSize: 18 }} />
            </Icon>
            <input placeholder="e.g.: elonmusk@mars.com" type="email" {...register("email")} />
          </FormInput>
          <ErrorMessage>{errors.email && <p>{errors.email.message}</p>}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <FormInput>
            <Icon>
              <Lock sx={{ fontSize: 18 }} />
            </Icon>
            <input placeholder="e.g.: X Æ A-12" type="password" {...register("password")} />
          </FormInput>
          <ErrorMessage>{errors.password && <p>{errors.password.message}</p>}</ErrorMessage>
        </FormGroup>
        <Button type="submit" title="Sign Up" />
      </form>
    </div>
  );
};
export default FormLogin;
