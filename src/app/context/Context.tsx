"use client";

import { createContext, useContext, useState } from "react";
import { Children, FormErrors, FormType } from "../common/types";

const FormContext = createContext<FormType | null>(null);

export const FormProvider = ({ children }: Children) => {
  const [errors, setErrors] = useState<FormErrors>({});

  return (
    <FormContext.Provider value={{ errors, setErrors }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be wrapped within a FormProvider");
  }
  return context;
};
