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
}
