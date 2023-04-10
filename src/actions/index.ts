// import axios from "axios";
import { AnyAction, Dispatch } from "redux";
// import { baseurl } from "../constant";
import { Url, UrlListParams } from "../types";
import {
  mockDeleteUrl,
  mockPostUrl,
  mockSignupApi,
  mockUpdateUrl,
} from "../mockApi";
import { getUserUrls } from "../mockApi/storage";

export const Update_Token_Action = function (token: string) {
  return {
    type: "UPDATE_THE_TOKEN",
    payload: token,
  };
};

export const UPDATE_URLS_LIST = function (urlsList: object[]) {
  return {
    type: "UPDATING_LIST_OF_URLS",
    payload: urlsList,
  };
};

type RegistrationParams = {
  email: string;
  // password: string;
  // fName: string;
  // lName: string;
  // gender: "M" | "F";
};

export function signup({ email }: RegistrationParams, successCb: () => void) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await mockSignupApi({
        email,
      });

      const action = Update_Token_Action(response.token);
      dispatch(action);
      successCb();
    } catch (error) {
      console.error(error);
    }
  };
}

export function EDIT_URL_SUCCESS({
  editedUrl,
  selectedUrl,
}: {
  editedUrl: string;
  selectedUrl: Url | null;
}) {
  return {
    type: "EDIT_URL_SUCCESS",
    payload: {
      editedUrl,
      selectedUrl,
    },
  };
}

export function editUrl(
  { selectedUrl, editedUrl }: UrlListParams,
  onClosePopup: () => void
) {
  return async (dispatch: Dispatch) => {
    try {
      await mockUpdateUrl(selectedUrl!.id, editedUrl);

      const action = EDIT_URL_SUCCESS({ editedUrl, selectedUrl });
      dispatch(action);
    } catch (error) {
      console.log(error);
    }

    onClosePopup();
  };
}

type DeleteParams = {
  id: string;
  token: string;
  urlsList: Url[];
};
export function On_Delete_Api({ id, urlsList }: DeleteParams) {
  return async (dispatch: Dispatch) => {
    try {
      await mockDeleteUrl(id);

      dispatch(
        UPDATE_URLS_LIST(
          urlsList.filter((el) => {
            return el.id !== id;
          })
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
}

export function getUrlsList({ token }: { token: string }) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await getUserUrls();

      dispatch(UPDATE_URLS_LIST(response));
    } catch (error) {
      console.error(error);
    }
  };
}

type InputParams = {
  token: string;
  longUrl: string;
};
export function inputUrl(
  { longUrl }: InputParams,
  successCb: (shortUrl: string) => void
) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await mockPostUrl(longUrl);

      successCb(response.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };
}
