import axios from "axios";
import { APP_ENV } from "./env";
import {store} from "./store/store";
import {IsLoadingActionTypes} from "./store/reducers/IsLoadingReducer";

const http_common = axios.create({
  baseURL: APP_ENV.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http_common.interceptors.request.use(
    (config: any) => {
      store.dispatch({
        type: IsLoadingActionTypes.SET_LOADING,
        payload: true
      });
      return config;
    },
    (error) => {
      store.dispatch({
        type: IsLoadingActionTypes.SET_LOADING,
        payload: false
      });
    }
);

http_common.interceptors.response.use(
    (resp: any) => {
      store.dispatch({
        type: IsLoadingActionTypes.SET_LOADING,
        payload: false
      });
      return resp;
    },
    (error) => {
      store.dispatch({
        type: IsLoadingActionTypes.SET_LOADING,
        payload: false
      });
    }
);

export default http_common;
