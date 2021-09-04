import {Actions, CardData} from "../../types";
import {
    GET_SEARCH_IMAGE_LIST,
    GET_SEARCH_IMAGE_LIST_SUCCESS,
    GET_SEARCH_IMAGE_LIST_FAIL
} from "../types";

import {compare} from "../../utils/compare";

const INITIAL_STATE = {
    search_photos_list: [],
    search_photos_list_loading: false,
    error: null
};

export default (state = INITIAL_STATE, actions: Actions) => {
    const {type, payload} = actions;
    switch (type) {
        case GET_SEARCH_IMAGE_LIST:
            return {
                ...state,
                search_photos_list_loading: true
            };
        case GET_SEARCH_IMAGE_LIST_SUCCESS:
            return {
                ...state,
                search_photos_list_loading: false,
                search_photos_list:
                    state.search_photos_list.length > 0
                        ? [
                              ...state.search_photos_list,
                              ...compare(state.search_photos_list, payload as Array<CardData>)
                          ]
                        : [...state.search_photos_list, ...(payload as Array<CardData>)]
            };
        case GET_SEARCH_IMAGE_LIST_FAIL:
            return {
                ...state,
                search_photos_list_loading: false,
                error: payload
            };
        default:
            return state;
    }
};
