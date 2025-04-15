'use client';

import { FormErrors } from "../common/types";


export function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    setErrors: (errors: FormErrors) => void
) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const username = formData.get("username")?.toString().trim() || "";
    const password = formData.get("password")?.toString().trim() || "";

    const newErrors: FormErrors = {};

    if (!username) newErrors.username = "نام کاربری الزامی است";
    if (!password) newErrors.password = "رمز عبور الزامی است";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        console.log("فرم معتبر است");
    }
}
