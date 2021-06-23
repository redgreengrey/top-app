import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
    extends Omit<
        DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
        "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd" | "ref"
    > {
    children: ReactNode;
    appearence: "primary" | "ghost";
    arrow?: "right" | "down" | "none";
}
