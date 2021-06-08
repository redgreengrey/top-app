import { useEffect, useState } from "react";
import { Button, Htag, P, Rating } from "../components";
import { Layout } from "../layout/Layout";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(3);

    return (
        <Layout>
            <Htag tag="h1">{rating}</Htag>
            <Button appearence="primary" arrow="right">
                button
            </Button>
            <Button appearence="primary" arrow="right">
                button
            </Button>
            <Button appearence="ghost" arrow="right">
                кнопка
            </Button>
            <P size="l">Большой</P>
            <P>Средний</P>
            <P size="s">Маленький</P>
            <Rating isEditable rating={rating} setRating={setRating} />
        </Layout>
    );
}
