import {CardData} from "../../types";
import {GET_IMAGE_LIST, GET_IMAGE_LIST_SUCCESS, GET_IMAGE_LIST_FAIL} from "../types";

export const getImageList = (payload: {page: number}) => ({
    type: GET_IMAGE_LIST,
    payload
});

export const getImageListSuccess = (payload: Array<CardData>) => ({
    type: GET_IMAGE_LIST_SUCCESS,
    payload
});

export const getImageListFail = (error: string) => ({
    type: GET_IMAGE_LIST_FAIL,
    payload: error
});
