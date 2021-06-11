import { TopPageComponentProps } from "./TopPageComponent.props";

export const TopPageComponent = ({
    page,
    products,
    firstcategory,
}: TopPageComponentProps): JSX.Element => {
    return <>{products && products.length}</>;
};
