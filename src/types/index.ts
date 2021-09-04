import {HeaderTitleProps} from "@react-navigation/elements";
import {ReactNode} from "react";

export interface BottomNavigationProps {
    navigation: {
        navigate(route: string): void;
    };
}

export type CardData = {
    uri: string;
    title: string;
    id: string;
    likes: number;
    user: {
        username: string;
        name: string;
        portfolio_url: string;
    };
};

export interface CardComponentProps {
    cardData: Array<CardData>;
    navigation: {
        navigate(route: string): void;
    };
}

export interface HeaderComponentProps {
    title: string | ((props: HeaderTitleProps) => ReactNode);
    navigation: {
        navigate(route: string): void;
        goBack(): void;
    };
}

export interface HomeScreenProps {
    navigation: {
        navigate(route: string): void;
    };
}

export interface SearchComponentProps {
    navigation: {
        navigate(route: string): void;
    };
}

export type Error = {
    message: string;
};

export type Actions = {
    type: string;
    actions: {
        [key: string]: string;
    };
};

export type AppState = {
    appReducer: {
        downloaded: boolean;
    };
};
