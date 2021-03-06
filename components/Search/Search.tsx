import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import SearchIcon from "./search.svg";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const handleSearch = () => {
        router.push({
            pathname: "/search",
            query: {
                q: search,
            },
        });
    };

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <form className={cn(styles.search, className)} {...props} role="search">
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={() => handleKeydown}
            />
            <Button
                appearence="primary"
                className={styles.button}
                onClick={handleSearch}
                aria-label="Искать по сайту"
            >
                <SearchIcon className={styles.searchIcon} />
            </Button>
        </form>
    );
};
