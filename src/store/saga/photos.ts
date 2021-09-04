/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {takeEvery, put, fork} from "redux-saga/effects";
import service from "../../config/service";
import {GET_IMAGE_LIST, GET_SEARCH_IMAGE_LIST} from "../types";
import {getImageListFail, getImageListSuccess} from "../actions/photos";
import {searchImagesFail, searchImagesSuccess} from "../actions/search";
import {TakeableChannel} from "redux-saga";

interface ResponseGenerator {
    config?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}

interface PhotosResponseGenerator extends ResponseGenerator {
    data?: Array<PhotoList>;
}

interface SearchResponseGenerator extends ResponseGenerator {
    data: {
        total: number;
        total_pages: number;
        results: Array<PhotoList>;
    };
}

type PhotoList = {
    id: string;
    description: string;
    likes: number;
    urls: {full: string};
    user: {
        username: string;
        name: string;
        portfolio_url: string;
    };
};

function* getImageList({payload}: {payload: {page: number}}) {
    try {
        const {page} = payload;
        const response: PhotosResponseGenerator = yield service.get("/photos?page=" + page);
        if (response.data) {
            const data = response.data.map((d: PhotoList) => ({
                id: d.id,
                uri: d.urls.full,
                title: d.description,
                likes: d.likes,
                user: {
                    username: d.user.username,
                    name: d.user.name,
                    portfolio_url: d.user.portfolio_url
                }
            }));
            yield put(getImageListSuccess(data));
        }
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        yield put(getImageListFail(errorMessage));
    }
}

function* getSearchImageList({payload}: {payload: {search: string; page: number}}) {
    try {
        const {page, search} = payload;
        const response: SearchResponseGenerator = yield service.get(
            "/search/photos?page=" + page + "&query=" + search
        );
        if (response.data.results) {
            const data = response.data.results.map((d: PhotoList) => ({
                id: d.id,
                uri: d.urls.full,
                title: d.description,
                likes: d.likes,
                user: {
                    username: d.user.username,
                    name: d.user.name,
                    portfolio_url: d.user.portfolio_url
                }
            }));
            yield put(searchImagesSuccess(data));
        }
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        yield put(searchImagesFail(errorMessage));
    }
}

function* watch() {
    yield takeEvery(GET_IMAGE_LIST as unknown as TakeableChannel<unknown>, getImageList);
    yield takeEvery(
        GET_SEARCH_IMAGE_LIST as unknown as TakeableChannel<unknown>,
        getSearchImageList
    );
}

export default [fork(watch)];
