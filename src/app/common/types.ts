import React from "react";

export interface FormErrors {
    [key: string]: string;
}

export interface FormType {
    errors: FormErrors;
    setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

export interface Children {
    children: React.ReactNode;
}

export interface Input {
    name: string
    label: string
    type: string
}

export interface HandleSubmit {
    e: React.FormEvent<HTMLFormElement>
    setErrors: (errors: FormErrors) => void
}