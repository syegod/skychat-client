import { IInput, IMessage } from "./entities";
import { ChatType, ColorType } from "./types";


export interface ContainerProps {
    children: React.ReactNode;
}

export interface SideBarItemProps {
    type?: ChatType;
    users?: any[]; // IUser[];
    lastMessage?: any; //IMessage;
}

export interface CustomInputProps extends IInput{
    placeholder?: string;
    onChange?: (e: any) => void;
    type: string;
}

export interface CustomBtnProps extends IInput{
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export interface MessageBoxProps {
    message: IMessage
}
