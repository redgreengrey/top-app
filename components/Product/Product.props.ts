import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ProductModel } from "../../interfaces/product.interface";

export interface ProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModel;
}
