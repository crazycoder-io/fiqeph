import {DOWNLOAD_IMAGE, DOWNLOADED_IMAGE} from "../types";

export const startDownloadImage = () => ({
    type: DOWNLOAD_IMAGE
});

export const endDownloadImage = () => ({
    type: DOWNLOADED_IMAGE
});
