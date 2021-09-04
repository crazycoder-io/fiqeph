// Import Dependencies
import {all} from "redux-saga/effects";

import photos from "./photos";

export default function* () {
    yield all([...photos]);
}
