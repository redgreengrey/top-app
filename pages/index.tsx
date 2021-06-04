import { Button, Htag, P } from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">текст</Htag>
            <Button appearence="primary" arrow="right">
                кнопка
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
