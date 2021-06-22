import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps
    extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: FieldError;
}
