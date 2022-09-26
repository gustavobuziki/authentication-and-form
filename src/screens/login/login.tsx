import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext } from "../../context/auth-context";
import { TLoginForm } from "../../types/login-types";
import { schema } from "../../utils";

import * as s from "./styled-login";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<TLoginForm>({ resolver: yupResolver(schema) });

  const onSubmit = (data: TLoginForm) => {
    setValue("email", "");
    setValue("password", "");
    setValue("name", "");

    logIn(data);

    alert("Dados envados com sucesso!");
  };

  return (
    <s.Container>
      <s.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login To Continue</h1>

        <div>
          <>
            <s.Input
              type="text"
              placeholder="Email"
              {...register("email")}
              buttonError={errors.email ? true : false}
            />
            {errors.email ? <s.P>{errors.email.message}</s.P> : null}
          </>
          <>
            <s.Input
              type="text"
              placeholder="Full Name"
              {...register("name")}
              buttonError={errors.name ? true : false}
            />
            {errors.name ? <s.P>{errors.name.message}</s.P> : null}
          </>
          <>
            <s.Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              buttonError={errors.password ? true : false}
            />
            {errors.password ? <s.P>{errors.password.message}</s.P> : null}
            <s.ButtonPassword
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </s.ButtonPassword>
          </>
        </div>

        <s.ButtonSubmit type="submit">Log In</s.ButtonSubmit>
      </s.Form>
    </s.Container>
  );
};

export default Login;
