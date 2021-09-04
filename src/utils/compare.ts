import {CardData} from "../types";

// Compare two arrays to prevent conflict in arrays
export const compare = (arr1: Array<CardData>, arr2: Array<CardData>) => {
    return arr2.filter(val1 => {
        return !arr1.some(val2 => val1.id === val2.id);
    });
};
