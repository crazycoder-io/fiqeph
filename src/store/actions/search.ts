import {CardData} from "../../types";
import {
    GET_SEARCH_IMAGE_LIST,
    GET_SEARCH_IMAGE_LIST_SUCCESS,
    GET_SEARCH_IMAGE_LIST_FAIL
} from "../types";

export const searchImages = (payload: {page: number; search: string}) => ({
    type: GET_SEARCH_IMAGE_LIST,
    payload
});

export const searchImagesSuccess = (payload: Array<CardData>) => ({
    type: GET_SEARCH_IMAGE_LIST_SUCCESS,
    payload
});

export const searchImagesFail = (error: string) => ({
    type: GET_SEARCH_IMAGE_LIST_FAIL,
    payload: error
});
