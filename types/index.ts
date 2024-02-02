import { MouseEventHandler } from "react";

export interface ButtonProps {
    btnType: "button" | "submit", 
    title: string, 
    containerStyles?: string, 
    handlePress?: MouseEventHandler<HTMLButtonElement>
}

export interface PropsSearchManufacturer{
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}