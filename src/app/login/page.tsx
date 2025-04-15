import Login from "../components/form/Login";
import { FormProvider } from "../context/Context";

const LoginPage = () => {
  return (
    <FormProvider>
      <Login />
    </FormProvider>
  );
};

export default LoginPage;
