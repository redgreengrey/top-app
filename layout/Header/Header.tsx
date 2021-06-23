import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Logo from "../logo.svg";
import React, { useState, useEffect } from "react";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useRouter } from "next/router";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsMenuOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
            },
        },
        closed: {
            opacity: 0,
            x: "100%",
        },
    };

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo />
            <ButtonIcon appearence="white" icon="burger" onClick={() => setIsMenuOpened(true)} />
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial={"closed"}
                animate={isMenuOpened ? "opened" : "closed"}
            >
                <Sidebar />
                <ButtonIcon
                    className={styles.menuClose}
                    appearence="white"
                    icon="close"
                    onClick={() => setIsMenuOpened(false)}
                />
            </motion.div>
        </header>
    );
};
