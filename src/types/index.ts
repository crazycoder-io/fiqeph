import {HeaderTitleProps} from "@react-navigation/elements";
import {ReactNode} from "react";

export interface BottomNavigationProps {
    navigation: {
        navigate(route: string): void;
    };
}

type CardData = {
    uri: string;
    title: string;
    id: number;
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
