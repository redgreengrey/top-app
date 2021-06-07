import { useEffect, useState } from "react";
import { Button, Htag, P } from "../components";

export default function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log(counter);
    });

    return (
        <>
            <Htag tag="h1">{counter}</Htag>
            <Button
                appearence="primary"
                arrow="right"
                onClick={() => setCounter((counter) => counter - 1)}
            >
                -
            </Button>
            <Button
                appearence="primary"
                arrow="right"
                onClick={() => setCounter((counter) => counter + 1)}
            >
                +
            </Button>
            <Button appearence="ghost" arrow="right">
                кнопка
            </Button>
            <P size="l">Большой</P>
            <P>Средний</P>
            <P size="s">Маленький</P>
        </>
    );
}
