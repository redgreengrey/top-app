import React, { useState } from "react";
import { Button, Htag, P, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(3);

    return (
        <>
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
        </>
    );
}

export default withLayout(Home);
