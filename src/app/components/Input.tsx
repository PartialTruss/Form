"use client";

import { Input } from "../common/types";
import { useFormContext } from "../context/Context";

const FormInput = ({ name, label, type }: Input) => {
  const { errors } = useFormContext();

  return (
    <div className="flex flex-col">
      <label className="self-end">{label}</label>
      <input type={type} name={name} />
      {errors[name] && <p className="text-red-600">{errors[name]}</p>}
    </div>
  );
};

export default FormInput;
