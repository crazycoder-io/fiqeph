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
    cardData: CardData;
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
    payload:
        | {
              [key: string]: string;
          }
        | Array<CardData>;
};

export type AppState = {
    appReducer: {
        downloaded: boolean;
    };
};

export type PhotoSate = {
    photosReducer: {
        photos_list: Array<CardData>;
        photos_list_loading: boolean;
        error: undefined;
    };
};

export type SearchSate = {
    searchReducer: {
        search_photos_list: Array<CardData>;
        search_photos_list_loading: boolean;
        error: undefined;
    };
};

export interface TransparentViewProps {
    visible: boolean;
}
