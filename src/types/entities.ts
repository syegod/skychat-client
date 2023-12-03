import { ColorType } from "./types";

export interface IInput{
    id: string;
    value: string;
    color: ColorType;
    fullWidth?: boolean;
    disabled?: boolean;
}

export interface IMessage {
    text: string;
    author: IUser
}

export interface IUser {
    _id: string;
    username: string;
    avatarUrl?: string | null;
    // chats?: IChat[] | null;
    createdAt: Date;
}

// export interface IChat {

// }

export interface IAuthContext {
    userData: IUser | null;
    isAuth: boolean;
    state: 'loading' | 'loaded';
    updateValue: ()=>void;
}