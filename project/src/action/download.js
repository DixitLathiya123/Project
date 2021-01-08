import axios from 'axios'
import { toast } from 'react-toastify';
import FileDownload from 'js-file-download'
import { headerWithToken } from '../services/header';

export const DOWNLOAD_REQUEST = "DOWNLOAD_REQUEST"
export const DOWNLOAD_SUCCESS = "DOWNLOAD_SUCCESS"
export const DOWNLOAD_FAILURE = "DOWNLOAD_FAILURE"

//download
export const downloadRequest = () => {
    return {
        type: DOWNLOAD_REQUEST
    }
}
export const downloadSuccess = (download) => {
    return {
        type: DOWNLOAD_SUCCESS,
        payload: download,
    }
}
export const downloadFailure = (error) => {

    return {
        type: DOWNLOAD_FAILURE,
        ResponseStatus: '',
        payload: error
    }
}
export const download = (download) => {
    return (dispatch) => {
        dispatch(downloadRequest())
        axios({
            url: `${process.env.REACT_APP_API}/download/${download}`,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', download);
            document.body.appendChild(link);
            link.click();
        })
            .catch((error) => {
                console.log(error);
                const errors = error.message
                dispatch(downloadFailure(errors))
            })
    }
}