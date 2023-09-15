import { AxiosProgressEvent, AxiosRequestHeaders } from "axios";
import { REQUEST_METHODS } from "../constants";

export interface RequestPayload {
  url: string;
  method: REQUEST_METHODS;
  data?: Record<string, any>;
}
export interface CallApi {
  (config: CallApiConfig): Promise<any>;
}

export type CallApiConfig = {
  payload: RequestPayload;
  headers?: AxiosRequestHeaders;
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void;
};
export interface APIRequestHeaders {
  "Content-Type": string;
  Authorization?: string;
}

export interface QueryCallbackFunctions {
  onCompleted: () => void;
  onError: () => void;
}

export interface QueryCallback {
  (): QueryCallbackFunctions;
}
