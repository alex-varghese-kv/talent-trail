import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { APIRequestHeaders, CallApi, QueryCallback } from "types/request";

const defaultHeaders: APIRequestHeaders = {
  "Content-Type": "application/json",
};

/**
 * Generic function to initiate API calls.
 *
 * @param payload
 * @returns {object}
 */
export const callApi: CallApi = async ({
  payload,
  headers,
  // onUploadProgress,
}) => {
  const apiParams: AxiosRequestConfig = {
    ...payload,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    // onUploadProgress,
  };
  // Fire API request
  const apiResponse: AxiosResponse = await Axios(apiParams);
  return apiResponse;
};

// Global query callbacks
export const queryCallbacks: QueryCallback = () => {
  return {
    onCompleted: () => {
      // TODO: on query success global handler
    },
    onError: () => {
      // TODO: on query failed global handler
    },
  };
};
