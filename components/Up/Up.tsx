import styles from "./Up.module.css";
import UpIcon from "./arrow.svg";
import { useScrollY } from "../../hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Up = (): JSX.Element => {
    const control = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        control.start({ opacity: (y / document.body.scrollHeight) * 2 });
    }, [y, control]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.button
            animate={control}
            initial={{ opacity: 0 }}
            className={styles.up}
            onClick={scrollToTop}
        >
            <UpIcon />
        </motion.button>
    );
};
