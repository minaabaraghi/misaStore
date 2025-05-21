import { z } from "zod";

const schemaUser = z.object({
  userName: z
    .string({
      required_error: "نام کاربری را وارد کنید",
      invalid_type_error: "نام کاربری باید رشته باشد",
    })
    .min(1, { message: "نام کاربری را وارد کنید" }),
  password: z
    .string({
      required_error: "رمز عبور را وارد کنید",
      invalid_type_error: "رمز عبور باید رشته باشد",
    })
    .min(1, { message: "رمز عبور را وارد کنید" }),
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SubmitUser(prevState: any, formData: FormData) {
  const formDataObj = {
    userName: formData.get("userName")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };
  const validatedFields = schemaUser.safeParse(formDataObj);
  if (!validatedFields.success) {
    return {
      ...prevState,
      data: formDataObj,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: null,
    };
  }
  return {
    ...prevState,
    data: validatedFields.data,
    zodErrors: null,
    strapiErrors: null,
    message: "عملیات با موفقیت انجام شد",
  };
}
