import * as Yup from "yup";

export const ValidateFormContact = Yup.object({
    name: Yup.string().required("กรุณากรอกชื่อ"),
});
