import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";

export interface TopPageComponentProps {
    firstcategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}
