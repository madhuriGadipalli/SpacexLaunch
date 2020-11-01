import axios from 'axios';
export const DATA_SUCESS = "DATA_SUCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const FIREONLOADREQUEST = "FIREONLOADREQUEST";
export const FIREREQUESTONYEAR = "FIREREQUESTONYEAR";

export const fireRequestOnLoad = (data) => {
    const url = "https://api.spacexdata.com/v3/launches?limit=100"
    return function (dispatch) {
        dispatch({ type: FIREONLOADREQUEST });
        axios.get(
            url
        ).then(data => dispatch({
            type: DATA_SUCESS,
            data: data
        })).catch(error => dispatch({
            type: REQUEST_ERROR
        }))
    }
}

export const fireRequestOnYearSelection = (data) => {
    const url = "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;" + "launch_year=" + data
    return function (dispatch) {
        dispatch({ type: FIREREQUESTONYEAR });
        axios.get(
            url
        ).then(data => dispatch({
            type: DATA_SUCESS,
            data: data
        })).catch(error => dispatch({
            type: REQUEST_ERROR
        }))
    }
}

export const fireRequestOnSuccessfulLaunchAndLanding = (data, urlParam) => {
    const url = "https://api.spacexdata.com/v3/launches?limit=100&amp;" + urlParam + data
    return function (dispatch) {
        dispatch({ type: FIREREQUESTONYEAR });
        axios.get(
            url
        ).then(data => dispatch({
            type: DATA_SUCESS,
            data: data
        })).catch(error => dispatch({
            type: REQUEST_ERROR
        }))
    }
}
