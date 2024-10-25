import * as Yup from "yup";
import { ERR_SHORT, ERR_LONG, ERR_REQUIRED } from "./constants";

export const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, ERR_SHORT).max(50, ERR_LONG).required(ERR_REQUIRED),
  number: Yup.string()
    .min(3, ERR_SHORT)
    .max(50, ERR_LONG)
    .required(ERR_REQUIRED),
});
