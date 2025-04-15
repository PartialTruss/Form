"use client";

import { useFormContext } from "@/app/context/Context";
import { handleSubmit } from "@/app/utils/handler";
import FormInput from "../Input";

const Login = () => {
  const { setErrors } = useFormContext();
  return (
    <div className="w-full flex justify-center mt-10">
      <form
        onSubmit={(e) => handleSubmit(e, setErrors)}
        className="flex flex-col w-1/4 gap-3 "
      >
        <FormInput name="username" label="نام کاربری" type="text" />
        <FormInput name="password" label="رمز عبور" type="password" />
        <button
          type="submit"
          className="bg-blue-600 rounded-lg h-9 cursor-pointer"
        >
          <p>ورود</p>
        </button>
      </form>
    </div>
  );
};

export default Login;
